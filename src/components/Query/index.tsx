import React from "react";
import { useQuery } from "@apollo/react-hooks";
import * as CSS from 'csstype';
// Assets
import spinner from '../../../assets/images/spinner.svg';

const Query = ({ children, query, id, limit, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id, limit: limit, slug: slug }
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
