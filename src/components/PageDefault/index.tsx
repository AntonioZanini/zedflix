import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './style';

interface Props {
    noPadding?: boolean;
}

const PageDefault : React.FC<Props> = ({children, noPadding}) => {
    return (
        <>
            <Menu/>
                <Main>
                { children }
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;