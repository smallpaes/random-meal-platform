import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import {
  BasicLayoutContainer,
  BasicLayoutContent,
} from './basic-layout.styles';

const BasicLayout: FC = (): ReactElement => {
  return (
    <BasicLayoutContainer>
      <Navbar />
      <BasicLayoutContent>
        <Outlet />
      </BasicLayoutContent>
    </BasicLayoutContainer>
  );
};

export default BasicLayout;
