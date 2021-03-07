// Packages
import React from 'react';
// Containers
import { Testimonials } from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageContact = ({siteOptions}) => {

    return (

        <Query query={PAGE_QUERY} slug="contact">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>


                        <DocumentHead title="Contact"/>


                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 md:px-60 section-testimonials">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Contact</h1>

                                <div className="description description font-roboto">

                                     <div className="description description font-roboto">
                                        {pageBag.description}
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-contact-form">


                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
