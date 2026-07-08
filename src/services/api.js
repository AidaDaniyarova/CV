export const api = {
  async getEducations() {
    const response = await fetch('/api/educations');
    return response.json();
  },
  async getSkills() {
    const response = await fetch('/api/skills');
    return response.json();
  },
  async addSkill(skill) {
    const response = await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(skill)
    });
    return response.json();
  }
};