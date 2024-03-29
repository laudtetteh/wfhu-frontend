// Packages
import React from 'react';
// Containers
import { GetPosts } from '../GetPosts';
import { BlogSidebar } from '../Sidebar';
import { DocumentHead } from '../../utils/helpers';
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";

// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageBlog = ({siteOptions}) => {

    return (

        <Query query={PAGE_QUERY} slug="blog">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>

                        <DocumentHead title="Blog"/>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-posts">

                                <div className="md:grid md:grid-cols-7 md:grid-flow-col md:gap-8 w-full md:w-auto">

                                    <GetPosts limit={12} orientation="vertical" heading="Posts" />

                                    <BlogSidebar more_posts={false} />

                                </div>

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
