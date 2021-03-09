// Packages
import React from "react";
// Components
import { Query } from "../../components/Query";
import { Reviews } from "../../components/Reviews";
import { REVIEWS_QUERY } from "../../queries";

export const GetReviews = props => {

    return (

        <React.Fragment>

            <Query query={REVIEWS_QUERY} limit={props.limit}>
                {({ data: { reviews } }) => {
                    return <Reviews reviews={reviews} />;
                }}
            </Query>

        </React.Fragment>
    );
};
