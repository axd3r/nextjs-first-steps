export default function AboutLayout({
    children
}:{
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Hello. Root Layaout About</h1>
            { children }
        </div>
    )
}