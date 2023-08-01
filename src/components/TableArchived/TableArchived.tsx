import { FC } from "react"
import TableArchivedItem from "../TableArchivedItem/TableArchivedItem"
import TableList from "../TableList/TableList"

const TableArchived: FC = () => {
    return (
        <>
        <TableList>
            <TableArchivedItem />
        </TableList>
        </>
    )
}

export default TableArchived