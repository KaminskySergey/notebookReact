import { FC } from "react"
import { Main } from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout: FC = () => {
    return (
        <>

            <Main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
}

export default Layout;