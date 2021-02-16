import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { STFDate } from '../../utils/helpers';

import POST_QUERY from "../../queries/post/post";

// Utilities
import { DocumentHead } from '../../utils/helpers';

const Post = ({siteOptions}) => {
    console.log(siteOptions);
    let { id } = useParams();
        return (
            <Query query={POST_QUERY} id={id}>
                {({ data: { post } }) => {

                // const imageUrl =
                //   process.env.NODE_ENV !== "development"
                //     ? post.image.url
                //     : process.env.REACT_APP_BACKEND_URL + post.image.url;

                // const imageUrl = post.image.url;
                const imageUrl = post.image.formats.post_loop.url;

                return (
                    <React.Fragment>

                        <DocumentHead title={post.name} />

                        <div className="">
                            <img src={imageUrl} alt={imageUrl} height="100" className="w-full"/>
                        </div>

                        <div className="">
                            <p id="name" className="">
                                Title: {post.name}
                            </p>
                        </div>

                        <Link to={`/category/${post.category.id}`}>
                            <p id="" className="">
                                Category: {post.category.name}
                            </p>
                        </Link>

                        <p>
                            Content: <ReactMarkdown source={post.description} />
                        </p>

                        <p id="" className="">
                            <STFDate _timestamp={post.published_at} _format="MMMM D, YYYY" />
                        </p>

                    </React.Fragment>
                );
            }}
        </Query>
    );
};

export default Post;
