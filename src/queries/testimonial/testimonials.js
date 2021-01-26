import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials {
      id
      name
      description
      image {
        formats
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
