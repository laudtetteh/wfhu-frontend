import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts($limit: Int, $exclude: ID, $sort: String) {
        posts(sort: $sort, limit: $limit, where: {_id_nin: [$exclude]}) {
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
