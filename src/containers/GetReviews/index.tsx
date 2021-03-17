// Packages
import React from "react";
// Components
import { Query } from "../../components/Query";
import { Reviews } from "../../components/Reviews";
import { REVIEWS_QUERY } from "../../queries";

export const GetReviews = props => {

    let _reviews;

    if( props.reviews && props.reviews.length > 0 ) {

        _reviews = props.reviews;

    } else if( !props.reviews || (props.reviews.length === 0) ) {

        _reviews = false;
    }


    if(_reviews) {

        return (

            <React.Fragment>

                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Reviews</h2>

                <Reviews
                    reviews={_reviews}
                    limit={props.limit}
                />

            </React.Fragment>
        );
    }

    return null
};
