const ejs = require('ejs')
    , p = require('path')
;



module.exports = (config = {}) => (plugin) => {

  const {ext = 'ejs', views = [], ...options} = config;

  // tell ejs the root directory so includes with absolute paths can be resolved
  if (!options.root) options.root = plugin.source;

  plugin.registerRenderer(ext, (template, metadata, templateHelpers) => {

    // add the current file's directory to the views array so that includes with relative paths can be resolved
    const allViews = views.concat([p.join(plugin.source, metadata.dirname)]);

    return ejs.render(
      template,
      {...metadata, ...templateHelpers},
      {views: allViews, ...options},
    );

  });

}
