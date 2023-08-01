import { FC, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { PiArchiveDuotone } from 'react-icons/pi';
import { GrTasks } from 'react-icons/gr';
import { GiTeamIdea } from 'react-icons/gi';
import { BsChatQuoteFill } from 'react-icons/bs';
import { ButtonIcon, StyledTable, TableCell, TableHeader, TableListBtn, TableRow, TableWrapper } from './TableItemAll.styled';
import Modal from '../Modal/Modal';
import FormEdit from '../FormEdit/FormEdit';
import { useAppDispatch } from '../../hooks/redux';
import { Note, archiveNote, removeNote } from '../../redux/note/sliceNote';
import { columns } from '../../helpers/helpers';

interface CategoryIcons {
  [category: string]: JSX.Element;
}

interface TableProps {
  // columns: TableColumn[];
  notes: any[]; 
}


const categoryIcons: CategoryIcons = {
  Idea: <GiTeamIdea />,
  Task: <GrTasks />,
  Quote: <BsChatQuoteFill />,
};

function getLastTwoDates(dates: string | string[]): string[] {
  console.log(dates, '1')
  if (typeof dates === 'string') {
    return [dates];
  }
  const nonEmptyDates = dates.filter((date) => date !== '');
  const lastTwoDates = nonEmptyDates.slice(-2);
  return lastTwoDates;
}


const TableItemAll: FC<TableProps> = ({ notes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoteEdit, setCurrentNoteEdit] = useState<Note | null>(null)
  const dispatch = useAppDispatch()
  
  const handleCurrentNoteEdit = (note: Note | null) => {
    setCurrentNoteEdit(note)
    handleToggle()
  }

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <TableWrapper>
        <StyledTable>
          <thead>
            <TableRow>
              {columns.map((column) => (
                <TableHeader key={column.key}>
                  {column.title === 'Archived' ? (
                    <TableListBtn style={{ display: 'flex', marginLeft: 'auto', justifyContent: 'end' }}>
                      <li>
                        <AiFillDelete />
                      </li>
                      <li>
                        <PiArchiveDuotone />
                      </li>
                    </TableListBtn>
                  ) : (
                    column.title
                  )}
                </TableHeader>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {notes.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.key === 'name' ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {categoryIcons[row.category]}
                        <span style={{ marginLeft: '8px' }}>{row[column.key]}</span>
                      </div>
                    ) : column.key === 'archived' ? (
                      <TableListBtn style={{ display: 'flex' }}>
                        <li>
                          <ButtonIcon background={'edit'} type="button" onClick={() => handleCurrentNoteEdit(row)}>
                            <AiFillEdit />
                          </ButtonIcon>
                        </li>
                        <li>
                          <ButtonIcon background={'delete'} type="button" onClick={() => dispatch(removeNote(row.id))}>
                            <AiOutlineDelete />
                          </ButtonIcon>
                        </li>
                        <li>
                          <ButtonIcon background={'archive'} type="button" onClick={() => dispatch(archiveNote(row.id))}>
                            <PiArchiveDuotone />
                          </ButtonIcon>
                        </li>
                      </TableListBtn>
                    ) : column.key === 'dates' ? (
                      <span>
                        {getLastTwoDates(row[column.key]).map((date, idx) => (
                          <span key={idx}>{date}</span>
                        ))}
                      </span>
                    ) : (
                      row[column.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>

      {isOpen && (
        <Modal onClose={handleToggle}>
          <FormEdit currentNoteEdit={currentNoteEdit} handleToggle={handleToggle}/>
        </Modal>
      )}
    </>
  );
};

export default TableItemAll;
