export default function ErrorText({ children }: { children?: React.ReactNode }) {
    if (!children) return null;
    return <p className="mt-1 text-sm text-red-500">{children}</p>;
}
