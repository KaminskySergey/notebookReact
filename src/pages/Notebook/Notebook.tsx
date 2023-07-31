import { FC } from "react";
import TableList from "../../components/TableList/TableList"
import TableItemAll from "../../components/TableItemAll/TableItemAll";
import { useAppSelector } from "../../hooks/redux";
const columns = [
    { key: 'name', title: 'Name' },
    { key: 'time', title: 'Time' },
    { key: 'content', title: 'Content' },
    { key: 'category', title: 'Category' },
    { key: 'dates', title: 'Dates' },
    { key: 'archived', title: 'Archived' },
  ];

  
const Notebook: FC = () => {
    const currentNotes = useAppSelector(state => state.notes.notes)
    
    
    
    return (
        <>
        <TableList>
            <TableItemAll columns={columns} notes={currentNotes}/>
        </TableList>
        
        </>
    )
}

export default Notebook