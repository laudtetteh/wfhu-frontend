// Packages
import React from "react";
import { Link } from "react-router-dom";
// Components
import { Card } from "../Card/event";

export const Events = props => {

    return (

        <React.Fragment>

            <h2 className={`section-heading font-bellota ${props.heading_classes}`}>

                {props.heading}

                { props.more_link &&
                    <Link to="/events" className="link-all font-roboto text-base text-darkblue underline pl-3">
                        view all
                    </Link>
                }

            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-5 events-loop">

                {props.events.slice(0, props.limit).map((event) => {
                    return <Card event={event} key={`event-${event.id}`} className=key={`event-${event.id}`} />
                })}

            </div>

        </React.Fragment>
    );
};
