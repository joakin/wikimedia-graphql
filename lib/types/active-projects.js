const {
  activeProjectNames,
  fetchActiveForProject
} = require("../api/active-projects");

exports.typeDefs = `
  type Project {
    name: String!
    languages: [ProjectLanguageInfo!]!
  }
  type ProjectLanguageInfo {
    language: String!,
    code: String!,
    url: String!
  }
`;

const keys = Object.keys(activeProjectNames);

exports.query = (_, { project }) => {
  const ks = !project
    ? keys
    : project
        .reduce(
          (arr, filter) =>
            arr.concat(...keys.filter(p => p.indexOf(filter) > -1)),
          []
        )
        .filter((x, i, arr) => arr.indexOf(x) === i);
  console.log(ks);
  return Promise.all(ks.map(fetchActiveForProject));
};
