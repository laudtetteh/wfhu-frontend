import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
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

export default TESTIMONIALS_QUERY;
