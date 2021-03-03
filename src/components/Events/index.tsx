// Packages
import React from "react";
import { Link } from "react-router-dom";
// Components
import { Card } from "../Card/event";

export const Events = ({ events, heading, heading_classes, more_link }) => {

    return (

        <React.Fragment>

            <h2 className={`section-heading font-bellota text-4xl mb-3 ${heading_classes}`}>

                {heading}

                { more_link &&
                    <Link to="/events" className="link-all font-roboto text-base text-yellow underline pl-3">
                        All Events
                    </Link>
                }

            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 events-loop">

                {events.map((event, index) => {
                    return <Card key={index} event={event} key={`event-${event.id}`} />
                })}

            </div>

        </React.Fragment>
    );
};
