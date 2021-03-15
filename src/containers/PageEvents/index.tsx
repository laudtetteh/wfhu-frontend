// Packages
import React from 'react';
// Containers
import { GetEvents } from '../GetEvents';
import { DocumentHead } from '../../utils/helpers';
//Components
import { Paragraphs } from "../../components/Elements/Paragraphs";
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";
// Utilities
import { DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const PageEvents = () => {

    const _now = new Date();
    const _nowIso = _now.toISOString();

    return (

        <Query query={PAGE_QUERY} slug="events">

            {({ data: { pages } }) => {

                const pageBag = getPageData(pages[0]);

                return (

                    <React.Fragment>

                        <DocumentHead title="Events"/>

                        <section className="w-full bg-none section-page-content">

                            <div className="container mx-auto py-12 section-reviews">

                                <h1 className="section-heading font-bellota text-5xl text-red text-left mb-8">Events</h1>

                                {pageBag.description &&
                                    <div className="contact-page-content page-content block">
                                        <Paragraphs text={pageBag.description} classes="" />
                                    </div>
                                }

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-reviews">

                                <GetEvents
                                    event_ended={false}
                                    event_start_gt={_nowIso}
                                    sort="event_start:ASC"
                                    heading="Upcoming Presentations"
                                    heading_classes="text-3xl text-red mb-5"
                                    more_link={false}
                                />

                            </div>

                        </section>

                        <section className="w-full bg-none">

                            <div className="container mx-auto py-12 section-reviews">

                                <GetEvents
                                    event_ended={true}
                                    event_start_lt={_nowIso}
                                    sort="event_start:ASC"
                                    heading="Recent Presentations"
                                    heading_classes="text-3xl text-red mb-5"
                                    more_link={false}
                                />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
