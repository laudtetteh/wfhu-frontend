import React, {useEffect, useState} from "react";

export function About({pageBag}) {

// console.log(pageBag);

    return(

        <div>
            <h1 className="font-sans text-red text-4xl text-center pt-12">{pageBag.description}. Styled with Tailwind</h1>
        </div>
    );
}
