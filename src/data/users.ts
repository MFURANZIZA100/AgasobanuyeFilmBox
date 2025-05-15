import  { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    isAdmin: true
  },
  {
    id: '2',
    username: 'user1',
    email: 'user1@example.com',
    password: 'user123',
    isAdmin: false
  }
];
 