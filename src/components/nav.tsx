import { NextPage } from 'next';
import Link from 'next/link';

const Nav: NextPage = () => (
    <nav>
      <Link href='/'>
        <a className='nav-item'>Home</a>
      </Link>
      <Link href='/profile'>
        <a className='nav-item'>Profile</a>
      </Link>
      <Link href='/carrinho'>
        <a className='nav-item'>Carrinho</a>
      </Link>
      <Link href='/catalog'>
        <a className='nav-item'>Catalogo</a>
      </Link>
    </nav>
);

export default Nav;
