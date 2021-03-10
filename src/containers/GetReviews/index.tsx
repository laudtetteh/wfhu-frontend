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

    return (

        <React.Fragment>

        {_reviews &&

            <Reviews
                reviews={_reviews}
                limit={props.limit}
            />
        }

        {!_reviews &&

            <Query query={REVIEWS_QUERY} limit={props.limit}>

                {({ data: { reviews } }) => {

                    _reviews = reviews;

                    return (

                        <Reviews
                            reviews={reviews}
                            limit={props.limit}
                        />
                    )
                }}
            </Query>

        }

        </React.Fragment>
    );
};
