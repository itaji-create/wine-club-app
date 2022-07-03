import { NextPage } from 'next';
import Link from 'next/link';
import FilterByName from './filters/filterByName';

const Nav: NextPage = () => (
    <nav>
      <FilterByName />
      <Link href='/profile'>
        <a className='nav-item'>Perfil</a>
      </Link>
      <Link href='/carrinho'>
        <a className='nav-item'>Carrinho</a>
      </Link>
      <Link href='/catalog'>
        <a className='nav-item'>Catálogo</a>
      </Link>
      <Link href='/'>
        <a className='nav-item'>Sair</a>
      </Link>
    </nav>
);

export default Nav;
