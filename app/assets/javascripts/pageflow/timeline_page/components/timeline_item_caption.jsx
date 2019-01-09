(function() {
  pageflow.timelinePage.TimelineItemCaption = class extends React.Component {
    render() {
      var tagline = this.props.tagline;
      var caption = this.props.caption;

      if(!(tagline || caption)) {
        return null;
      } else return(
        <div className="timeline_item-caption">
          <span className="timeline_item-tagline">{tagline}</span>
          {caption}
        </div>
      );
    }
  };
}());
