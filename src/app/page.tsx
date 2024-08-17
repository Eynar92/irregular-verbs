import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { verbs } from "@/data/verbs";

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold text-foreground text-center">Verbos Regulares e Irregulares</h1>
      <p className="text-xs"><span className="font-bold">TYPE</span> = <span className="font-bold">R</span>(Regular) <span className="font-bold">I</span>(Irregular)</p>
      <DataTable columns={columns} data={verbs} />
    </main>
  );
}
