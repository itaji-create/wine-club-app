import { NextPage } from 'next';
import Link from 'next/link';

const Nav: NextPage = () => (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/profile'>
        <a>Profile</a>
      </Link>
      <Link href='/carrinho'>
        <a>Carrinho</a>
      </Link>
      <Link href='/catalog'>
        <a>Catalogo</a>
      </Link>
    </nav>
);

export default Nav;
