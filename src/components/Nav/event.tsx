// Packages
import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
// Queries
import EVENTS_QUERY from "../../queries/event/events";

export const EventNav = props => {

    const _now = new Date();
    const _nowIso = _now.toISOString();

    return (

            <Query
                query={EVENTS_QUERY}
                id={null}
                exlude={props.exclude}
                event_ended={false}
                event_start_gt={_nowIso}
                sort="event_start:ASC">

                {({ data: { events } }) => {

                    return (

                        <nav className="nav-sidebar">

                            <h2 className="section-heading font-bellota text-4xl text-red text-left mb-3">More Events</h2>

                            <ul className="loop-categories font-roboto text-base text-black font-medium">

                                {events.map((event) => {

                                    return (

                                        <li key={event.id} className="mb-3">

                                            <Link
                                                to={`/event/${event.slug}`}
                                                className="link-category">

                                                <p className="">{event.name}</p>

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
