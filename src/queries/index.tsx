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
                excerpt
                description
                image {
                    ext
                    url
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
                ext
                url
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
                ext
                url
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

                ... on ComponentPageSingleImage {
                    profile_pic {
                        ext
                        url
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
            excerpt
            description
            image {
                ext
                url
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
    query Posts($limit: Int, $exclude: ID, $sort: String, $keep_on_homepage: Boolean) {
        posts(sort: $sort, limit: $limit, where: {_id_nin: [$exclude], keep_on_homepage: $keep_on_homepage}) {
            id
            name
            slug
            excerpt
            description
            image {
                ext
                url
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
                linkedin
                facebook
                instagram
                twitter
            }
        }
    }
`;

export const HOMEPAGE_QUERY = gql`
    query homepage {
        homepage {
            id

            IntroCTA {
                intro_heading
                intro_paragraph
                intro_form_blurb
                intro_image {
                    formats
                }
            }

            row_of_gifs {
                gif {
                    url
                }
            }
        }
    }
`;

export const REVIEW_QUERY = gql`
  query Reviews($id: ID!) {
    review(id: $id) {
      id
      name
      description
      published_at
    }
  }
`;

export const REVIEWS_QUERY = gql`
    query Reviews($limit: Int!, $keep_on_homepage: Boolean)  {
        reviews(limit: $limit, where: {keep_on_homepage: $keep_on_homepage} ) {
            id
            name
            description
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
