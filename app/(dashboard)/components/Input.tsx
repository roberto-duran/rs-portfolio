import {ErrorMessage, Field} from 'formik'

type Props = {
    type: string;
    placeholder: string;
    name: string;
    value: string | number;
}

export default function Input({type, placeholder, name, value}: Props) {
    return (
        <div className="space-y-2">
            <Field className="input input-bordered input-accent w-full"
                   type={type}
                   placeholder={placeholder}
                   value={value}
                   name={name} />
            <ErrorMessage className="px-2" name={name} component="div" />
        </div>
    )
};
