import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    [key: string]: string | boolean;
};

const FormBuilderArea: React.FC = () => {
    const [components, setComponents] = useState<string[]>([]);
    const { register, handleSubmit } = useForm<FormValues>();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'component',
        drop: (item: { component: string }) => setComponents((prev) => [...prev, item.component]),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} ref={drop} style={{ /* styles */ }}>
            {components.map((component, index) => (
                <div key={index} style={{ marginBottom: '8px' }}>
                    {component === 'Text Input' && <input {...register(`input${index}`)} placeholder="Text Input" />}
                    {component === 'Checkbox' && <input type="checkbox" {...register(`checkbox${index}`)} />}
                    {component === 'Radio Button' && <input type="radio" {...register(`radio${index}`)} />}
                    {/* Render the component based on the type */}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormBuilderArea;
