const relatedPages = require("../api/related-pages");
const page = require("../api/page");
const summary = require("../api/summary");

exports.typeDefs = `
  type Page {
    # Normalized title
    title: String!
    project: String!
    summary: Summary!
    related: [Page!]!
  }
`;

exports.query = (_, { title, project }) => page(project, title);

exports.resolvers = {
  summary: ({ title, project }) => summary(project, title),
  related: ({ title, project }) =>
    relatedPages(project, title).then(titles =>
      titles.map(t => page(project, t))
    )
};
