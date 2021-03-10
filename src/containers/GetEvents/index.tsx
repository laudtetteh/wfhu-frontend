// Packages
import React from "react";
// Components
import { Events } from "../../components/Events";
import { Query } from "../../components/Query";
// Utilities
import { EVENTS_QUERY } from "../../queries";

export const GetEvents = props => {

    let _events;

    if( props.events && props.events.length > 0 ) {

        _events = props.events;

    } else if( !props.events || (props.events.length === 0) ) {

        _events = false;
    }

    return (

        <React.Fragment>

        {_events &&

            <Events
                events={_events}
                limit={props.limit}
                event_ended={props.event_ended}
                heading={props.heading}
                heading_classes={props.heading_classes}
                more_link={props.more_link}
            />
        }

        {!_events &&

            <Query
                query={EVENTS_QUERY}
                sort={props.sort}
                limit={props.limit}
                event_ended={props.event_ended}
                event_start_gt={props.event_start_gt}
                event_start_lt={props.event_start_lt}
                keep_on_homepage={props.keep_on_homepage}>

                {({ data: { events } }) => {

                    _events = events;

                    return (

                        <Events
                            events={_events}
                            event_ended={props.event_ended}
                            heading={props.heading}
                            heading_classes={props.heading_classes}
                            more_link={props.more_link}
                        />
                    )
                }}
            </Query>
        }

        </React.Fragment>
    );
};
