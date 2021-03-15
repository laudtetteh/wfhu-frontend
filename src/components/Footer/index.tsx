// Packages
import React from 'react'
import { Social } from '../Elements/Social';
// Queries
import { Query } from "../../components/Query";
import { SITEOPTIONS_QUERY } from "../../queries";
// Utilities
import { getSiteOptions } from '../../utils/apiHelper';

export const Footer = props => {

    return (

        <Query query={SITEOPTIONS_QUERY}>

            {({ data: { siteOption } }) => {

                const siteOptions = getSiteOptions(siteOption);

                return (

                    <React.Fragment>

                        <section className="section-footer w-full bg-darkblue text-white py-16 h-60 bottom-0 absolute">

                            <div className="container">

                                <Social
                                    siteOptions={siteOptions}
                                    headingColor="white"
                                    containerClasses="mx-auto"
                                    headingClasses="mb-3 text-center font-bold"
                                    listClasses="flex justify-center"
                                />

                                <p className="font-roboto mx-auto block text-center mt-3">&copy; {new Date().getFullYear()} Work from Home University, LLC</p>
                                <p class="font-roboto mx-auto block text-center mt-3">
                                    <a href="/contact">Contact Elisabeth</a>
                                </p>
                            </div>

                        </section>

                    </React.Fragment>
                )
            }}
        </Query>
    );
}
