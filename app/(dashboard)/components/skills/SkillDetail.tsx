'use client';

import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../Input'
import {ISkill} from '../../../../models/ISkill'

type Props = {
    newSkill: boolean,
    skill: ISkill
}

export default function SkillDetail({newSkill, skill}: Props) {
    return (
        <div className="min-w-[500px]">
            <h1 className="text-2xl text-center p-5">
                {newSkill? 'Add new Skill!' : 'Edit Skill'}
            </h1>
            <Formik
                initialValues={{
                    title: '',
                    progress: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        title: Yup.string().required('Title field is required'),
                        progress: Yup.string().required('Progress field is required'),
                    }
                )}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col space-y-4">
                        <Input type={"text"} placeholder={'Add Title'} name={'title'} value={skill.title} />
                        <Input type={"number"} placeholder={'Add Progress'} name={'progress'} value={skill.progress} />
                        <div className="flex flex-row space-x-4">
                            {skill.image && (
                                <img src={skill.image} className="w-12 h-12" />
                            )}
                            <input type="file"
                                   name="image"
                                   accept="image/svg+xml"
                                   className="file-input file-input-bordered file-input-primary w-full" required />
                        </div>
                        <div className="flex justify-between px-2">
                            <label htmlFor="color">Add Color</label>
                            <input type="color" id="color" name="color" value={skill.color} required />
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
};
