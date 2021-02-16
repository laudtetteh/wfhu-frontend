import gql from "graphql-tag";

const CATEGORY_QUERY = gql`
    query Categories($slug: String!) {
        categories(where: {slug: $slug}) {
          id
          name
          slug
        }
      }
`;

export default CATEGORY_QUERY;
