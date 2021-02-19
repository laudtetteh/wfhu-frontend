// Packages
import React from 'react';
// Containers
import Posts from '../Posts';
import { Sidebar } from '../Sidebar';
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';
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

                                <div className="grid grid-cols-1 md:grid-cols-7 grid-flow-col gap-4">

                                    <Posts limit={12} orientation="vertical" heading="Posts" />

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
                )
            }}
        </Query>
    )
}
