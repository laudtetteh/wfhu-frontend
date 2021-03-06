import gql from "graphql-tag";

export const CATEGORY_POSTS_QUERY = gql`
    query Categories($slug: String!) {
        categories(where: {slug: $slug}) {
            id
            name
            slug
            posts {
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
    }
`;
