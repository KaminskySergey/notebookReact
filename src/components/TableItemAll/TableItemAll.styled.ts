import { styled } from "styled-components";

interface ButtonProps {
  background: "edit" | "delete" | "archive"; // Возможные значения для типа кнопки
  // onClick: (event: MouseEvent<HTMLButtonElement>) => void; // Обработчик клика по кнопке
}

export const TableWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  /* border-collapse: collapse; */
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: gray;
  padding: 8px;
  font-weight: bold;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const TableListBtn = styled.ul`
  
  & li + li {
    margin-left: 8px;
  }
  
`;

export const ButtonIcon = styled.button<ButtonProps>`
border: none;
background-color: transparent;
padding: 5px;
border-radius: 50%;
transition: 250ms all;
cursor: pointer;
width: 30px;
height: 30px;
& svg {
  width: 15px;
  height: 15px;
}
&:hover, &:focus svg {
  background-color: ${p => {
    if (p.background === "edit") return "yellow"; 
    if (p.background === "delete") return "red"; 
    if (p.background === "archive") return "blue"; 
    return "transparent"; 
  }};
}
`