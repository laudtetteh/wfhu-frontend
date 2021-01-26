import gql from "graphql-tag";

const TOPMENU_QUERY = gql`
    query TopMenu {
      topMenu {
        id
        link {
          id
          label
          URL
        }
      }
    }
`;

export default TOPMENU_QUERY;
