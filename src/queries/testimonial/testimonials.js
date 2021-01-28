import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
    query Testimonials {
        testimonials(limit: 3) {
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
