exports.typeDefs = `
  type Image {
    source: String!
    width: Int!
    height: Int!
  }

  type Thumbnail {
    source: String!
    width: Int!
    height: Int!
    original: String!
  }
`;
