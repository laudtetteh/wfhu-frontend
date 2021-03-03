// Packages
import React from "react";
// Components
import { Card } from "../Card/event";

export const Events = ({ events, heading }) => {

    return (

        <React.Fragment>

            <h2 className="section-heading font-bellota text-4xl text-red text-left mb-3">{heading}</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 events-loop">

                {events.map((event, index) => {
                    return <Card key={index} event={event} key={`event-${event.id}`} />
                })}

            </div>

        </React.Fragment>
    );
};
