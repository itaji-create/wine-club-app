/* eslint-disable import/extensions */
import { NextPage } from 'next';
import Nav from './nav';

const Header: NextPage = () => (
    <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
      <h1>WINE</h1>
      <Nav />
    </div>
);

export default Header;
