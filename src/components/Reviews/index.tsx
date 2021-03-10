// Packages
import React from "react";
// Components
import { Card } from "../Card/review";

export const Reviews = props => {

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {props.reviews.slice(0, props.limit).map((review) => {
                    return <Card review={review} key={`review-${review.id}`} />
                })}
            </div>
        </React.Fragment>
    );
};
