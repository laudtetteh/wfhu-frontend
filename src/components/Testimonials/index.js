import React from "react";
import Card from "../Card/testimonial";

const Testimonials = ({ testimonials }) => {
    const leftTestimonialsCount = Math.ceil(testimonials.length / 5);
    const leftTestimonials = testimonials.slice(0, leftTestimonialsCount);
    const rightTestimonials = testimonials.slice(leftTestimonialsCount, testimonials.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftTestimonials.map((testimonial, i) => {
                        return <Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightTestimonials.map((testimonial, i) => {
                            return <Card testimonial={testimonial} key={`testimonial__${testimonial.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
