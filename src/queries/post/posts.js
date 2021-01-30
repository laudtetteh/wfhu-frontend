import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts($limit: Int!)  {
        posts(limit: $limit) {
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

export default POSTS_QUERY;