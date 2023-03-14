import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function handleGetCookie(name: string): string {
  return cookies.get(name);
}
