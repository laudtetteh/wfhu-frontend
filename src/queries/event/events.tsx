import gql from "graphql-tag";

const EVENTS_QUERY = gql`
    query Events($limit: Int!, $event_ended: Boolean!)  {
        events(limit: $limit, where: {event_ended: $event_ended}) {
            id
            name
            slug
            description
            event_details
            event_start
            event_end
            event_ended
            image {
                formats
            }
            published_at
        }
    }
`;

export default EVENTS_QUERY;
