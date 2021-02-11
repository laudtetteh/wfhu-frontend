import React from "react";
import Testimonials from "../../components/Testimonials";
import Query from "../../components/Query";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials";

const Testimonial = () => {

    return (

        <React.Fragment>

            <div className="container mx-auto">

            <h2 className="section-heading font-bellota text-4xl text-red text-center">Testimonials</h2>

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
