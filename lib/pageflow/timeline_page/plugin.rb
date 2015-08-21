module Pageflow
  module TimelinePage
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.features.register(PageTypeFeature.new(TimelinePage.page_type))
      end
    end
  end
end
