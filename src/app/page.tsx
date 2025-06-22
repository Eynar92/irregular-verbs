import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { verbs } from "@/data/verbs";

export default function Home() {
  return (
    <main className="p-4 space-y-16">
      <h1 className="text-3xl font-bold text-foreground text-center">Regular and Irregular Verbs</h1>
      <DataTable columns={columns} data={verbs} />
    </main>
  );
}
