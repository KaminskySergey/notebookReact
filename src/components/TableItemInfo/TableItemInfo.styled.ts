import { styled } from "styled-components";

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
  & div {
    display: flex;
    align-items: center;
  }
  & p {
    margin-left: 16px;
  }
  & svg {
    width: 30px;
    height: 30px;
  }
`;