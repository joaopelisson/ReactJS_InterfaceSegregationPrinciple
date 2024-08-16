interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
}

interface IProfile {
  user: IUser;
}

function Profile({ user }: Readonly<IProfile>) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
export { Profile };
