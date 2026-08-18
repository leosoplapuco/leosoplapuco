import React from 'react';

import Cursor from '../GeneralComponents/Cursor/Cursor';
import Header from '../GeneralComponents/Header/Header';

const Layout = ({ children, title = 'Mi Sitio Web' }) => {
    return(
        <>
            <Cursor/>

            <Header />

            <main className="main-content">
                {children}
            </main>
        </>
    );
};

export default Layout;
