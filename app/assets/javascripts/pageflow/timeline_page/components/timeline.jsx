(function() {
  pageflow.timelinePage.Timeline = class extends React.Component {
    render() {
      return (
        <ul className="timeline">
          {this.renderTimelineItems()}
        </ul>
      );
    }

    renderTimelineItems() {
      var {TimelineItem} = pageflow.timelinePage;

      return this.pageLinks().map((pageLink) => {
        return (
          <TimelineItem timelineLayout={this.props.layout} pageLink={pageLink} key={pageLink.id} />
        );
      });
    }

    pageLinks() {
      return this.props.pageLinks || [];
    }
  };
}());
