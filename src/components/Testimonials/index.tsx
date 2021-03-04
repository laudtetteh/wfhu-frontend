import React from "react";
import Card from "../Card/testimonial";

const Testimonials = ({ testimonials }) => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {testimonials.map((testimonial, i) => {
                    return <Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} />
                })}
            </div>
        </React.Fragment>
    );
};

export default Testimonials;
