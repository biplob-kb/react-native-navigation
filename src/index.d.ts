interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  city: string;
  country: string;
  phone: string;
  image: string;
}

interface ILoginInput {
  email: string;
  password: string;
}

interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  city: string;
  country: string;
  phone: string;
  image: string;
}

interface IService {
  id: number;
  name: string;
  description: string;
  image: string;
}
