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

                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 section-testimonials">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Blog</h1>

                                <div className="description description font-roboto">

                                     <div className="description description font-roboto">
                                        {pageBag.description}
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-posts">

                                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Posts</h2>

                                <div className="grid grid grid-rows-3 grid-flow-col">

                                    <Posts limit={12} orientation="vertical"/>

                                    <Sidebar />

                                </div>

                            </div>

                        </section>

                        <Footer
                            siteOptions={siteOptions}
                            iconColor="gray"
                            iconBgColor="white"
                            iconHvColor="red"
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
