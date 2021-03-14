// Packages
import React from 'react';
// Containers
import { Reviews } from '../Reviews';
import { DocumentHead } from '../../utils/helpers';
// Queries
import { Query } from "../../components/Query";
import { PAGE_QUERY } from "../../queries";
// Components
import { ContactForm } from "../../components/Forms/ContactForm";
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

                            <div className="container mx-auto py-12 section-contact-form">

                                <ContactForm />

                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    )
}
