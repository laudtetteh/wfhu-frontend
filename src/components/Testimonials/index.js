import React from "react";
import Card from "../Card/testimonial";

const Testimonials = ({ testimonials }) => {
    const leftTestimonialsCount = Math.ceil(testimonials.length / 5);
    const leftTestimonials = testimonials.slice(0, leftTestimonialsCount);
    const rightTestimonials = testimonials.slice(leftTestimonialsCount, testimonials.length);

    return (
        <React.Fragment>
            {leftTestimonials.map((testimonial, i) => {
                return <div><Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} /></div>
            })}

            {rightTestimonials.map((testimonial, i) => {
                return <div><Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} /></div>
            })}
        </React.Fragment>
    );
};

export default Testimonials;
