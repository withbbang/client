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
        if (response.status === 400) {
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

function postAPI(url: string, data: Object): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 400) {
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

function putAPI(url: string, data: Object): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 400) {
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

function deleteAPI(url: string, data: Object): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      // mode: "no-cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 400) {
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

export { getAPI, postAPI, putAPI, deleteAPI };
