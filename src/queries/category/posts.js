import gql from "graphql-tag";

const CATEGORY_POSTS_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
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
      }
    }
  }
`;

export default CATEGORY_POSTS_QUERY;
