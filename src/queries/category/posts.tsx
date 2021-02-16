import gql from "graphql-tag";

const CATEGORY_POSTS_QUERY = gql`
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
            }
        }
    }
`;

export default CATEGORY_POSTS_QUERY;
