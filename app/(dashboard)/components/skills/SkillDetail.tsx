'use client';

import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../Input'

export default function SkillDetail() {
    return (
        <div>
            <h1>Any place in your app!</h1>
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
                        <Input type={"text"} placeholder={'Add Title'} name={'title'} />
                        <Input type={"number"} placeholder={'Add Progress'} name={'progress'} />
                        <input type="file"
                               name="image"
                               accept="image/svg+xml"
                               className="file-input file-input-bordered file-input-primary w-full" required />
                        <div className="flex justify-between px-2">
                            <label htmlFor="color">Body</label>
                            <input type="color" id="color" name="color" required />
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
