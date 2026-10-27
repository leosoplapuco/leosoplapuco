import Cursor from '../GeneralComponents/Cursor/Cursor';
import Header from '../GeneralComponents/Header/Header';

const Layout = ({ children }) => {
    return(
        <>
            <Cursor />

            <Header />

            {children}
        </>
    );
};

export default Layout;
