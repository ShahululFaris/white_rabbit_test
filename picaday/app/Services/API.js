
  export const GET = async (path) => {
	const headers = {
	  Accept: 'application/json',
	  'Content-Type': 'application/json',
	};
	return fetch(path, { method: 'GET', headers })
	  .then((response) => 
      response.json()
      )
	  .catch((error) => {
		return Promise.reject(error);
	  });
  };


