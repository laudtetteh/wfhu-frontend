import gql from "graphql-tag";

const PAGES_QUERY = gql`
    query Pages($limit: Int!) {
        pages(limit: $limit) {
            id
            name
            slug
            description
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

                ... on ComponentPageIntroCta {
                    intro_heading
                    intro_paragraph
                    intro_image {
                      formats
                    }
                }

                ... on ComponentPageConnectCta {
                    heading
                    paragraph
                    button_link
                    button_text
                }

                ... on ComponentPageNoOfPostsToShow {
                    no_of_posts
                }
            }

            published_at
        }
    }
`;

export default PAGES_QUERY;
