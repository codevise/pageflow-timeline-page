(function() {
  const {connectInPage, combine} = pageflow.react;
  const {editorOnly} = pageflow.react.components;
  const {updatePageLink} = pageflow.react.actions;

  class TimelineItemEditorMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        top: 0
      };
    }

    render() {
      var {Draggable} = pageflow.react.components;

      var position = {x: 0, y: this.state.top};
      var bounds = {left: 0, right: 0, top: 0, bottom: 1000};

      return (
        <Draggable position={position}
                   grid={[5, 5]}
                   bounds={bounds}
                   handle=".timeline_item_editor_menu-handle"
                   onStart={this._handleDragStart.bind(this)}
                   onDrag={this._handleDrag.bind(this)}
                   onStop={this._handleDragStop.bind(this)}>

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

    componentWillReceiveProps(nextProps) {
      if (nextProps.top !== this.props.top) {
        this.setState({
          top: nextProps.top
        });
      }
    }

    _handleDragStart() {
      this.context.pageScroller.disable();
    }

    _handleDrag(event, dragEvent) {
      this.setState({top: dragEvent.y});
      this.props.onDrag(dragEvent.y);
    }

    _handleDragStop(event, dragEvent) {
      this.props.onDragStop(dragEvent.y);
      this.context.pageScroller.enable();
    }

    _handleEditClick() {
      pageflow.editor.navigate(`/page_links/${this.props.pageLink.id}`, {trigger: true})
    }

    _handleToggleSizeClick() {
      var sizes = ['large', 'small', 'medium'];
      var currentSizeIndex = sizes.indexOf(this.props.pageLink.timelineItemSize);
      var newSize = sizes[(currentSizeIndex + 1) % sizes.length];

      this.props.updatePageLink({
        linkId: this.props.pageLink.id,
        name: 'timelineItemSize',
        value: newSize
      });
    }

    _handleTogglePositionClick() {
      this.props.updatePageLink({
        linkId: this.props.pageLink.id,
        name: 'timelineItemPosition',
        value: this.props.pageLink.timelineItemPosition === 'right' ? 'left' : 'right'
      });
    }
  };

  TimelineItemEditorMenu.contextTypes = {
    pageScroller: React.PropTypes.object
  }

  pageflow.timelinePage.TimelineItemEditorMenu = editorOnly(connectInPage(null, {
    updatePageLink
  })(TimelineItemEditorMenu));
}());
