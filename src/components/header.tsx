import { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/nav";


const Header: NextPage = () => {
  return (
    <header style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
      <h1>WINE</h1>
      <Nav />
    </header>
  )
}

export default Header;
