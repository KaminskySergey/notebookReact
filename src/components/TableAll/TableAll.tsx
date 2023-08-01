
import { useAppSelector } from "../../hooks/redux";
import { Note } from "../../redux/note/sliceNote";

import TableItemAll from "../TableItemAll/TableItemAll";
import TableList from "../TableList/TableList";
// import { addNote } from "../../redux/note/sliceNote"

import {FC} from "react"

interface Archived {
    handleToggleTableArchived: () => void
    isOpenTable: boolean,
}

const TableAll: FC<Archived> = ({isOpenTable, handleToggleTableArchived}) => {
    const currentNotes = useAppSelector(state => state.notes.notes)

    const nonArchivedNotes: Note[] = currentNotes.filter((note: { archived: any; }) => !note.archived);

    

    return (
        <>
        <TableList>
            <TableItemAll isOpenTable={isOpenTable} handleToggleTableArchived={handleToggleTableArchived} notes={nonArchivedNotes}/>
        </TableList>
        
        </>
    )
}

export default TableAll