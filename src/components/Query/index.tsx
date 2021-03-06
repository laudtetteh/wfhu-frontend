import React from "react";
import { useQuery } from "@apollo/react-hooks";
import * as CSS from 'csstype';
// Assets
import spinner from '../../../assets/images/spinner.svg';

const Query = ({ children, query, id, limit, exclude, sort, keep_on_homepage, event_ended, event_start_gt, event_start_lt, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: {
            id: id,
            slug: slug,
            sort: sort,
            limit: limit,
            exclude: exclude,
            event_ended: event_ended,
            event_start_gt:event_start_gt,
            event_start_gt:event_start_gt,
            keep_on_homepage: keep_on_homepage,
        }
    });

    const spinnerStyles: CSS.Properties = {
        width: "30px",
        marginLeft: "auto",
        marginRight: "auto",
    }

    if (loading) return (
        <img src={spinner} style={spinnerStyles} />
    );

    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return children({ data });
};

export default Query;
