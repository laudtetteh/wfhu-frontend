// Packages
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Containers
import { Sidebar } from '../Sidebar';
// Components
import { Post } from "../../components/Post";
import { Footer } from '../../components/Footer';
// Queries
import Query from "../../components/Query";
import POST_QUERY from "../../queries/post/post";
// Utilities
import { STFDate, DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PostSingle = ({siteOptions}) => {


    let { slug } = useParams();

        return (

            <Query query={POST_QUERY} slug={slug}>

                {({ data: { posts } }) => {

                    return (

                        <React.Fragment>

                            <DocumentHead title={posts[0].name} />

                            <section className="w-full bg-none">

                                <div className="container mx-auto py-12 section-posts">

                                    <div className="grid grid-cols-1 md:grid-cols-7 grid-flow-col gap-4">

                                        <Post post={posts[0]} />

                                        <Sidebar />

                                    </div>
                                </div>

                            </section>

                            <Footer
                                siteOptions={siteOptions}
                                headingColor="white"
                                containerClass="mx-auto"
                                headingClass="text-center font-bold"
                            />
                        </React.Fragment>
                    );
            }}
        </Query>
    );
};
