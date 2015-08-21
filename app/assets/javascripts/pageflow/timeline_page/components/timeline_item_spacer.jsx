(function() {
  class TimelineItemSpacer extends React.Component {
    render() {
      var {TimelineItemEditorMenu} = pageflow.timelinePage;

      return (
        <div className={this.className()} style={{height: this.height()}} >
          <TimelineItemEditorMenu pageLink={this.props.pageLink}
                                  top={this.height()}
                                  onDrag={this.onDrag.bind(this)}
                                  onDragStop={this.onDragStop.bind(this)}/>
        </div>
      );
    }

    className() {
      return [
        'timeline_item_spacer',
        this.isDragging() ? 'is_dragging' : null
      ].join(' ');
    }

    height() {
      return this.isDragging() ? this.state.height : this.props.pageLink.top;
    }

    isDragging() {
      return this.state && this.state.dragging;
    }

    onDrag(top) {
      this.setState({
        dragging: true,
        height: top
      });
    }

    onDragStop(top) {
      this.setState({
        dragging: false
      });
    }
  }

  pageflow.timelinePage.TimelineItemSpacer = TimelineItemSpacer;
}());
