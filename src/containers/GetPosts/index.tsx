// Packages
import React from "react";
// Components
import { Posts } from "../../components/Posts";
import { Query } from "../../components/Query";
// Queries
import { POSTS_QUERY } from "../../queries";

export const GetPosts = props => {

    let _posts;

    if( props.posts && props.posts.length > 0 ) {

        _posts = props.posts;

    } else if( !props.posts || (props.posts.length === 0) ) {

        _posts = false;
    }

    return (

        <React.Fragment>

            {_posts &&

                <Posts
                    posts={_posts}
                    limit={props.limit}
                    orientation={props.orientation}
                    heading={props.heading}
                    nameClasses={props.nameClasses}
                    dateClasses={props.dateClasses}
                />

            }

            {!_posts &&

                <Query query={POSTS_QUERY} limit={props.limit}>

                    {({ data: { posts } }) => {

                        _posts = posts;

                        return (

                            <Posts
                                posts={_posts}
                                limit={props.limit}
                                orientation={props.orientation}
                                heading={props.heading}
                                nameClasses={props.nameClasses}
                                dateClasses={props.dateClasses}
                            />
                        )
                    }}

                </Query>
            }

        </React.Fragment>
    )

}
