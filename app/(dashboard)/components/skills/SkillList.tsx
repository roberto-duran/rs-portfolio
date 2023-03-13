'use client';

import {redirect} from 'next/navigation'
import Image from 'next/image'
import { ISkill } from '../../../../models/ISkill';
import Link from 'next/link'

type Props = {
    skills: ISkill[]
}

export default function SkillList({skills}: Props) {
    return (
        <table className="table w-full relative">
            <thead>
            <tr className='sticky top-0'>
                <th>Title</th>
                <th>Progress</th>
                <th>Image</th>
                <th>Color</th>
            </tr>
            </thead>
            <tbody>
            {skills.map((skill) => (
                <tr key={skill.id} className="hover">
                    <td>
                        <Link className="link" href={`/dashboard/forms/skills/${skill.id}`}>
                            {skill.title}
                        </Link>
                    </td>
                    <td>{skill.progress}%</td>
                    <td>
                        <Image src={skill.image}
                               alt={skill.title}
                               width={30}
                               height={30}
                        />
                    </td>
                    <td>
                        <div className='h-3 w-3 rounded-full' style={{backgroundColor: skill.color}}></div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};
