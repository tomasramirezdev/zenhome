export default function Stats() {
  const stats = [
    { value: "12+", label: "Proyectos completados" },
    { value: "2", label: "Arquitectos fundadores" },
    { value: "5", label: "Años de experiencia" },
    { value: "100%", label: "Satisfacción de clientes" },
  ];

  return (
    <section className="bg-[#2d5a3d] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-[#6aab7e] text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
