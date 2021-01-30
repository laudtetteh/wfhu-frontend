import gql from "graphql-tag";

const PAGE_QUERY = gql`
    query Pages($id: ID!) {
        page(id: $id) {
            id
            name
            slug
            description
            image {
                formats
            }
            seo {
                title
                description
                meta {
                    name
                    content
                }
            }
            dynamic_fields {
                __typename
                ... on ComponentPageNoOfPostsToShow {
                    no_of_posts
                }
            }
            published_at
        }
    }
`;

export default PAGE_QUERY;
