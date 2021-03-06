// Packages
import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
// Components
import { Card } from "../Card/event";
// Queries
import EVENTS_QUERY from "../../queries/event/events";

export const EventNav = props => {

    const _now = new Date();
    const _nowIso = _now.toISOString();

    return (

            <Query
                query={EVENTS_QUERY}
                id={null}
                exclude={props.exclude}
                event_ended={false}
                event_start_gt={_nowIso}
                sort="event_start:ASC">

                {({ data: { events } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 className="section-heading font-bellota text-3xl text-red text-left mb-5">Upcoming Events</h2>

                            <ul className="loop-events font-roboto text-base text-black font-medium">

                                {events.map((event) => {

                                    return (

                                        <li key={event.id} className="mb-3">
                                            <Link
                                                to={`/event/${event.slug}`}
                                                className="link-event">

                                                <Card event={event} key={`event-${event.id}`} className=key={`event-${event.id}`} />

                                            </Link>
                                        </li>
                                    );

                                })}
                            </ul>

                        </nav>
                    );
                }}
            </Query>
    );
};
