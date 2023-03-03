import {getSkills} from '../../../../../lib/getSkills'
export default async function Skills() {
    const skills = await getSkills();

    return (
        <div className="flex flex-col space-y-6 w-[75vw]">
            <div className="flex justify-between items-center px-2">
                <span className="text-xl">Skills</span>
                <Link href="/dashboard/forms/skills/new" className="btn btn-primary">
                    Add Skill
                </Link>
            </div>
            <div className="overflow-x-hidden">
                <SkillList skills={skills}/>
            </div>
        </div>
)
};

import SkillList from '../../../components/skills/SkillList'
import Link from 'next/link'
