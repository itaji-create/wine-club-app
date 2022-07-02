import { NextPage } from 'next';
import Link from 'next/link';
// eslint-disable-next-line import/extensions
import Header from '../components/header';

const ProfilePage: NextPage = () => {
  const userString = localStorage.getItem('userOnline');
  const user = JSON.parse(userString);
  return (
    <div>
      <Header />
        <h2>Ola {user.email}</h2>
        <Link href='/'>
          <button type='button'>
            Logout
          </button>
        </Link>
    </div>
  );
};

export default ProfilePage;
