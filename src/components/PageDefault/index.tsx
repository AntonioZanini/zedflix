import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './style';

interface IProps {
    children: React.ReactNode;
}

const PageDefault : React.FC<IProps> = ({ children } : IProps) => (
  <>
    <Menu />
    <Main>
      { children }
    </Main>
    <Footer />
  </>
);

export default PageDefault;
