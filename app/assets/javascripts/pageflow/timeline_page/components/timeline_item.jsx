
(function() {
  var resolve = pageflow.react.resolve;

  class TimelineItem extends React.Component {
    render() {
      var {PageLink, PageThumbnail} = pageflow.react.components;
      var {TimelineItemSpacer} = pageflow.timelinePage;
      var targetPage = this.props.pageLink.targetPage;

      return (
        <li className={this.className()}>
          <TimelineItemSpacer pageLink={this.props.pageLink} />

          <div className="timeline_item-wrapper">
            <PageLink page={targetPage}>
              <PageThumbnail page={targetPage}
                             customThumbnailId={this.props.pageLink.thumbnail_image_id} />

              <div className="timeline_item-caption">
                {this.caption()}
              </div>
            </PageLink>
          </div>
        </li>
      );
    }

    className() {
      return [
        'timeline_item',
        this.props.pageLink.timeline_item_position,
        this.props.pageLink.timeline_item_size || 'medium'
      ].join(' ');
    }

    caption() {
      return this.props.pageLink.title ||
             (this.props.pageLink.targetPage && this.props.pageLink.targetPage.title);
    }
  };

  pageflow.timelinePage.TimelineItem = pageflow.react.createContainer(TimelineItem, {
    fragments: {
      pageLink: {
        targetPage: resolve('page', {
          property: 'target_page_id'
        })
      }
    }
  });
}());
