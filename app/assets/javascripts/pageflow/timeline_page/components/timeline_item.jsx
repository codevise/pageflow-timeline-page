(function() {
  const {connect, combine} = pageflow.react;
  const {pageAttributes, prop} = pageflow.react.selectors;

  class TimelineItem extends React.Component {
    render() {
      var {PageLink, LazyLoadedPageThumbnail} = pageflow.react.components;
      var {TimelineItemSpacer, TimelineItemCaption} = pageflow.timelinePage;
      var targetPage = this.props.targetPage;

      return (
        <li className={this.className()}>
          <TimelineItemSpacer pageLink={this.props.pageLink} />

          <div className="timeline_item-wrapper">
            <PageLink pageLink={this.props.pageLink}>
              <LazyLoadedPageThumbnail className="timeline_item-thumbnail"
                                       imageStyle="thumbnail_large"
                                       page={targetPage}
                                       customThumbnailId={this.props.pageLink.thumbnailImageId} />
              <TimelineItemCaption tagline={this.props.pageLink.tagline}
                                   caption={this.caption()} />
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
             (this.props.targetPage && this.props.targetPage.title);
    }
  };

  pageflow.timelinePage.TimelineItem = connect(combine({
    targetPage: pageAttributes({id: prop('pageLink.targetPageId')})
  }))(TimelineItem);
}());
