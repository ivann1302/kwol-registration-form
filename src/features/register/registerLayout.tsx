import Card from "../../components/UI/card.tsx";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-[400px] w-full flex items-center justify-center">
            <Card>
                <h1 className="text-[44px] leading-[44px] font-semibold text-black text-center pb-8">
                    Регистрация
                </h1>
                {children}
            </Card>
        </section>
    );
}
