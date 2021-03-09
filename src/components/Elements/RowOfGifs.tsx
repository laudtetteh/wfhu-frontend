import React from "react";
import { Card } from "../Card/gif";

export const RowOfGifs = (props) => {
    const gifs = props.pageBag.row_of_gifs;

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {gifs.map((gif, i) => {
                    return <Card gif={gif.gif} key={`gif__${i}`} />
                })}
            </div>
        </React.Fragment>
    );
};
