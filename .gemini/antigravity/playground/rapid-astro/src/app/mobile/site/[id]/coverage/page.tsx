import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { createMobileCoverage } from "../../../actions-coverage";

async function getData(postoId: string) {
    const posto = await prisma.posto.findUnique({
        where: { id: postoId },
        select: { id: true, client: { select: { name: true } }, role: { select: { name: true } } }
    });

    const employees = await prisma.employee.findMany({
        where: {
            // Only show active employees or specific contract types? 
            // For now show all, maybe sort by name
        },
        orderBy: { name: 'asc' },
        select: { id: true, name: true, role: { select: { name: true } } }
    });

    return { posto, employees };
}

export default async function MobileCoveragePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { posto, employees } = await getData(id);

    if (!posto) return <div>Posto não encontrado</div>;

    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-20">
            <div className="flex items-center gap-2 mb-2">
                <Link href={`/mobile/site/${id}`}>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-lg font-bold leading-none">Lançar Cobertura</h1>
                    <p className="text-xs text-slate-500">{posto.client.name} - {posto.role.name}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <form action={createMobileCoverage} className="space-y-6">
                    <input type="hidden" name="postoId" value={id} />

                    <div className="space-y-2">
                        <Label>Tipo de Cobertura</Label>
                        <Select name="type" required defaultValue="EXTRA">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="EXTRA">Hora Extra (Efetivo)</SelectItem>
                                <SelectItem value="DIARISTA">Diarista / RPA</SelectItem>
                                <SelectItem value="RESERVA">Reserva Técnica</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Colaborador</Label>
                        <Select name="employeeId" required>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o colaborador" />
                            </SelectTrigger>
                            <SelectContent>
                                {employees.map(emp => (
                                    <SelectItem key={emp.id} value={emp.id}>
                                        {emp.name} ({emp.role.name})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <p className="text-[10px] text-slate-500">
                            Selecione quem irá cobrir o posto hoje.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label>Observações</Label>
                        <Input name="notes" placeholder="Ex: Substituindo Fulano por atestado" />
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-base font-semibold">
                        <Save className="w-4 h-4 mr-2" />
                        Confirmar Cobertura
                    </Button>
                </form>
            </div>
        </div>
    );
}
