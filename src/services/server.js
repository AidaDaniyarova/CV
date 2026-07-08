import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      education: Model,
      skill: Model,
    },

    seeds(server) {
      server.create('education', { date: '1990', title: 'Title 1', description: 'Lorem ipsum dolor sit amet.' });
      server.create('education', { date: '1991', title: 'Title 2', description: 'Consectetuer adipiscing elit.' });
      server.create('education', { date: '1992', title: 'Title 3', description: 'Aenean commodo ligula eget dolor.' });

      server.create('skill', { name: 'HTML', range: 95 });
      server.create('skill', { name: 'CSS', range: 80 });
      server.create('skill', { name: 'jQuery', range: 70 });
      server.create('skill', { name: 'PHP', range: 40 });
      server.create('skill', { name: 'Laravel 2 (framework)', range: 20 });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 3000; // 3-second delay

      this.get('/educations', (schema) => {
        return schema.educations.all();
      });

      this.get('/skills', (schema) => {
        return schema.skills.all();
      });

      this.post('/skills', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.skills.create(attrs);
      });
    },
  });
  return server;
}