import { db } from "../db";

export async function getSkill(id: string) {
  try {
    const skill = await db.skill.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        progress: true,
        color: true,
        image: true,
      },
    });
    return { skill };
  } catch (error) {
    return { error };
  }
}

export async function getSkills() {
  const skills = await db.skill.findMany({
    select: {
      id: true,
      title: true,
      progress: true,
      color: true,
      image: true,
    },
    orderBy: [{ progress: "desc" }, { title: "asc" }],
  });

  return skills;
}

export async function updateSkill(id: string) {
  try {
    const skill = await db.skill.update({
      where: { id },
      data: {
        progress: {
          increment: 1,
        },
      },
      select: {
        id: true,
        title: true,
        progress: true,
        color: true,
        image: true,
      },
    });
    return { skill };
  } catch (error) {
    return { error };
  }
}
