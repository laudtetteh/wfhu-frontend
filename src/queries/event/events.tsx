import gql from "graphql-tag";

const EVENTS_QUERY = gql`
    query Events($event_ended: Boolean!, $exclude: ID, $sort: String, $limit: Int, $event_start_gt: DateTime, $event_start_lt: DateTime)  {
        events(sort: $sort, limit: $limit, where: {_id_nin: [$exclude], event_ended: $event_ended, event_start_gt: $event_start_gt, event_start_lt: $event_start_lt}) {
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
