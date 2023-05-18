/**
 * 여러개 비동기 동작을 동기처리 하기 위한 함수
 * @returns {Promise<any>}
 */
export function synchronized(): Promise<any> {
  return new Promise((resolve) => {
    resolve(null);
  });
}
