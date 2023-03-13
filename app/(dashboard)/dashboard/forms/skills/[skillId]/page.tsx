import SkillDetail from '../../../../components/skills/SkillDetail'
import {ISkill} from '../../../../../../models/ISkill'

type SkillProps = {
    params: {
        skillId: string
    }
}

export default async function Skill({params}: SkillProps) {
    const newSkill = params.skillId === 'new';
    let skill: ISkill = {
        title: '',
        progress: 0,
        color: '',
        image: '',
        id: ''
    };
    if (!newSkill) {
        const res = await fetch(`http://localhost:3000/api/dashboard/skills/${params.skillId}`);
        const parseResult = await res.json();
        skill = parseResult.skill;
    }
    return (
        <div>
            <SkillDetail newSkill={newSkill} skill={skill} />
        </div>
    )
};
