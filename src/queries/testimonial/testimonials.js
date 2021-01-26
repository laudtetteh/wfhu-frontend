import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
