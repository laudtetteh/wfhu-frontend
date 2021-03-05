// Packages
import React from 'react';
// Containers
import Posts from '../Posts';
import { BlogSidebar } from '../Sidebar';
import { DocumentHead } from '../../utils/helpers';
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Blog = ({siteOptions}) => {

    return (

        <Query query={PAGE_QUERY} slug="blog">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>

                        <DocumentHead title="Blog"/>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-posts">

                                <div className="md:grid md:grid-cols-1 md:grid-cols-7 md:grid-flow-col md:gap-4 w-full md:w-auto">

                                    <Posts limit={12} orientation="vertical" heading="Posts" />

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
