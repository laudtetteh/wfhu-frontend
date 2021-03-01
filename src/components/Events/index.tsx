// Packages
import React from "react";
// Components
import { Card } from "../Card/event";

export const Events = ({ events, orientation, heading }) => {

    if(orientation == 'vertical') {

        return (
            <React.Fragment>

                <div className="col-span-5 space-y-6">

                    <h2 className="section-heading font-bellota text-4xl text-red text-left mb-3">{heading}</h2>

                    {events.map((event, index) => {
                        return <Card key={index} event={event} key={`event-${event.id}`} orientation="vertical" />
                    })}

                </div>

            </React.Fragment>
        );
    }

    return (
        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 events-loop">
                {events.map((event, index) => {
                    return <Card key={index} event={event} key={`event-${event.id}`} orientation="horizontal" />
                })}

            </div>

        </React.Fragment>
    );
};
