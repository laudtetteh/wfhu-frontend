import React from "react";
import { Card } from "../Card/post";

export const Posts = props => {

    if(props.orientation == 'vertical') {

        return (

            <React.Fragment>

                <div className="col-span-5 space-y-6">

                    <h2 className={`section-heading font-bellota text-darkblue text-3xl mb-5 ${props.heading_classes}`}>

                        {props.heading}

                        { props.more_link &&
                            <Link to="/blog" className="link-all font-roboto text-base text-yellow underline pl-3">
                                All Posts
                            </Link>
                        }

                    </h2>

                    {props.posts.map((post) => {
                        return <Card post={post} key={`post-${post.id}`} orientation="vertical" />
                    })}

                </div>

            </React.Fragment>
        );
    }

    return (

        <React.Fragment>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 posts-loop">
                {props.posts.slice(0, props.limit).map((post) => {
                    return <Card
                                post={post} key={`post-${post.id}`}
                                orientation="horizontal"
                                nameClasses={props.nameClasses}
                                dateClasses={props.dateClasses}
                            />
                })}

            </div>

        </React.Fragment>
    );
};
