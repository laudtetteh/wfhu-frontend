import gql from "graphql-tag";

export const TESTIMONIAL_QUERY = gql`
  query Testimonials($id: ID!) {
    testimonial(id: $id) {
      id
      name
      description
      image {
        formats
      }
      published_at
    }
  }
`;
