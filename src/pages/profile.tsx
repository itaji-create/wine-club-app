import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Header />
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
