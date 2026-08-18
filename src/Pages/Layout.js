import React from 'react';

import Cursor from '../GeneralComponents/Cursor/Cursor';
import Header from '../GeneralComponents/Header/Header';

const Layout = ({ children, title = 'Mi Sitio Web' }) => {
    return(
        <>
            <Cursor offsetX={20} offsetY={20} size={20} color="#007bff" followSpeed={0.1} circleSize={40} />

            <Header />

            <main className="main-content">
                {children}
            </main>
        </>
    );
};

export default Layout;
