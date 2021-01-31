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

                        <div>
                            <nav className="">
                                <div className="">
                                    <ul className="">
                                        <li>
                                            <Link to="/">Blog Categories</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="">
                                    <ul className="">
                                        {categories.map((category, i) => {
                                            return (
                                            <li key={category.id}>

                                                <Link
                                                    to={`/category/${category.id}`}
                                                    className="">
                                                    {category.name}

                                                </Link>
                                            </li>
                                        );
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </React.Fragment>
    );
};

export default Categories;
