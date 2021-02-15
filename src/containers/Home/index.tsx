// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import Posts from '../Posts';
import { DocumentHead } from '../../utils/helpers';
// Components
import { ConnectCTA } from '../../components/Cta/ConnectCTA';
import { IntroCTA } from '../../components/Cta/IntroCTA';

export const Home = ({pageBag, siteOptions}) => {

    return (

        <React.Fragment>

            <DocumentHead title="Home" />

            <section className="w-full stf-bg-1 section-connect-cta">

                <div className="container">

                    <IntroCTA pageBag={pageBag} />

                </div>

            </section>

            <section className="w-full stf-bg-2 section-connect-cta">

                <div className="container mx-auto py-12">

                    <ConnectCTA
                        pageBag={pageBag}
                        siteOptions={siteOptions}
                        iconColor="blue-100"
                        iconBgColor="gray"
                        iconHvColor="red"
                        headingColor="gray"
                        containerClass="float-right"
                        headingClass="stf-text-shadow-white-top-left"
                    />

                </div>

            </section>

            <section className="w-full bg-none">

                <div className="container mx-auto py-12 section-testimonials">

                    <h2 className="section-heading font-bellota text-4xl text-red text-center mb-8">Testimonials</h2>

                    <Testimonials limit={4} />

                </div>

            </section>

            <section className="w-full stf-bg-3 section-posts--loop">

                <div className="container mx-auto py-12">

                    <h2 className="section-heading font-bellota text-4xl text-white mb-3">
                        Blog Posts
                        <a href="/blog" className="link-all font-roboto text-base text-yellow underline pl-3">All Posts</a>
                    </h2>

                    <Posts limit={3} />
                </div>

            </section>

        </React.Fragment>
    )
}
