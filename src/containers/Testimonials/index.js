import React from "react";
import Testimonials from "../../components/Testimonials";
import Query from "../../components/Query";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials";

const Testimonial = () => {

    return (

        <React.Fragment>

            <h1>Testimonials</h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Query query={TESTIMONIALS_QUERY}>
                    {({ data: { testimonials } }) => {
                        return <Testimonials testimonials={testimonials} />;
                    }}
                </Query>
            </div>

        </React.Fragment>
    );
};

export default Testimonial;
