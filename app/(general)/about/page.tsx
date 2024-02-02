import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About', 'Fernando', 'informacion' ]
};

export default function AboutPage(){

    return(
        <>
        <span className="text-6xl">About Page</span>
        </>
    )
}