// Packages
import React from "react";
import Query from "../../components/Query";
import { Link } from "react-router-dom";
// Queries
import CATEGORIES_QUERY from "../../queries/category/categories";
// Utilities
import { DocumentHead } from '../../utils/helpers';

const Categories = () => {

    return (

        <React.Fragment>

            <DocumentHead title="Blog Categories" />

            <Query query={CATEGORIES_QUERY} id={null}>

                {({ data: { categories } }) => {

                    return (

                        <div className="grid-cols-1 md:grid-cols-2">

                            <h2 class="section-heading font-bellota text-4xl text-red text-left mb-8">Series</h2>

                            <nav className="nav-categories">
                                <ul className="loop-categories">
                                    {categories.map((category) => {
                                        return (
                                        <li key={category.id}>
                                            <Link
                                                to={`/category/${category.slug}`}
                                                className="">

                                                {category.name}

                                            </Link>
                                        </li>
                                    );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </React.Fragment>
    );
};

export default Categories;
