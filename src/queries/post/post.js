import gql from "graphql-tag";

const POST_QUERY = gql`
    query Posts($id: ID!) {
        post(id: $id) {
            id
            name
            description
            image {
                formats
            }
            category {
                id
                name
            }
            published_at
        }
    }
`;

export default POST_QUERY;
