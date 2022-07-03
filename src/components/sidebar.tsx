/* eslint-disable import/extensions */
import { NextPage } from 'next';
import PriceFilter from './filters/filterByPrice';
import Div from '../styles/divs/div';

const Sidebar: NextPage = () => (
  <Div>
    <PriceFilter />
  </Div>
);

export default Sidebar;
