import gql from "graphql-tag";

const EVENTS_QUERY = gql`
    query Events($limit: Int!)  {
        events(limit: $limit) {
            id
            name
            slug
            description
            event_details
            event_start
            event_end
            image {
                formats
            }
            published_at
        }
    }
`;

export default EVENTS_QUERY;
