import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Precio de productos',
 description: 'Precio de productos',
 keywords: 'paginita'
};

export default function PricingPage(){

    return(
        <>
        <span className="text-6xl" >Pricing Page</span>
        </>
    )
}