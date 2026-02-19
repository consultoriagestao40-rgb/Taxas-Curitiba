
export default function RateTable() {
    const rates = [
        { hours: "12 HORAS", value: "R$ 150,00" },
        { hours: "08 HORAS", value: "R$ 120,00" },
        { hours: "06 HORAS", value: "R$ 100,00" },
        { hours: "04 HORAS", value: "R$ 60,00" },
    ];

    return (
        <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/20">
            <div className="bg-blue-900/80 p-4 text-center">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Tabela de Valores Taxa</h3>
            </div>
            <div className="p-6">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {rates.map((rate, index) => (
                            <tr
                                key={index}
                                className={`border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-200`}
                            >
                                <td className="py-3 px-4 text-gray-200 font-semibold text-lg">{rate.hours}</td>
                                <td className="py-3 px-4 text-right text-yellow-400 font-bold text-lg">{rate.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
