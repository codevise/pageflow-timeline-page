module Pageflow
  module TimelinePage
    class Engine < Rails::Engine
      isolate_namespace Pageflow::TimelinePage

      config.i18n.load_path += Dir[config.root.join('config', 'locales', '**', '*.yml').to_s]

      if Rails.respond_to?(:autoloaders)
        lib = root.join('lib')

        config.autoload_paths << lib
        config.eager_load_paths << lib

        initializer 'pageflow_progress_navigation_bar.autoloading' do
          Rails.autoloaders.main.ignore(
            lib.join('generators'),
            lib.join('pageflow-timeline-page.rb'),
            lib.join('pageflow/timeline_page/version.rb')
          )
        end
      else
        config.autoload_paths << File.join(config.root, 'lib')
      end

      initializer "pageflow-timline-page.add_watchable_files", group: :all do |app|
        app.config.watchable_files.concat Dir["#{config.root}/app/assets/javascripts/**/*.jsx*"]
      end
    end
  end
end
