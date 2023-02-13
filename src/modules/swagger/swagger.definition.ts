import config from '../../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'social feed be API documentation',
    version: '0.0.1',
    description: 'This is a node express mongoose in typescript',
    license: {
      name: 'MIT',
      url: 'https://github.com/yashdave/social-feed-be.git',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server',
    },
  ],
};

export default swaggerDefinition;
