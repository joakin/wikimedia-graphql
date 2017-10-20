const fetch = require("./fetch");
const { wikipedia } = require("./url");
const createCache = require("./cache");

const cache = createCache();
const url = `?format=json&action=query&meta=siteinfo&siprop=general%7Cnamespaces%7Cnamespacealiases%7Cspecialpagealiases&smaxage=3600&maxage=3600`;

module.exports = project =>
  cache.try(wikipedia.action(project) + url, key =>
    fetch(key)
      .then(res => res.json())
      .then(json => json.query)
  );
