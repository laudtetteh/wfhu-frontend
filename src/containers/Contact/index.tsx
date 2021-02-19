// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Contact = ({siteOptions}) => {

    return (

        <Query query={PAGE_QUERY} slug="contact">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>


                        <DocumentHead title="Contact"/>


                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 px-60 section-testimonials">

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

                        <Footer
                            siteOptions={siteOptions}
                            iconColor="darkblue"
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
