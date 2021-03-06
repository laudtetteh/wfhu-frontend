import gql from "graphql-tag";

const PAGE_QUERY = gql`
    query Pages($slug: String!) {
        pages(where: {slug: $slug}) {
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

                ... on ComponentPageRowOfGifs {
                    gifs_component {
                      gif {
                        url
                      }
                    }
                }

                ... on ComponentPageSingleImage {
                    profile_pic {
                        formats
                    }
                }
            }

            published_at
        }
    }
`;

export default PAGE_QUERY;
