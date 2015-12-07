(function() {
  class Page extends React.Component {
    render() {
      var {PageWrapper,
           PageBackground, PageBackgroundImage, PageShadow,
           PageContent, PageHeader, PageText} = pageflow.react.components;
      var {Timeline} = pageflow.timelinePage;

      return (
        <PageWrapper>
          <PageBackground>
            <PageBackgroundImage page={this.props.page} />
            <PageShadow page={this.props.page} />
          </PageBackground>

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

  pageflow.timelinePage.Page = pageflow.react.createPage(Page);
}());
