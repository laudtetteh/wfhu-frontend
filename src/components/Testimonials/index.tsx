// Packages
import React from "react";
// Components
import { Card } from "../Card/testimonial";

export const Testimonials = props => {

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {props.testimonials.map((testimonial) => {
                    return <Card testimonial={testimonial} key={`testimonial-${testimonial.id}`} />
                })}
            </div>
        </React.Fragment>
    );
};
