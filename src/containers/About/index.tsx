// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const About = () => {

    return (

        <Query query={PAGE_QUERY} slug="about">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>


                        <DocumentHead title="About"/>


                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto md:px-60 py-12 section-testimonials">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">About</h1>

                                <div className="description description font-roboto">

                                     <div className="description description font-roboto">
                                        {pageBag.description}
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-testimonials">

                                <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Testimonials</h2>

                                <Testimonials limit={4} />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
