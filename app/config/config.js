module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'db_clone_jira_dosc',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'nsfpntjfexdzvv',
    password:
      '527dfb0f200034d8aff663a1dd97d5cf3493c0a812177c6df11932b0212c7e47',
    database: 'd530n8sbik3t3s',
    host: 'ec2-52-201-72-91.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
  },
};
