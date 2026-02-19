
export default function RateTable() {
    const rates = [
        { hours: "12 HORAS", value: "R$ 150,00" },
        { hours: "08 HORAS", value: "R$ 120,00" },
        { hours: "06 HORAS", value: "R$ 100,00" },
        { hours: "04 HORAS", value: "R$ 60,00" },
    ];

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-2xl border-2 border-blue-900 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-blue-900 p-4 text-center">
                <h3 className="text-xl font-black text-yellow-400 uppercase tracking-widest">TABELA DE VALORES</h3>
            </div>
            <div className="p-2">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {rates.map((rate, index) => (
                            <tr
                                key={index}
                                className="group hover:bg-yellow-50 transition-colors duration-200"
                            >
                                <td className="py-4 px-6 text-gray-800 font-bold text-lg border-b border-gray-200 last:border-0">{rate.hours}</td>
                                <td className="py-4 px-6 text-right text-blue-900 font-black text-2xl border-b border-gray-200 last:border-0">{rate.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
