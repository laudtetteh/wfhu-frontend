import React from "react";
import Testimonials from "../../components/Testimonials";
import Query from "../../components/Query";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials";

const Testimonial = () => {

    return (

        <React.Fragment>

            <Query query={TESTIMONIALS_QUERY}>
                {({ data: { testimonials } }) => {
                    return <Testimonials testimonials={testimonials} />;
                }}
            </Query>

        </React.Fragment>
    );
};

export default Testimonial;
