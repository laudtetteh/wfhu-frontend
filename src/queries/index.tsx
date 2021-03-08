// GraphQL Queries to consume strapi API
import gql from "graphql-tag";

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      slug
    }
  }
`;

export const CATEGORY_QUERY = gql`
    query Categories($slug: String!) {
        categories(where: {slug: $slug}) {
          id
          name
          slug
        }
      }
`;

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

export const EVENT_QUERY = gql`
    query Events($slug: String!) {
        events(where: {slug: $slug}) {
            id
            name
            slug
            description
            event_details
            event_start
            event_end
            event_timezone
            event_ended
            keep_on_homepage
            image {
                formats
            }
            published_at
        }
    }
`;

export const EVENTS_QUERY = gql`
    query Events($keep_on_homepage: Boolean, $event_ended: Boolean, $exclude: ID, $sort: String, $limit: Int, $event_start_gt: DateTime, $event_start_lt: DateTime)  {
        events(sort: $sort, limit: $limit, where: {_id_nin: [$exclude], keep_on_homepage: $keep_on_homepage, event_ended: $event_ended, event_start_gt: $event_start_gt, event_start_lt: $event_start_lt}) {
            id
            name
            slug
            description
            event_details
            event_start
            event_end
            event_timezone
            event_ended
            keep_on_homepage
            image {
                formats
            }
            published_at
        }
    }
`;

export const PAGE_QUERY = gql`
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

export const PAGES_QUERY = gql`
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

export const POSTS_QUERY = gql`
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

export const SITEOPTIONS_QUERY = gql`
    query SiteOptions {
        siteOption {
            id
            social {
                youtube
                instagram
                facebook
                linkedin
                twitter
            }
        }
    }
`;

export const TESTIMONIAL_QUERY = gql`
  query Testimonials($id: ID!) {
    testimonial(id: $id) {
      id
      name
      description
      image {
        formats
      }
      published_at
    }
  }
`;

export const TESTIMONIALS_QUERY = gql`
    query Testimonials($limit: Int!)  {
        testimonials(limit: $limit) {
            id
            name
            description
            image {
                formats
            }
        }
    }
`;

export const TOPMENU_QUERY = gql`
    query TopMenu {
      topMenu {
        id
        link {
            id
            label
            path
        }
      }
    }
`;
