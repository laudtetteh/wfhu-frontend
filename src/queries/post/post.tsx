import gql from "graphql-tag";

export const POST_QUERY = gql`
    query Posts($slug: String!) {
        posts(where: {slug: $slug}) {
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
