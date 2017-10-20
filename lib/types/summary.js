exports.typeDefs = `
  type Summary {
    title: String!
    displaytitle: String!
    pageid: Int!
    extract: String!
    extract_html: String!
    thumbnail: Thumbnail
    originalimage: Image
    lang: String!
    dir: String!
    timestamp: String!
    description: String
  }
`;
