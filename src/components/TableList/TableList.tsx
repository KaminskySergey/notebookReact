import { FC, PropsWithChildren } from "react";
import { TableWrapper } from "./TableList.styled";

// interface TableColumn {
//     key: string;
//     title: string;
//   }
  
//   interface TableProps {
//     columns: TableColumn[];
//     notes: any[]; // Мы предполагаем, что данные представлены массивом объектов
//   }


  
const TableList: FC<PropsWithChildren<{}>> = ({children}) => {
  
    return (
      <TableWrapper>
        {children}
    </TableWrapper>
      );
}

export default TableList;