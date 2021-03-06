// Packages
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import * as CSS from 'csstype';
// Assets
import spinner from '../../../assets/images/spinner.svg';

export const Query = props => {
    const { data, loading, error } = useQuery(props.query, {
        variables: {
            id: props.id,
            slug: props.slug,
            sort: props.sort,
            limit: props.limit,
            exclude: props.exclude,
            event_ended: props.event_ended,
            event_start_gt: props.event_start_gt,
            event_start_lt: props.event_start_lt,
            keep_on_homepage: props.keep_on_homepage,
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

    return props.children({ data });
};
