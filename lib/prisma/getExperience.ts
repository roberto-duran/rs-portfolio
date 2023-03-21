import { db } from "../db";

export async function getExperience() {
  const experiences = await db.experience.findMany({
    select: {
      id: true,
      job_title: true,
      company_logo: true,
      company_image: true,
      company_name: true,
      company_description: true,
      date_started: true,
      date_ended: true,
      job_description: true,
      url: true,
      skills: {
        select: {
          Skill: {
            select: {
              id: true,
              title: true,
              image: true,
              progress: true,
              color: true,
            },
          },
        },
      },
    },
    orderBy: {
      date_started: "desc",
    },
  });

  return experiences.map((experience) => {
    return {
      ...experience,
      skills: experience.skills.map((skill) => skill.Skill),
    };
  });
}
