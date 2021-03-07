// Packages
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Containers
import { BlogSidebar } from '../Sidebar';
// Components
import { PostComponent } from "../../components/Post";
// Queries
import { Query } from "../../components/Query";
import { POST_QUERY } from "../../queries";
// Utilities
import { STFDate, DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Post = ({siteOptions}) => {


    let { slug } = useParams();

        return (

            <Query query={POST_QUERY} slug={slug}>

                {({ data: { posts } }) => {

                    return (

                        <React.Fragment>

                            <DocumentHead title={posts[0].name} />

                            <section className="w-full bg-none">

                                <div className="container mx-auto py-12 section-posts">

                                    <div className="md:grid md:grid-cols-7 md:grid-flow-col md:gap-8 w-full md:w-auto">

                                        <PostComponent post={posts[0]} />

                                        <BlogSidebar
                                            exclude={posts[0].id}
                                            more_posts={true}
                                            nameClasses="text-base text-black"
                                            dateClasses="text-xs text-darkblue italic"
                                        />

                                    </div>
                                </div>

                            </section>

                        </React.Fragment>
                    );
            }}
        </Query>
    );
};
