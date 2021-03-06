import gql from "graphql-tag";

export const CATEGORY_QUERY = gql`
    query Categories($slug: String!) {
        categories(where: {slug: $slug}) {
          id
          name
          slug
        }
      }
`;
