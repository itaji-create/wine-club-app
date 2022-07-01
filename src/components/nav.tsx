import { NextPage } from "next";
import Link from "next/link";

const Nav: NextPage = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/catalog">
            <a>Catalogo</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
