import SkillDetail from '../../../../components/skills/SkillDetail'

type SkillProps = {
    params: {
        skillId: string
    }
}

export default function Skill({params}: SkillProps) {
    return (
        <div>
            <h1>Skill + {params.skillId}</h1>
            <SkillDetail />
        </div>
    )
};
