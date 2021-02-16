import React from "react";
import Query from "../../components/Query";
import { Link } from "react-router-dom";

import { BlogNav } from '../../components/Nav/blog';

export const Sidebar = () => {

    return (

        <div className="col-span-2">

            <BlogNav />

        </div>
    );
};
