import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/tableheader"
import { TableCell } from "./table/tableCell"
import { TableRow } from "./table/tableRow"

export function AteendeeList(){
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="flex items-center gap-3 px-3 py-1.5 w-72 border border-white/10 rounded-lg" >
                    <Search className="size-4 text-emerald-300" />
                    <input className=" bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participantes" />
                </div>  
            </div>

            <Table>
                    <thead>
                        <tr className="border-b border-white/10">
                            <TableHeader style={{ width: 44 }} >
                                <input className="size-4 bg-black/20 rounded border-white/10" type="checkbox"/>
                            </TableHeader>
                            <TableHeader >Codigo</TableHeader>
                            <TableHeader >Participantes</TableHeader>
                            <TableHeader >Data de inscrição</TableHeader>
                            <TableHeader >Data de CheckIn</TableHeader>
                            <TableHeader style={{ width: 64 }} ></TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({length :8}).map((_,i) => {
                            return(
                                <TableRow key={i}>
                                    <TableCell >
                                        <input className="size-4 bg-black/20 rounded border-white/10" type="checkbox"/>
                                    </TableCell>
                                    <TableCell >123456</TableCell>
                                    <TableCell >
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">Bruno Gomes</span>
                                            <span>bgomes.89@gmail.com</span>
                                        </div>
                                    </TableCell>
                                    <TableCell >7 dias atras</TableCell>
                                    <TableCell>3 dias atras</TableCell>
                                    <TableCell >
                                        <IconButton transparent className="bg-black/20 border border-white/20 rounded-md p-1.5">
                                            <MoreHorizontal className="size-4" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
                            <TableCell className="text-right" colSpan={3}>
                                <div className="inline-flex gap-5 items-center">
                                  <span>Pagina 1 de 23</span>
                                    <div className="flex gap-1.5">
                                        <IconButton className="bg-white/20 border border-white/20 rounded-md p-1.5">
                                            <ChevronsLeft className="size-4" />
                                        </IconButton>
                                        <IconButton className="bg-white/20 border border-white/20 rounded-md p-1.5">
                                            <ChevronLeft className="size-4" />
                                        </IconButton>
                                        <IconButton className="bg-white/20 border border-white/20 rounded-md p-1.5">
                                            <ChevronRight className="size-4" />
                                        </IconButton>
                                        <IconButton>
                                            <ChevronsRight className="size-4" />
                                        </IconButton>
                                    
                                    </div>
                                </div>    
                            </TableCell>
                        </tr>
                    </tfoot>
            </Table>
        </div>
    )    
}