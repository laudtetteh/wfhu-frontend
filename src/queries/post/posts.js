import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      name
      description
      image {
        url
      }
      category {
        id
        name
      }
      published_at
    }
  }
`;

export default POSTS_QUERY;
