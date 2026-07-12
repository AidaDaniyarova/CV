import { createServer, Model } from 'miragejs';
import { educationData, skillsData } from '../data/resumeData';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      education: Model,
      skill: Model,
    },

    seeds(server) {
      educationData.forEach(item => {
        server.create('education', {
          date: item.date,
          title: item.title,
          description: item.text,
        });
      });

      skillsData.forEach(skill => {
        server.create('skill', {
          name: skill.name,
          range: skill.range,
        });
      });
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