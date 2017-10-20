const siteinfo = require("./siteinfo");
const { Title } = require("mediawiki-title");

module.exports = (project, title) =>
  siteinfo(project).then(siteinfo => ({
    title: Title.newFromText(title, siteinfo).getPrefixedDBKey(),
    project
  }));
