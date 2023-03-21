import { getSkill, updateSkill } from "../../../../../lib/prisma/skill";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  try {
    const { skillId } = params;
    const { skill, error } = await getSkill(skillId);
    if (error) throw new Error(error as string);

    return NextResponse.json({ skill }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATH(request: NextRequest, { params }: any) {
  try {
    const { skillId } = params;
    const { skill, error } = await updateSkill(skillId);
    if (error) throw new Error(error as string);

    return NextResponse.json({ skill }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
