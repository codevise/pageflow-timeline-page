(function() {
  const {registerPageType, connectInPage, combine} = pageflow.react;
  const {pageAttributes} = pageflow.react.selectors;

  class Page extends React.Component {
    render() {
      var {PageWrapper,
           MediaPageBackground,
           PageContent, PageHeader, PageText} = pageflow.react.components;

      var {Timeline} = pageflow.timelinePage;

      return (
        <PageWrapper>
          <MediaPageBackground page={this.props.page} />

          <PageContent>
            <PageHeader page={this.props.page} />
            <PageText page={this.props.page} />
            <Timeline pageLinks={this.props.page.pageLinks}
                      layout={this.props.page.timelineLayout}/>
          </PageContent>
        </PageWrapper>
      );
    }
  };

  registerPageType('timeline_page', {
    component: connectInPage(combine({
      page: pageAttributes()
    }))(Page),

    reduxModules: [
      pageflow.react.mediaPageBackgroundReduxModule
    ]
  });
}());
