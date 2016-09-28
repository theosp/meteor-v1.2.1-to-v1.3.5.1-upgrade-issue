Package.describe({
  name: "example:aaa-compiler",
  summary: "", 
  version: "1.0.0"
});

var pluginOptions = {
  name: 'build-plugin-example',
  sources: [
    'build-plugin.js'
  ],
  npmDependencies: {}
};

Package._transitional_registerBuildPlugin(pluginOptions);
