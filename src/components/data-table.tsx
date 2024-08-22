"use client"
import { useState } from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "./ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [currentStatus, setCurrentStatus] = useState('simple_form');

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
            sorting,
        },
    })

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <Input
                    placeholder={`Search by ${currentStatus === 'simple_form' ? 'Simple Form...' : 'Meaning...'}`}
                    value={(table.getColumn(currentStatus)?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        if (currentStatus === 'simple_form') {
                            table.getColumn('meaning')?.setFilterValue(undefined);
                            table.getColumn('simple_form')?.setFilterValue(event.target.value);
                            return;
                        }
                        if (currentStatus === 'meaning') {
                            table.getColumn('simple_form')?.setFilterValue(undefined);
                            table.getColumn('meaning')?.setFilterValue(event.target.value);
                            return;
                        }
                        // setCurrentStatus('all');
                        // table.getColumn('meaning')?.setFilterValue(undefined);
                        // table.getColumn('simple_form')?.setFilterValue(event.target.value);
                    }}
                    className="max-w-sm sm:max-w-3xl"
                />

                <Select
                    value={currentStatus}
                    onValueChange={(value) => {
                        setCurrentStatus(value);
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Simple Form" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Search By</SelectLabel>
                            {/* <SelectItem value="all">All</SelectItem> */}
                            <SelectItem value="simple_form">Simple Form</SelectItem>
                            <SelectItem value="meaning">Meaning</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
