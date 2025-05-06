import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Me',
}

export default function ContactPage() {
    return (
        <> 
            <span className="text-5xl">Contact page</span>
        </>
    )
}