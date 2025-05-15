export  interface Movie {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  duration: string;
  poster: string;
  videoUrl: string;
}

export interface User {
  id?: string;
  username: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}
 