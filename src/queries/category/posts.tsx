import gql from "graphql-tag";

const CATEGORY_POSTS_QUERY = gql`
  query Category($slug: String!) {
    category(id: $slug) {
      id
      name
      posts {
        id
        name
        slug
        description
        image {
          formats
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
