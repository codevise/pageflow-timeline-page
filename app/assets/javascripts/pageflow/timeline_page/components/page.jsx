(function() {
  class Page extends pageflow.react.components.Page {
    render() {
      var {PageWrapper, PageBackground, PageContent, PageHeader, PageBackgroundImage} = pageflow.react.components;
      var {Timeline} = pageflow.timelinePage;
  
      return (
        <PageWrapper>
          <PageBackground>
            <PageBackgroundImage page={this.props.page} />
          </PageBackground>
  
          <PageContent>
            <PageHeader page={this.props.page} />
            <Timeline pageLinks={this.props.page.pageLinks} />
          </PageContent>
        </PageWrapper>
      );
    }
  };
  
  pageflow.timelinePage.Page = pageflow.react.createContainer(Page, {
    resolve: {
      pageLinks: {
        type: 'pageLinks'
      }
    }
  });
}());
