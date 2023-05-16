import { JSEncrypt } from 'jsencrypt';

/**
 * RSA 암호화 함수
 * @param {string} publicKey 공개키
 * @param {string} data 암호화할 데이터
 * @returns {string | boolean} string: 정상값, boolean: 비정상값
 */
export function handleRSAEncrypt(
  publicKey: string,
  data: string
): string | boolean {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);

  return encrypt.encrypt(data);
}
