export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto w-[320px] xs361:w-[400px] rounded-xl bg-white shadow-card p-4 xs361:p-6">
            {children}
        </div>
    );
}
