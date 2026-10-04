export default function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold md:text-3xl">{children}</h2>
      {sub && <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">{sub}</p>}
    </div>
  );
}
