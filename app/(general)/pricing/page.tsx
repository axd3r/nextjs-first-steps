import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing of my products',
}

export default function PricingPage() {
    return (
        <> 
            <span className="text-5xl">Pricing page</span>
        </>
    )
}