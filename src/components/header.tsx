/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Header from '../styles/divs/header';
import Nav from './nav';

const HeaderComponent: NextPage = () => (
    <Header id='header'>
      <h1 data-testid='header-title'>WINE</h1>
      <Nav />
    </Header>
);

export default HeaderComponent;
