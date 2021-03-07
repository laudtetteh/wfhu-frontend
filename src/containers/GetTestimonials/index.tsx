// Packages
import React from "react";
// Components
import { Query } from "../../components/Query";
import { Testimonials } from "../../components/Testimonials";
import { TESTIMONIALS_QUERY } from "../../queries";

export const GetTestimonials = props => {

    return (

        <React.Fragment>

            <Query query={TESTIMONIALS_QUERY} limit={props.limit}>
                {({ data: { testimonials } }) => {
                    return <Testimonials testimonials={testimonials} />;
                }}
            </Query>

        </React.Fragment>
    );
};
