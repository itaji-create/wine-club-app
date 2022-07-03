/* eslint-disable import/extensions */
import { NextPage } from 'next';
import PriceFilter from './filters/filterByPrice';

const Sidebar: NextPage = () => (
  <div>
    <PriceFilter />
  </div>
);

export default Sidebar;
