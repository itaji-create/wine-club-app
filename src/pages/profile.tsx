import { NextPage } from "next";
import Link from "next/link";
import Nav from "../components/nav";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Nav />
        <h2>Ola usuario</h2>
        <Link href="/">
          <button type="button">
            Logout
          </button>
        </Link>
    </div>
  )
}

export default ProfilePage;
