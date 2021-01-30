import gql from "graphql-tag";

const PAGES_QUERY = gql`
    query Pages($slug: String!) {
        pages(where: {slug: $slug}) {
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

export default PAGES_QUERY;
