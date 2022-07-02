export default function handleClick({
  username, password }: { username: string, password: string | number
}): void {
  const user = { username, password };
  const usersString = localStorage.getItem('users');

  localStorage.setItem('userOnline', JSON.stringify(user));
  if (usersString) {
    const users = JSON.parse(usersString);
    const exist = users.some((e: { username: string; }) => e.username === user.username);
    if (!exist) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  } else {
    localStorage.setItem('users', JSON.stringify([user]));
  }
}
