import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';

const BasicLayout: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default BasicLayout;
