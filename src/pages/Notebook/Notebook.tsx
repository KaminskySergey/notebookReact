import { FC, useState } from "react";
import TableAll from "../../components/TableAll/TableAll";
import TableInfoLength from "../../components/TableInfoLength/TableInfoLength";
import TableArchived from "../../components/TableArchived/TableArchived";


const Notebook: FC = () => {
    const [isOpenTable, setIsOpenTable] = useState(false)
const handleToggleTableArchived = () => {
    setIsOpenTable(pS => !pS)
}
    return (
        <>
        <TableAll isOpenTable={isOpenTable} handleToggleTableArchived={handleToggleTableArchived}/>
        {isOpenTable && <TableArchived />}
        <TableInfoLength />
        </>
    )
}

export default Notebook