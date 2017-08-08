(function() {
  const {connectInPage} = pageflow.react;
  const {updatePageLink} = pageflow.react.actions;

  class TimelineItemSpacer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const {TimelineItemEditorMenu} = pageflow.timelinePage;
      const {Measure} = pageflow.react.components;

      return (
        <Measure whitelist={['width']}>
          { ({width}) =>
            <div className={this._className()}>
              <div className="timeline_item_spacer-inner" style={this._style()} />
              <TimelineItemEditorMenu pageLink={this.props.pageLink}
                                      top={this._menuTop(width)}
                                      onDrag={this._handleDrag.bind(this)}
                                      onDragStop={top => this._handleDragStop(top, width)}/>
            </div>
          }
        </Measure>
      );
    }

    _className() {
      return [
        'timeline_item_spacer',
        this._isDragging() ? 'is_dragging' : null
      ].join(' ');
    }

    _style() {
      if (this._isDragging()) {
        return {
          height: this.state.height
        };
      }
      else {
        return {
          paddingTop: this.props.pageLink.top + '%'
        };
      }
    }

    _menuTop(width) {
      return width * (this.props.pageLink.top || 0) / 100;
    }

    _isDragging() {
      return this.state && this.state.dragging;
    }

    _handleDrag(top) {
      this.setState({
        dragging: true,
        height: top
      });
    }

    _handleDragStop(top, width) {
      this.setState({
        dragging: false
      });

      this.props.updatePageLink({
        linkId: this.props.pageLink.id,
        name: 'top',
        value: top / width * 100
      });
    }
  }

  pageflow.timelinePage.TimelineItemSpacer = connectInPage(null, {
    updatePageLink
  })(TimelineItemSpacer);
}());
