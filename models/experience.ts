import {Skill} from './skill'

export interface Experience {
    id: string;
    job_title: string;
    company_logo: string;
    company_image: string;
    company_name: string;
    company_description: string;
    date_started: string;
    date_ended: string;
    job_description: string;
    url: string;
    skills: Skill[];
}
