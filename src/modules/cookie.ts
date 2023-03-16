import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * 쿠키 읽기
 * @param {string} name 쿠키 key
 * @returns {string} 쿠키 value
 */
export function handleGetCookie(name: string): string {
  return cookies.get(name);
}
