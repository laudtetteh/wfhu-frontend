// Packages
import React from "react";
// Components
import { Query } from "../../components/Query";
import { Reviews } from "../../components/Reviews";
// Queries
import { REVIEWS_QUERY } from "../../queries";

export const GetReviews = props => {

    return (

        <React.Fragment>

            <Query
                query={REVIEWS_QUERY}
                limit={props.limit}
                keep_on_homepage={props.keep_on_homepage}>

                {({ data: { reviews } }) => {

                    return (

                        <Reviews
                            reviews={reviews}
                            limit={props.limit}
                        />
                    )
                }}
            </Query>

        </React.Fragment>
    );
};
