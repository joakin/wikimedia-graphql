const { wikipedia } = require("./url");
const fetch = require("./fetch");

const url = (project, title) =>
  `?format=json&formatversion=2&action=query&generator=search&gsrsearch=morelike:${encodeURIComponent(
    title
  )}&gsrnamespace=0&gsrwhat=text&gsrinfo=&gsrprop=redirecttitle&gsrlimit=5`;

module.exports = (project, title) =>
  fetch(wikipedia.action(project) + url(project, title))
    .then(res => res.json())
    .then(res =>
      res.query.pages.reduce((arr, page) => {
        arr[page.index] = page.title;
        return arr;
      }, [])
    );
