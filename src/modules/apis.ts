import { handleGetCookie } from './cookie';

/**
 * GET API
 * @param {string} url 요청 URL
 * @returns {Promise<any>}
 */
function getAPI(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + handleGetCookie('atk'),
        Refresh: 'Bearer ' + handleGetCookie('rtk')
      }
    })
      .then((response) => {
        if (response.status < 300) {
          return response.json();
        } else {
          reject(new Error('오류발생'));
        }
      })
      .then((result) => {
        if (result.code !== '000000') {
          reject(new Error(result.message));
        } else {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        reject(error);
      });
  });
}

/**
 * POST API
 * @param {string} url 요청 URL
 * @param {any} payload 요청 DATA
 * @returns {Promise<any>}
 */
function postAPI(
  url: string,
  payload: any | undefined = undefined
): Promise<any> {
  console.debug('parameters: ', { payload });
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + handleGetCookie('atk'),
        Refresh: 'Bearer ' + handleGetCookie('rtk')
      },
      body: JSON.stringify({ payload })
    })
      .then((response) => {
        if (response.status < 300) {
          return response.json();
        } else {
          reject(new Error('오류발생'));
        }
      })
      .then((result) => {
        if (result.code !== '000000') {
          reject(new Error(result.message));
        } else {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        reject(error);
      });
  });
}

/**
 * PUT API
 * @param {string} url 요청 URL
 * @param {any} payload 요청 DATA
 * @returns {Promise<any>}
 */
function putAPI(
  url: string,
  payload: any | undefined = undefined
): Promise<any> {
  console.debug('parameters: ', { payload });
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + handleGetCookie('atk'),
        Refresh: 'Bearer ' + handleGetCookie('rtk')
      },
      body: JSON.stringify({ payload })
    })
      .then((response) => {
        if (response.status < 300) {
          return response.json();
        } else {
          reject(new Error('오류발생'));
        }
      })
      .then((result) => {
        if (result.code !== '000000') {
          reject(new Error(result.message));
        } else {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        reject(error);
      });
  });
}

/**
 * DELETE API
 * @param {string} url 요청 URL
 * @param {any} payload 요청 DATA
 * @returns {Promise<any>}
 */
function deleteAPI(
  url: string,
  payload: any | undefined = undefined
): Promise<any> {
  console.debug('parameters: ', { payload });
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + handleGetCookie('atk'),
        Refresh: 'Bearer ' + handleGetCookie('rtk')
      },
      body: JSON.stringify({ payload })
    })
      .then((response) => {
        if (response.status < 300) {
          return response.json();
        } else {
          reject(new Error('오류발생'));
        }
      })
      .then((result) => {
        if (result.code !== '000000') {
          reject(new Error(result.message));
        } else {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        reject(error);
      });
  });
}

export { getAPI, postAPI, putAPI, deleteAPI };
