import React from "react";
import { Card } from "../Card/gif";

export const RowOfGifs = (props) => {
    const gifs = props.pageBag.row_of_gifs;

    const leftGifsCount = Math.ceil(gifs.length / 5);
    const leftGifs = gifs.slice(0, leftGifsCount);
    const rightGifs = gifs.slice(leftGifsCount, gifs.length);

    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {leftGifs.map((gif, i) => {
                    return <Card gif={gif.gif} key={`gif__${gif.gif.id}`} />
                })}

                {rightGifs.map((gif, i) => {
                    return <Card gif={gif.gif} key={`gif__${gif.gif.id}`} />
                })}
            </div>
        </React.Fragment>
    );
};
