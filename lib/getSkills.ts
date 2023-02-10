import { db } from './db';

export async function getSkills() {
  const skills = await db.skill.findMany({
    select: {
      id: true,
      title: true,
      progress: true,
      color: true,
      image: true,
    }
  });

  return skills;
}
