import { NextPage } from 'next';
import Link from 'next/link';
// eslint-disable-next-line import/extensions
import Header from '../components/header';

const ProfilePage: NextPage = () => {
  const userString = localStorage.getItem('userOnline');
  const u = '{"username":"Usuário","password":"123546"}';

  const user = JSON.parse(userString || u);

  return (
    <div>
      <Header />
        <h2>Acabouu {user.username}</h2>
        <Link href='/'>
          <button type='button'>
            Logout
          </button>
        </Link>
    </div>
  );
};

export default ProfilePage;
