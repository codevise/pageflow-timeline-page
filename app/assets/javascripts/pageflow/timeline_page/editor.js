//= require_tree ./editor/models
//= require_self

pageflow.editor.pageTypes.register('timeline_page', {
  configurationEditorView: pageflow.ConfigurationEditorView.extend({
    configure: function() {
      this.tab('general', function() {
        this.group('general');
      });

      this.tab('files', function() {
        this.group('background');
        this.input('thumbnail_image_id', pageflow.FileInputView, {
          collection: 'image_files',
          positioning: false
        });
      });

      this.tab('links', function() {
        this.input('timeline_layout', pageflow.SelectInputView, {
          values: ['center', 'left', 'right', 'margin']
        });
        this.view(pageflow.PageLinksView, {
          model: this.model.page
        });
      });

      this.tab('options', function() {
        this.group('options');
      });
    }
  }),

  pageLinks: function(configuration) {
    configuration._timelinePageLinks = configuration._timelinePageLinks ||
      new pageflow.OrderedPageLinksCollection(null, {
        model: pageflow.timelinePage.PageLink,
        configuration: configuration
      });

    return configuration._timelinePageLinks;
  },

  pageLinkConfigurationEditorView: pageflow.ConfigurationEditorView.extend({
    configure: function() {
      this.tab('general', function() {
        this.group('page_link');

        this.input('thumbnail_image_id', pageflow.FileInputView, {
          collection: 'image_files',
          fileSelectionHandler: 'pageLink'
        });
        this.input('timeline_item_position', pageflow.SelectInputView, {
          values: ['left', 'right']
        });
        this.input('timeline_item_size', pageflow.SelectInputView, {
          values: ['small', 'medium', 'large']
        });
        this.input('tagline', pageflow.TextInputView);
        this.input('title', pageflow.TextInputView);
      });
    }
  })
});
