import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
    query Testimonials {
        testimonials(limit: 4) {
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
