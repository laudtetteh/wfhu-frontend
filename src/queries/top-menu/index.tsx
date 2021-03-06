import gql from "graphql-tag";

export const TOPMENU_QUERY = gql`
    query TopMenu {
      topMenu {
        id
        link {
            id
            label
            path
        }
      }
    }
`;
