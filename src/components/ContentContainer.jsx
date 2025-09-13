export default function ContentContainer({ children, textAlign = "text-left" }) {
    return (
        <div className={`max-w-4xl mx-auto px-4 py-12 font-body ${textAlign}`}>{children}</div>
    );
}