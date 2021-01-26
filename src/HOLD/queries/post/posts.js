import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      name
    }
  }
`;

export default POSTS_QUERY;
