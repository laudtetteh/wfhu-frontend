// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import Posts from '../Posts';
// Components
import { ConnectCTA } from '../../components/Cta/ConnectCTA';
import { IntroCTA } from '../../components/Cta/IntroCTA';
// Queries
import Query from "../../components/Query";
import PAGE_QUERY from "../../queries/page/page";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Home = ({siteOptions}) => {

    return (

        <Query query={PAGE_QUERY} slug="home">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>

                        <DocumentHead title="Home" />

                        <section className="w-full bg-darkblue section-connect-cta">

                            <div className="container">

                                <IntroCTA pageBag={pageBag} />

                            </div>

                        </section>

                        <section className="w-full stf-bg-2 section-connect-cta">

                            <div className="container mx-auto py-12">

                                <ConnectCTA
                                    pageBag={pageBag}
                                    siteOptions={siteOptions}
                                    headingColor="darkblue"
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

                                <Posts limit={3} orientation="horizontal"/>
                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
