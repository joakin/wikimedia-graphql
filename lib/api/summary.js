const fetch = require("./fetch");
const { wikipedia } = require("./url");

const url = title => `/page/summary/${encodeURIComponent(title)}`;

module.exports = (project, title) =>
  fetch(wikipedia.rest(project) + url(title)).then(res => res.json());
