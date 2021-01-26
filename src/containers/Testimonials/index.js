import React from "react";
import Testimonials from "../../components/Testimonials";
import Query from "../../components/Query";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials";

const Testimonial = () => {
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>Testimonials</h1>
                    <Query query={TESTIMONIALS_QUERY}>
                        {({ data: { testimonials } }) => {
                            return <Testimonials testimonials={testimonials} />;
                        }}
                    </Query>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
