import { FC } from "react";
import TableAll from "../../components/TableAll/TableAll";
import TableInfoLength from "../../components/TableInfoLength/TableInfoLength";


const Notebook: FC = () => {
    // const currentNotes = useAppSelector(state => state.notes.notes)
    
    // const nonArchivedNotes: Note[] = currentNotes.filter(note => !note.archived);
    
    
    return (
        <>
        <TableAll />
        <TableInfoLength />
        </>
    )
}

export default Notebook