import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import { BasicLayoutContainer } from './basic-layout.styles';

const BasicLayout: FC = (): ReactElement => {
  return (
    <BasicLayoutContainer>
      <Navbar />
      <Outlet />
    </BasicLayoutContainer>
  );
};

export default BasicLayout;
