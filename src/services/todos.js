import createRestApiClient from '../utils/RestApiClient';

const apiEndpoint = 'http://todoapi1105.azurewebsites.net/api';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    getPublicTodos: () => client.request({
      method: 'GET',
      url: '/todo'
    }),
    deletePublicTodo: ({ id }) => client.request({
      method: 'DELETE',
      url: `/todo/${id}`
    }),
    updatePublicTodo: ({ id, data }) => client.request({
      method: 'PUT',
      url: `/todo/${id}`,
      data
    }),
    createTodo: ({data}) => {
      console.log('Checking variables here', data);
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
