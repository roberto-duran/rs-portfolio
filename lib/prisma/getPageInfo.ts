import { db } from '../db';

export async function getPageInfo() {
  const pageInfo = await db.user.findFirst({
    select: {
      id: true,
      name: true,
      email: true,
      phone_number: true,
      address: true,
      role: true,
      image: true,
      back_ground_information: true,
    },
    orderBy: {
      createdAt: 'asc',
    }
  });

  return pageInfo;
}
