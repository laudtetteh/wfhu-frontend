import gql from "graphql-tag";

export const TESTIMONIALS_QUERY = gql`
    query Testimonials($limit: Int!)  {
        testimonials(limit: $limit) {
            id
            name
            description
            image {
                formats
            }
        }
    }
`;
