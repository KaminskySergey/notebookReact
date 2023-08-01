
import { useAppSelector } from "../../hooks/redux";
import { Note } from "../../redux/note/sliceNote";

import TableItemAll from "../TableItemAll/TableItemAll";
import TableList from "../TableList/TableList";
// import { addNote } from "../../redux/note/sliceNote"

import {FC} from "react"


const TableAll: FC = () => {
    const currentNotes = useAppSelector(state => state.notes.notes)

    const nonArchivedNotes: Note[] = currentNotes.filter(note => !note.archived);

    

    return (
        <>
        <TableList>
            <TableItemAll notes={nonArchivedNotes}/>
        </TableList>
        
        </>
    )
}

export default TableAll