const BASE_URL = 'http://localhost:5000/users';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 3, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  users: {
    list() {
      return callApi('/users');
    },
  },
  create(user) {
    return callApi('/user', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  read(userId) {
    return callApi(`/user/${userId}`);
  },

  update(userId, updates) {
    return callApi(`/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  },

  remove(userId) {
    return callApi(`/user/${userId}`, {
      method: 'DELETE',
    });
  },
};

export default api;
