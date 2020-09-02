const axios = require('axios');
const comid = require('node-machine-id');

const clientToken = comid.machineIdSync(true);

/**
 * @return {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function True(status) {
  return true;
}

function login(id, password) {
  return axios.post('https://authserver.mojang.com/authenticate', {
    agent: {
      name: 'Minecraft',
      version: 1,
    },
    username: id,
    password,
    clientToken,
    requestUser: false,
  });
}

function refresh(token) {
  return axios.post(
    'https://authserver.mojang.com/refresh',
    {
      accessToken: token,
      clientToken,
    },
    {
      validateStatus: True,
    }
  );
}

function validate(token) {
  return axios.post('https://authserver.mojang.com/validate', {
    accessToken: token,
    clientToken,
  });
}

function signout(id, password) {
  return axios.post(
    'https://authserver.mojang.com/signout',
    {
      username: id,
      password,
    },
    {
      validateStatus: True,
    }
  );
}

function invalidate(token) {
  return axios.post('https://authserver.mojang.com/invalidate', {
    accessToken: token,
    clientToken,
  });
}

module.exports = {
  login,
  refresh,
  validate,
  signout,
  invalidate,
};
