import React from "react";
import Query from "../../components/Query";
import { Link } from "react-router-dom";

import { BlogNav } from '../../components/Nav/blog';
import { EventNav } from '../../components/Nav/event';

export const BlogSidebar = () => {

    return (

        <div className="col-span-2 mt-10 md:mt-0">
            <BlogNav />
        </div>
    );
}

export const EventSidebar = () => {

    return (

        <div className="col-span-2 mt-10 md:mt-0">
            <EventNav />
        </div>
    );
}
