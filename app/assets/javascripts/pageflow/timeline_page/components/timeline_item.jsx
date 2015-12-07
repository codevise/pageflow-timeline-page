
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
            <PageLink pageLink={this.props.pageLink}>
              <PageThumbnail className="timeline_item-thumbnail"
                             imageStyle="thumbnail_large"
                             page={targetPage}
                             customThumbnailId={this.props.pageLink.thumbnailImageId} />

              <div className="timeline_item-caption">
                <span className="timeline_item-tagline">{this.props.pageLink.tagline}</span>
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
        'position_' + (this.props.pageLink.timelineItemPosition || 'left'),
        'alignment_' + this.alignment(),
        this.props.pageLink.timelineItemSize || 'medium'
      ].join(' ');
    }

    alignment() {
      var position = this.props.pageLink.timelineItemPosition;

      if (this.props.timelineLayout === 'right') {
        return 'right';
      }
      else if (this.props.timelineLayout === 'left') {
        return 'left';
      }
      else if (this.props.timelineLayout === 'margin') {
        return position === 'right' ? 'right' : 'left';
      }
      else {
        return position === 'right' ? 'left' : 'right';
      }
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
          property: 'targetPageId'
        })
      }
    }
  });
}());
