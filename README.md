# Pageflow Timeline Page

[![Gem Version](https://badge.fury.io/rb/pageflow-timeline-page.svg)](http://badge.fury.io/rb/pageflow-timeline-page)

Page type to display a chronological list of page links.

## Installation

Add this line to your application's Gemfile:

    # Gemfile
    gem 'pageflow-timeline-page'

Register the plugin:

    # config/initializers/pageflow.rb
    Pageflow.configure do |config|
      config.plugin(Pageflow::TimelinePage.plugin)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/components.js
    //= require "pageflow/timeline_page/components"

    # app/assets/javascripts/pageflow/application.js
    //= require "pageflow/timeline_page"

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/timeline_page/editor

    # app/assets/stylesheets/pageflow/application.css.scss
    @import "pageflow/timeline_page";

Execute `bundle install` and restart the application server.

Now you can enable the page type in your feature settings.

## Troubleshooting

If you run into problems while installing the page type, please also
refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting)
wiki page in the
[Pageflow repository](https://github.com/codevise/pageflow). If that
doesn't help, consider
[filing an issue](https://github.com/codevise/pageflow-timeline-page/issues).

## Contributing Locales

Edit the translations directly on the
[pageflow-timeline-page](http://www.localeapp.com/projects/public?search=tf/pageflow-timeline-page)
locale project.
