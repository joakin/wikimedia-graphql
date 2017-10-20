const activeProjects = require("./active-projects");
const page = require("./page");
const summary = require("./summary");
const image = require("./image");

exports.typeDefs = [
  activeProjects.typeDefs,
  page.typeDefs,
  summary.typeDefs,
  image.typeDefs,
  `
  type Query {
    # Lists the active projects with the supported languages
    activeProjects(project: [String!]): [Project!]!
    # Get a page in a language
    page(project: String!, title: String!): Page!
  }
  `
];

exports.resolvers = {
  Query: {
    activeProjects: activeProjects.query,
    page: page.query
  },
  Page: page.resolvers
};
