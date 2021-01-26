import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      name
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default POSTS_QUERY;
