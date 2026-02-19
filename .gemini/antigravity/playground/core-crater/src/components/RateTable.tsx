
export default function RateTable() {
    const rates = [
        { hours: "12 HORAS", value: "R$ 150,00" },
        { hours: "08 HORAS", value: "R$ 120,00" },
        { hours: "06 HORAS", value: "R$ 100,00" },
        { hours: "04 HORAS", value: "R$ 60,00" },
    ];

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-gray-50/50 p-6 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center">Tabela de Valores</h3>
            </div>
            <div className="p-2">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {rates.map((rate, index) => (
                            <tr
                                key={index}
                                className="group hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="py-4 px-6 text-gray-600 font-medium text-lg border-b border-gray-50 last:border-0 group-hover:text-gray-900 transition-colors">{rate.hours}</td>
                                <td className="py-4 px-6 text-right text-blue-900 font-bold text-xl border-b border-gray-50 last:border-0">{rate.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
