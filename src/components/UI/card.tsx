export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
        rounded-[48px] bg-white
        w-[320px] xs361:w-[536px]
        shadow-[0_4px_16px_0_#00000014,0_0_16px_0_#00000014]
        pt-8 pb-6 px-4
        xs361:pt-[56px] xs361:pb-[40px] xs361:px-[68px]
      "
            style={{ height: 'auto' }}
        >
            {children}
        </div>
    );
}
