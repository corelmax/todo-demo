import createRestApiClient from '../utils/RestApiClient';

const apiEndpoint = 'http://todoapi1105.azurewebsites.net/api';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getPublicTodos: () => client.request({
      method: 'GET',
      url: '/todo'
    }),
    deleteTodo: ({ id }) => client.request({
      method: 'DELETE',
      url: `/todo/${id}`
    }),
    updateTodo: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/todo/${id}`,
      data
    }),
    createTodo: ({ id, data }) => client.request({
      method: 'POST',
      url: `/todo/${id}`,
      data
    })
  };
};
