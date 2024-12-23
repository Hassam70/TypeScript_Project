interface IUser {
  email: string;
  password: string;
}

interface IAuth {
  firstName: string;
  lastName: string;
}

interface IAuth {
  firstName: string;
  Surname: string;
}

type TAuth = {
  firstName: string;
  lastName: string;
};

export function authenticateUser(user: IUser): TAuth {
  console.log(user);
  return {
    firstName: "Faizan",
    lastName: "Faizan",
  };
}
