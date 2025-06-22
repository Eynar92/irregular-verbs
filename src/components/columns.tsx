'use client'

import { Verb } from "@/types/verb.interface";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { Badge } from "./ui/badge";

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
    if (isSorted === 'asc') {
        return <ChevronUp className="ml-2 size-4" />;
    }
    if (isSorted === 'desc') {
        return <ChevronUp className="ml-2 size-4 transform rotate-180" />;
    }
    return null;
}

export const columns: ColumnDef<Verb>[] = [
    {
        accessorKey: "simple_form",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Verb
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="flex flex-col gap-4">
                <span className="capitalize font-semibold">{row.original.simple_form}</span>
                <span className="text-sm capitalize text-muted-foreground">{row.original.meaning}</span>
                <Badge variant="secondary" className={`w-fit ${row.original.type === 'regular' ? 'bg-green-200 text-green-800 hover:bg-green-200/80' : 'bg-cyan-200 text-cyan-800 hover:bg-cyan-200/80'}`}>
                    {row.original.type === "regular" ? 'Regular' : 'Irregular'}
                </Badge>
            </div>
        ),
    },
    // {
    //     accessorKey: "simple_form",
    //     header: ({ column }) => (
    //         <Button
    //             variant="ghost"
    //             onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //         >
    //             Simple Form
    //             <SortedIcon isSorted={column.getIsSorted()} />
    //         </Button>
    //     ),
    //     cell: ({ row }) => <span className="capitalize">{row.getValue("simple_form")}</span>,
    // },
    {
        accessorKey: "third_person",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Third Person
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("third_person")}</span>,
    },
    {
        accessorKey: "simple_past",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Simple Past
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("simple_past")}</span>,
    },
    {
        accessorKey: "past_participle",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Past Participle
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("past_participle")}</span>,
    },
    {
        accessorKey: "gerund",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Gerund
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("gerund")}</span>,
    },
    // {
    //     accessorKey: "meaning",
    //     enableHiding: true,
        // header: ({ column }) => (
        //     <Button
        //         variant="ghost"
        //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        //     >
        //         Meaning
        //         <SortedIcon isSorted={column.getIsSorted()} />
        //     </Button>
        // ),
        // cell: ({ row }) => <span className="capitalize">{row.getValue("meaning")}</span>,
    // },
];