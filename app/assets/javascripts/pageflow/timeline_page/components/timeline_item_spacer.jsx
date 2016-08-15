(function() {
  class TimelineItemSpacer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      var {TimelineItemEditorMenu} = pageflow.timelinePage;

      return (
        <div className={this._className()}>
          <div className="timeline_item_spacer-inner" style={this._style()} />
          <TimelineItemEditorMenu pageLink={this.props.pageLink}
                                  top={this._menuTop()}
                                  onDrag={this._handleDrag.bind(this)}
                                  onDragStop={this._handleDragStop.bind(this)}/>
        </div>
      );
    }

    pageDidActivate() {
      this._measure();
    }

    pageDidResize() {
      this._measure();
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

    _menuTop() {
      if (this.state.width) {
        return this.state.width * (this.props.pageLink.top || 0) / 100;
      }

      return 0;
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

    _handleDragStop(top) {
      this.setState({
        dragging: false
      });

      var width = ReactDOM.findDOMNode(this).offsetWidth;

      this.props.onUpdatePageLink({
        id: this.props.pageLink.id,
        attributes: {
          top: top / width * 100
        }
      });
    }

    _measure() {
      this.setState({
        width: ReactDOM.findDOMNode(this).offsetWidth
      });
    }
  }

  const {
    createContainer, mutate, withPageLifecycle
  } = pageflow.react;

  pageflow.timelinePage.TimelineItemSpacer = createContainer(withPageLifecycle(TimelineItemSpacer), {
    fragments: {
      onUpdatePageLink: mutate('updatePageLink')
    }
  });
}());
