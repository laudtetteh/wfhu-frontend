// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import { DocumentHead } from '../../utils/helpers';
import { Footer } from '../../components/Footer';

export const About = ({pageBag, siteOptions}) => {

    return (

        <React.Fragment>

            <DocumentHead title="About"/>

            <section className="w-full bg-none section-page-content">

                <div className="container mx-auto py-12 section-testimonials">

                    <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">About</h1>

                    <div className="description description font-roboto">
                        {pageBag.description}
                    </div>
                </div>

            </section>

            <section className="w-full bg-none">

                <div className="container mx-auto py-12 section-testimonials">

                    <h2 className="section-heading font-bellota text-4xl text-red text-left mb-8">Testimonials</h2>

                    <Testimonials limit={4} />

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
