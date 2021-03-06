import gql from "graphql-tag";

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
