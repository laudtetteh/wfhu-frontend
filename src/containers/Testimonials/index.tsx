// Packages
import React from "react";
import Testimonials from "../../components/Testimonials";
// Queries
import Query from "../../components/Query";
import TESTIMONIALS_QUERY from "../../queries/testimonial/testimonials";

const Testimonial = ({limit}) => {

    return (

        <React.Fragment>

            <Query query={TESTIMONIALS_QUERY} limit={limit}>
                {({ data: { testimonials } }) => {
                    return <Testimonials testimonials={testimonials} />;
                }}
            </Query>

        </React.Fragment>
    );
};

export default Testimonial;
