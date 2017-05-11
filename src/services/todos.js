import createRestApiClient from '../utils/RestApiClient';

const apiEndpoint = 'http://todoapi1105.azurewebsites.net/api';

const generateDelay = function() {
  const min = Math.ceil(0);
  const max = Math.floor(2000);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getPublicTodos: () => {
      return client.request({
        method: 'GET',
        url: '/todo/?delay=' + generateDelay()
      })
    },
    deletePublicTodo: ({ id }) => {
      return client.request({
        method: 'DELETE',
        url: `/todo/${id}/?delay=` + generateDelay()
      })
    },
    updatePublicTodo: ({ id, data }) => {
      return client.request({
        method: 'PUT',
        url: `/todo/${id}/?delay=` + generateDelay(),
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
    createTodo: ({data}) => {
      return client.request({
        method: 'POST',
        url: `/todo/`,
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  };
};
