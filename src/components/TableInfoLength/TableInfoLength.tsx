import {FC} from "react"
import TableList from "../TableList/TableList"
import TableItemInfo from "../TableItemInfo/TableItemInfo"
import { useAppSelector } from "../../hooks/redux"

const TableInfoLength: FC = () => {
        const currentNotes = useAppSelector(state => state.notes.notes)
        


    return (
        <>
        <TableList>
            <TableItemInfo  notes={currentNotes}/>
        </TableList>
        
        </>
    )
}

export default TableInfoLength