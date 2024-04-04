import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/tableheader"
import { TableCell } from "./table/tableCell"
import { TableRow } from "./table/tableRow"
import { ChangeEvent, useEffect, useState } from "react"

//format data
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface AttendeesProps {
    id: string
    name: string
    email: string
    createdAt: string
    checkedInAt: string | null
}

export function AteendeeList(){
    const [valorInput, setValorInput] = useState('')
    const [page, setPage] = useState(1)
    const [attendees, setAttendees] = useState<AttendeesProps[]>([])

    const [total, setTotal] = useState(0)

    const totalPage = Math.ceil(total / 10)

    useEffect(() => {
        const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
        url.searchParams.set('pageIndex', String(page - 1))
        if(valorInput.length > 0) {
            url.searchParams.set('query' , valorInput)
        }
        
        fetch(url).then(response => response.json()).then(data => {
              setAttendees(data.attendees)
              setTotal(data.total)
            
        })
    }, [page, valorInput])

    function onSearchImputChange(event: ChangeEvent<HTMLInputElement>){
        setValorInput(event.target.value)
        setPage(1)
    }

    function goTonextPage(){
        setPage(page + 1)
    }

    function goToPage(){
        setPage(1)
    }
    function goToLastPage(){
        setPage(totalPage)
    }
    

    function goToPreviusPage(){
        setPage(page - 1)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="flex items-center gap-3 px-3 py-1.5 w-72 border border-white/10 rounded-lg" >
                    <Search className="size-4 text-emerald-300" />
                    <input onChange={onSearchImputChange} className=" bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" placeholder="Buscar participantes" />
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
                        {attendees.map((attendess) => {
                            return(
                                <TableRow key={attendess.id}>
                                    <TableCell >
                                        <input className="size-4 bg-black/20 rounded border-white/10" type="checkbox"/>
                                    </TableCell>
                                    <TableCell >{attendess.id}</TableCell>
                                    <TableCell >
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">{attendess.name}</span>
                                            <span>{attendess.email}</span>
                                        </div>
                                            </TableCell>
                                            <TableCell>{dayjs().to(attendess.createdAt)}</TableCell>
                                            <TableCell>
                                                {attendess.checkedInAt === null ? (
                                                    <span className="text-zinc-400">Não fez check-in</span>
                                                ) : (
                                                    dayjs().to(attendess.checkedInAt)
                                                )}
                                            </TableCell>
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
                            <TableCell colSpan={3}>Mostrando {attendees.length} de {total} itens</TableCell>
                            <TableCell className="text-right" colSpan={3}>
                                <div className="inline-flex gap-5 items-center">
                                  <span>Pagina {page} de {totalPage} </span>
                                    <div className="flex gap-1.5">
                                        <IconButton onClick={goToPage} disabled={page === 1}>
                                            <ChevronsLeft className="size-4" />
                                        </IconButton>
                                        <IconButton onClick={goToPreviusPage} disabled={page === 1}>
                                            <ChevronLeft className="size-4" />
                                        </IconButton>
                                        <IconButton onClick={goTonextPage} disabled={page === totalPage}>
                                            <ChevronRight className="size-4" />
                                        </IconButton>
                                        <IconButton onClick={goToLastPage} disabled={page === totalPage}>
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


