import React from "react";
import { Events } from "../../components/Events";
import Query from "../../components/Query";
import EVENTS_QUERY from "../../queries/event/events";

export const GetEvents = ({limit, event_ended, heading}) => {

    return (

        <React.Fragment>

            <Query query={EVENTS_QUERY} limit={limit} event_ended={event_ended}>
                {({ data: { events } }) => {
                    return <Events events={events} heading={heading} />;
                }}
            </Query>

        </React.Fragment>
    );
};
