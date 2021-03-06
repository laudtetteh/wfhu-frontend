// Packages
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Containers
import { EventSidebar } from '../Sidebar';
// Components
import { EventComponent } from "../../components/Event";
// Queries
import Query from "../../components/Query";
import EVENT_QUERY from "../../queries/event/event";
// Utilities
import { STFDate, DocumentHead } from '../../utils/helpers';
import { getPageData } from '../../utils/apiHelper';

export const Event = ({siteOptions}) => {

    let { slug } = useParams();

        return (

            <Query query={EVENT_QUERY} slug={slug}>

                {({ data: { events } }) => {

                    return (

                        <React.Fragment>

                            <DocumentHead title={events[0].name} />

                            <section className="w-full bg-none">

                                <div className="container mx-auto py-12 section-events">

                                    <div className="md:grid md:grid-cols-7 md:grid-flow-col md:gap-8 w-full md:w-auto">

                                        <EventComponent event={events[0]} />

                                        <EventSidebar exclude={events[0].id} />

                                    </div>

                                </div>

                            </section>

                        </React.Fragment>
                    );
            }}
        </Query>
    );
};
