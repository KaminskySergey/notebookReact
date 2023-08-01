import { AiFillFileZip } from "react-icons/ai"
import { ButtonIcon, StyledTable, TableCell, TableHeader, TableListBtn, TableRow, TableWrapper } from "./TableArchivedItem.styled"
import { columns } from "../../helpers/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { GiTeamIdea } from "react-icons/gi";
import { GrTasks } from "react-icons/gr";
import { BsChatQuoteFill, BsFillCloudArrowUpFill } from "react-icons/bs";
import { CategoryIcons } from "../TableItemAll/TableItemAll";
import { unarchiveNote } from "../../redux/note/sliceNote";


const categoryIcons: CategoryIcons = {
    Idea: <GiTeamIdea />,
    Task: <GrTasks />,
    Quote: <BsChatQuoteFill />,
  };


const TableArchivedItem = () => {
    const currentNotes = useAppSelector(state => state.notes.notes)
    const dispatch = useAppDispatch()

    
const archivedNotes = currentNotes.filter((el: { archived: boolean; }) => el.archived === true)
    
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
      
    return (
        <>
        <TableWrapper>
        <StyledTable>
          <thead>
            <TableRow>
              {columns.map((column) => (
                <TableHeader key={column.key}>
                  {column.title === 'Archived' ? (
                    <div><AiFillFileZip /></div>
                  ) : (
                    column.title
                  )}
                </TableHeader>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {archivedNotes.map((row: any) => (
              <TableRow key={row.id}>
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
                          <ButtonIcon  type="button" onClick={() => dispatch(unarchiveNote(row.id))}>
                            <BsFillCloudArrowUpFill />
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
        </>
    )
}

export default TableArchivedItem