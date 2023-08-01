
import {FC} from 'react';
import { columnsInfo } from "../../helpers/helpers";
import { Note } from "../../redux/note/sliceNote";
import { GrTasks } from 'react-icons/gr';
import { GiTeamIdea } from 'react-icons/gi';
import { BsChatQuoteFill } from 'react-icons/bs';
import { StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from './TableItemInfo.styled';

interface TableItemInfoProps {
    notes: Note[]
}

const TableItemInfo: FC<TableItemInfoProps> = ({ notes}) => {
    const nonArchivedNotes: Note[] = notes.filter(note => !note.archived);

    const countCategoryActiveFalse = (category: string) => {
        return nonArchivedNotes.filter(note => note.category === category).length;
      };
    
      const countCategoryArchivedTrue = (category: string) => {
        return notes.filter(note => note.category === category && note.archived).length;
      };
    
      return (
        <>
          <TableWrapper>
          <StyledTable>
        <thead>
          <TableRow>
            {columnsInfo.map((column) => (
              <TableHeader key={column.key}>{column.title}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell><div style={{ display: 'flex' }}><GrTasks /><p>Task</p></div></TableCell>
            <TableCell>{countCategoryActiveFalse('Task')}</TableCell>
            <TableCell>{countCategoryArchivedTrue('Task')}</TableCell>
          </TableRow>
          <tr>
            <TableCell><div style={{ display: 'flex' }}><GiTeamIdea /><p>Idea</p></div></TableCell>
            <TableCell>{countCategoryActiveFalse('Idea')}</TableCell>
            <TableCell>{countCategoryArchivedTrue('Idea')}</TableCell>
          </tr>
          <tr>
            <TableCell><div style={{ display: 'flex' }}><BsChatQuoteFill /><p>Quote</p></div></TableCell>
            <TableCell>{countCategoryActiveFalse('Quote')}</TableCell>
            <TableCell>{countCategoryArchivedTrue('Quote')}</TableCell>
          </tr>
        </tbody>
      </StyledTable>
          </TableWrapper>
        </>
      );
}


export default TableItemInfo;