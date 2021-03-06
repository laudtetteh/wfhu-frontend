import React from "react";
import { Events } from "../../components/Events";
import Query from "../../components/Query";
import EVENTS_QUERY from "../../queries/event/events";

export const GetEvents = props => {

    return (

        <React.Fragment>

            <Query
                query={EVENTS_QUERY}
                sort={props.sort}
                limit={props.limit}
                event_ended={props.event_ended}
                event_start_gt={props.event_start_gt}
                event_start_lt={props.event_start_lt}
                keep_on_homepage={props.keep_on_homepage}>

                {({ data: { events } }) => {

                    return <Events
                                events={events}
                                event_ended={props.event_ended}
                                heading={props.heading}
                                heading_classes={props.heading_classes}
                                more_link={props.more_link}
                            />;
                }}
            </Query>

        </React.Fragment>
    );
};
