lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pageflow/timeline_page/version'

Gem::Specification.new do |spec|
  spec.name          = 'pageflow-timeline-page'
  spec.version       = Pageflow::TimelinePage::VERSION
  spec.authors       = ['Codevise Solutions']
  spec.email         = ['info@codevise.de']
  spec.summary       = 'Pageflow page type for links ordered as timeline.'
  spec.homepage      = 'https://github.com/codevise/pageflow-timeline-page'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.required_ruby_version = '~> 2.1'

  spec.add_dependency 'pageflow', ['>= 12.0.0.rc6', '< 17']

  spec.add_development_dependency 'bundler', ['>= 1.0', '< 3']
  spec.add_development_dependency 'pageflow-support', ['>= 14', '< 17']
  spec.add_development_dependency 'rspec-rails', '~> 3.0'
  spec.add_development_dependency 'rake', '~> 12.0'

  # Semantic versioning rake tasks
  spec.add_development_dependency 'semmy', '~> 1.0'
end
