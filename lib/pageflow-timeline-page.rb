require 'pageflow/timeline_page/engine'

module Pageflow
  module TimelinePage
    def self.plugin
      TimelinePage::Plugin.new
    end

    def self.page_type
      Pageflow::React.create_page_type('timeline_page', 'pageflow.timelinePage.Page')
    end
  end
end
