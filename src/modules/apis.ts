// GET API
function getAPI(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 500) {
          reject(response);
        } else if (response.status === 404) {
        } else if (response.status === 200) {
          return response.json();
        } else {
        }
      })
      .then((result) => {
        if (result) {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        // reject('Error Getting Data');
        reject(error);
      });
  });
}

// POST API
function postAPI(url: string, { payload }: { payload: Object }): Promise<any> {
  console.debug('parameters: ', payload);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.status === 500) {
          reject(response);
        } else if (response.status === 404) {
        } else if (response.status === 200) {
          return response.json();
        } else {
        }
      })
      .then((result) => {
        if (result) {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        // reject('Error Postting Data');
        reject(error);
      });
  });
}

// PUT API
function putAPI(url: string, { payload }: { payload: Object }): Promise<any> {
  console.debug('parameters: ', payload);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.status === 500) {
          reject(response);
        } else if (response.status === 404) {
        } else if (response.status === 200) {
          return response.json();
        } else {
        }
      })
      .then((result) => {
        if (result) {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        // reject('Error Putting Data');
        reject(error);
      });
  });
}

// DELETE API
function deleteAPI(
  url: string,
  { payload }: { payload: Object }
): Promise<any> {
  console.debug('parameters: ', payload);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.status === 500) {
          reject(response);
        } else if (response.status === 404) {
        } else if (response.status === 200) {
          return response.json();
        } else {
        }
      })
      .then((result) => {
        if (result) {
          console.debug('result: ', result);
          resolve(result);
        }
      })
      .catch((error) => {
        console.debug(error);
        // reject('Error Deleting Data');
        reject(error);
      });
  });
}

export { getAPI, postAPI, putAPI, deleteAPI };
