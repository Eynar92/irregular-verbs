'use client'

import { Verb } from "@/types/verb.interface";
import { ColumnDef, SortDirection } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

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
        accessorKey: "id",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Id
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Type
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize font-bold">{row.getValue("type") === 'regular' ? 'r' : 'i'}</span>,
    },
    {
        accessorKey: "simple_form",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Simple Form
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("simple_form")}</span>,
    },
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
    {
        accessorKey: "meaning",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Meaning
                <SortedIcon isSorted={column.getIsSorted()} />
            </Button>
        ),
        cell: ({ row }) => <span className="capitalize">{row.getValue("meaning")}</span>,
    },
];