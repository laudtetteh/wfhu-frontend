import gql from "graphql-tag";

const EVENT_QUERY = gql`
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
            image {
                formats
            }
            published_at
        }
    }
`;

export default EVENT_QUERY;
