// Packages
import React from "react";
import { Link } from "react-router-dom";
// Components
import { Query } from "../../components/Query";
import { BlogNav } from '../../components/Nav/blog';
import { EventNav } from '../../components/Nav/event';

export const BlogSidebar = props => {

    return (

        <div className="col-span-2 wrapper-sidebar">
            <BlogNav
                exclude={props.exclude}
                more_posts={props.more_posts}
                nameClasses={props.nameClasses}
                dateClasses={props.dateClasses}
            />
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
