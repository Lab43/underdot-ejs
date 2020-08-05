const ejs = require('ejs');



module.exports = (config = {}) => (plugin) => {

  const {ext = 'ejs', ...options} = config;

  plugin.registerRenderer(ext, (template, metadata, templateHelpers) => {
    return ejs.render(template, {...metadata, ...templateHelpers}, options);
  });

}
