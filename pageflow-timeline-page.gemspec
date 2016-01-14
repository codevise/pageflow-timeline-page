Gem::Specification.new do |spec|
  spec.name          = 'pageflow-timeline-page'
  spec.version       = '0.1.0.apha'
  spec.authors       = ['Codevise Solutions']
  spec.email         = ['info@codevise.de']
  spec.summary       = 'Pageflow page type for links ordered as timeline.'
  spec.homepage      = 'https://github.com/codevise/pageflow-timeline-page'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_dependency 'pageflow', '~> 0.10.pre'

  # Using translations from rails locales in javascript code.
  spec.add_dependency 'i18n-js'
end
