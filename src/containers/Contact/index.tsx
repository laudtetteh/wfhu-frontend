// Packages
import React from 'react';
// Containers
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';

export const Contact = ({pageBag, siteOptions}) => {

    return (

        <React.Fragment>

            <DocumentHead title="Contact"/>

            <section className="w-full bg-none section-page-content">

                <div className="container mx-auto py-12 section-testimonials">

                    <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Contact</h1>

                    <div className="description description font-roboto">
                        {pageBag.description}
                    </div>
                </div>

            </section>

            <section className="w-full bg-none">

                <div className="container mx-auto py-12 section-testimonials">


                </div>

            </section>

            <Footer
                siteOptions={siteOptions}
                iconColor="gray-600"
                iconBgColor="white"
                iconHvColor="red"
                headingColor="white"
                containerClass="mx-auto"
                headingClass="text-center"
            />

        </React.Fragment>
    )
}
