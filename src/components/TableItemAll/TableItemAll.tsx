import { FC, useState } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { PiArchiveDuotone } from 'react-icons/pi';
import { GrTasks } from 'react-icons/gr';
import { GiTeamIdea } from 'react-icons/gi';
import { BsChatQuoteFill } from 'react-icons/bs';
import { ButtonIcon, StyledTable, TableCell, TableHeader, TableListBtn, TableRow, TableWrapper, BtnCreate } from './TableItemAll.styled';
import Modal from '../Modal/Modal';
import FormEdit from '../FormEdit/FormEdit';
import { useAppDispatch } from '../../hooks/redux';
import { Note, archiveNote, removeNote } from '../../redux/note/sliceNote';
import { columns } from '../../helpers/helpers';
import FormCreate from '../FormCreate/FormCreate';

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

function getLastTwoDates(dates: string | string[]): JSX.Element {
  
  const twoDates = typeof dates === 'string' ? [dates] : dates.filter((date) => date !== '').slice(-2);

  if (twoDates.length === 1) {
    return <span>{twoDates[0]}</span>;
  }

  if (twoDates.length === 2) {
    return (
      <>
        <span>{twoDates[0]},</span>
        <span style={{marginLeft: '8px'}}>{twoDates[1]}</span>
      </>
    );
  }

  return <></>; // Вернуть пустой фрагмент, если нет дат или меньше двух дат
}


const TableItemAll: FC<TableProps> = ({ notes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoteEdit, setCurrentNoteEdit] = useState<Note | null>(null)
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useAppDispatch()
  
  const handleCurrentNoteEdit = (note: Note | null) => {
    setIsCreating(false);
    setCurrentNoteEdit(note)
    handleToggle()
  }

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCreateNote = () => {
    setIsCreating(true);
    setCurrentNoteEdit(null);
    handleToggle();
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
                    ) : (column.key === 'dates' ? getLastTwoDates(row[column.key]) : row[column.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
      <BtnCreate type="button" onClick={handleCreateNote}>Create Note</BtnCreate>

      
        {isOpen && (<Modal onClose={handleToggle}>
          {isCreating ? (
            <FormCreate handleToggle={handleToggle} />
          ) : (
            <FormEdit currentNoteEdit={currentNoteEdit} handleToggle={handleToggle} />
          )}
        </Modal>)}
       
    </>
  );
};

export default TableItemAll;
