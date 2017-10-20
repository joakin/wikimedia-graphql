const domino = require("domino");
const { URL } = require("url");
const fetch = require("./fetch");
const createCache = require("./cache");

const cache = createCache();

const activeProjectNames = (exports.activeProjectNames = {
  wikipedia: "Wikipedias",
  wiktionary: "Wiktionaries",
  wikiquote: "Wikiquotes",
  wikinews: "Wikinews",
  wikisource: "Wikisources",
  wikibooks: "Wikibooks",
  wikiversity: "Wikiversity",
  wikivoyage: "Wikivoyage"
});

function active(projectKey) {
  const projects = Object.keys(activeProjectNames);

  if (projects.indexOf(projectKey) === -1)
    throw new Error(
      `Project ${projectKey} not in allowed projects list. Please use one of ${projects.toString()}`
    );

  return `https://meta.wikimedia.org/w/index.php?title=Template:Active_${activeProjectNames[
    projectKey
  ]}&action=render`;
}

function processActiveProjectsHtml(html) {
  const window = domino.createWindow(html);
  const document = window.document;
  return Array.from(
    document.querySelectorAll(".mw-parser-output>p:first-child>span")
  ).map(span => {
    const a = span.querySelector("a");
    const small = span.querySelector("small");
    return {
      language: a.textContent,
      code: small.textContent.replace(/[\(\)]/g, ""),
      url: new URL(a.href).origin
    };
  });
}

exports.fetchActiveForProject = project =>
  cache.try(active(project), key =>
    fetch(key)
      .then(res => res.text())
      .then(processActiveProjectsHtml)
      .then(languages => ({
        name: project,
        languages
      }))
  );
