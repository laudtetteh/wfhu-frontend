import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts($limit: Int!)  {
        posts(limit: $limit) {
            id
            name
            slug
            description
            image {
                formats
            }
            category {
                id
                name
                slug
            }
            published_at
        }
    }
`;

export default POSTS_QUERY;
