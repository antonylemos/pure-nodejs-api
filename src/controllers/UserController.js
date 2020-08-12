const users = require('../mocks/users');

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((previous, current) => {
      if (order === 'desc') {
        return previous.id < current.id ? 1 : -1;
      }

      return previous.id > current.id ? 1 : -1;
    });

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(sortedUsers));
  },
}
