import React from "react";
import Query from "../../components/Query";
import { Link } from "react-router-dom";

import { BlogNav } from '../../components/Nav/blog';
import { EventNav } from '../../components/Nav/event';

export const BlogSidebar = () => {

    return (

        <div className="col-span-2 mt-10 md:mt-0 wrapper-sidebar">
            <BlogNav />
        </div>
    );
}

export const EventSidebar = props => {

    return (

        <div className="col-span-2 wrapper-sidebar">
            <EventNav exclude={props.exclude} />
        </div>
    );
}
