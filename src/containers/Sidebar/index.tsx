import React from "react";
import Query from "../../components/Query";
import { Link } from "react-router-dom";

import { BlogNav } from '../../components/Nav/blog';

export const Sidebar = () => {

    return (

        <div className="row-span-2 col-span-2">

            <BlogNav />

        </div>
    );
};
