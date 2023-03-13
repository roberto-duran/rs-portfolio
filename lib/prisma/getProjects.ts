import { db } from '../db';
export async function getProjects() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      url: true,
      skills: {
        select: {
          Skill: {
            select: {
              id: true,
              title: true,
              image: true,
              progress: true,
              color: true
            }
          }
        }
      }
    }
  });
  return projects.map((project) => {
    return { ...project, skills: project.skills.map(skill => skill.Skill) }
  });
}
