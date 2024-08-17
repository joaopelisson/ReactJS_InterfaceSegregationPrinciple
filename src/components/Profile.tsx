interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
}

// We no longer depend on IUser, so if it changes, it doesn't break our component.
// and it doesn't hurt the ISP.
interface IProfile {
  name: string;
  email: string;
}

function Profile({ email = "", name = "" }: Readonly<IProfile>) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}
export { Profile };
