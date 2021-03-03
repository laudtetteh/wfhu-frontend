// Packages
import React from 'react';
// Containers
import Testimonials from '../Testimonials';
import { GetEvents } from '../GetEvents';
import Posts from '../Posts';
// Components
import { ConnectCTA } from '../../components/Cta/ConnectCTA';
import { IntroCTA } from '../../components/Cta/IntroCTA';
import { RowOfGifs } from '../../components/Elements/RowOfGifs';
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
                                    containerClasses="float-none md:float-right mx-auto"
                                    headingColor="darkblue"
                                    headingClasses="stf-text-shadow-white-top-left text-center md:text-right"
                                    listClasses="flex justify-center"
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

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12">

                                <RowOfGifs pageBag={pageBag} limit={3} />

                            </div>

                        </section>

                        <section className="w-full stf-bg-2 section-connect-cta">

                            <div className="container mx-auto py-12">

                                <GetEvents
                                    limit={5}
                                    event_ended={false}
                                    heading="Upcoming Presentations"
                                    heading_classes="text-white text-left"
                                    more_link={true}
                                />

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12">

                                <GetEvents
                                    limit={5}
                                    event_ended={true}
                                    heading="Most Recent Presentations"
                                    heading_classes="text-red text-left"
                                    more_link={true}
                                />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
