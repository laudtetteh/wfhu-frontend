import React from "react";
import Card from "../Card/testimonial";

const Testimonials = ({ testimonials }) => {
    const leftTestimonialsCount = Math.ceil(testimonials.length / 5);
    const leftTestimonials = testimonials.slice(0, leftTestimonialsCount);
    const rightTestimonials = testimonials.slice(leftTestimonialsCount, testimonials.length);

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {leftTestimonials.map((testimonial, i) => {
                    return <Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} />
                })}

                {rightTestimonials.map((testimonial, i) => {
                    return <Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} />
                })}
            </div>
        </React.Fragment>
    );
};

export default Testimonials;