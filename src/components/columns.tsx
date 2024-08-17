'use client'

import { Verb } from "@/types/verb.interface";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Verb>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => <span className="capitalize font-bold">{row.getValue("type") === 'regular' ? 'R' : 'i'}</span>,
    },
    {
        accessorKey: "simple_form",
        header: "Simple Form",
        cell: ({ row }) => <span className="capitalize">{row.getValue("simple_form")}</span>,
    },
    {
        accessorKey: "third_person",
        header: "Third Person",
        cell: ({ row }) => <span className="capitalize">{row.getValue("third_person")}</span>,
    },
    {
        accessorKey: "simple_past",
        header: "Simple Past",
        cell: ({ row }) => <span className="capitalize">{row.getValue("simple_past")}</span>,
    },
    {
        accessorKey: "past_participle",
        header: "Past Participle",
        cell: ({ row }) => <span className="capitalize">{row.getValue("past_participle")}</span>,
    },
    {
        accessorKey: "gerund",
        header: "Gerund",
        cell: ({ row }) => <span className="capitalize">{row.getValue("gerund")}</span>,
    },
    {
        accessorKey: "meaning",
        header: "Meaning",
        cell: ({ row }) => <span className="capitalize">{row.getValue("meaning")}</span>,
    },
];