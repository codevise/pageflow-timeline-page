module PageflowTimelinePage
  class InstallGenerator < Rails::Generators::Base
    desc 'Install the Pageflow plugin and the necessary migrations.'

    def register_plugin
      append_to_file('app/assets/javascripts/components.js') do
        "//= require pageflow/timeline_page/components\n"
      end
    end

    private

    def engine_name_suffix
      engine.engine_name.gsub(/^pageflow_/, '')
    end

    def engine
      Pageflow::TimelinePage::Engine
    end
  end
end
