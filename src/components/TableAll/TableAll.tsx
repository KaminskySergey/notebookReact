
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Note } from "../../redux/note/sliceNote";
import FormCreate from "../FormCreate/FormCreate";
import Modal from "../Modal/Modal";
import TableItemAll from "../TableItemAll/TableItemAll";
import TableList from "../TableList/TableList";
// import { addNote } from "../../redux/note/sliceNote"

import {FC, useState} from "react"


const TableAll: FC = () => {
    const currentNotes = useAppSelector(state => state.notes.notes)
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useAppDispatch()
    const nonArchivedNotes: Note[] = currentNotes.filter(note => !note.archived);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
      };

    return (
        <>
        <TableList>
            <TableItemAll notes={nonArchivedNotes}/>
        </TableList>
        <button type="button" onClick={handleToggle}>Create Note</button>
        {isOpen && <Modal onClose={handleToggle}>
            <FormCreate handleToggle={handleToggle}/>
        </Modal>}
        </>
    )
}

export default TableAll