import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id, limit, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id, limit: limit, slug: slug }
    });

    if (loading) return '';
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return children({ data });
};

export default Query;