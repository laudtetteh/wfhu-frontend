import gql from "graphql-tag";

const SITEOPTIONS_QUERY = gql`
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

export default SITEOPTIONS_QUERY;
