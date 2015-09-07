(function() {
  var mutate = pageflow.react.mutate;

  class TimelineItemEditorMenu extends React.Component {
    render() {
      var {Draggable} = pageflow.react.components;

      var start = {x: 0, y: this.props.top || 0};
      var bounds = {left: 0, right: 0, top: 0, bottom: 1000};

      return (
        <Draggable start={start}
                   grid={[5, 5]}
                   bounds={bounds}
                   handle=".timeline_item_editor_menu-handle"
                   onStart={this.onDragStart.bind(this)}
                   onDrag={this.onDrag.bind(this)}
                   onStop={this.onDragStop.bind(this)}>

          <div className="timeline_item_editor_menu">
            <div className="timeline_item_editor_menu-handle"
                 title="Zum verschieben ziehen" />
            <div className="timeline_item_editor_menu-button timeline_item_editor_menu-toggle_position"
                 title="Rechts/links umschalten"
                 onClick={this._handleTogglePositionClick.bind(this)}/>
            <div className="timeline_item_editor_menu-button timeline_item_editor_menu-toggle_size"
                 title="Größe umschalten"
                 onClick={this._handleToggleSizeClick.bind(this)} />
            <div className="timeline_item_editor_menu-button timeline_item_editor_menu-edit"
                 title="Bearbeiten"
                 onClick={this._handleEditClick.bind(this)} />
          </div>
        </Draggable>
      );
    }

    onDragStart() {
      this.context.pageScroller.disable();
    }

    onDrag(event, ui) {
      this.props.onDrag(ui.position.top);
    }

    onDragStop(event, ui) {
      this.props.onDragStop(ui.position.top);
      this.context.pageScroller.enable();

      mutate('updatePageLink', {
        id: this.props.pageLink.id,
        attributes: {
          top: ui.position.top
        }
      });
    }

    _handleEditClick() {
      pageflow.editor.navigate(`/page_links/${this.props.pageLink.id}`, {trigger: true})
    }

    _handleToggleSizeClick() {
      var sizes = ['large', 'small', 'medium'];
      var currentSizeIndex = sizes.indexOf(this.props.pageLink.timeline_item_size);
      var newSize = sizes[(currentSizeIndex + 1) % sizes.length];

      mutate('updatePageLink', {
        id: this.props.pageLink.id,
        attributes: {
          timeline_item_size: newSize
        }
      });
    }

    _handleTogglePositionClick() {
      mutate('updatePageLink', {
        id: this.props.pageLink.id,
        attributes: {
          timeline_item_position: this.props.pageLink.timeline_item_position === 'right' ? 'left' : 'right'
        }
      });
    }
  };

  TimelineItemEditorMenu.contextTypes = {
    pageScroller: React.PropTypes.object
  }

  pageflow.timelinePage.TimelineItemEditorMenu = pageflow.react.createContainer(TimelineItemEditorMenu, {
    editorOnly: true
  });
}());
