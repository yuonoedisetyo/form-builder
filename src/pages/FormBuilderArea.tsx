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
        <form onSubmit={handleSubmit(onSubmit)} ref={drop} style={{ backgroundColor:'#f7f2f2', flex:1 ,maxWidth:800}}>
            <div style={{minHeight:250}}>
            {components.map((component, index) => (
                <div key={index} style={{ marginBottom: '8px' }}>
                    {component === 'Label' && <input style={{borderWidth:0,backgroundColor:'transparent'}} {...register(`label${index}`)} placeholder="Label" />}
                    {component === 'Text Input' && <input {...register(`input${index}`)} placeholder="Text Input" />}
                    {component === 'Checkbox' && 
                    <>
                    <input type="checkbox" {...register(`checkbox${index}`)} />
                    <input style={{borderWidth:0,backgroundColor:'transparent'}} {...register(`label${index}`)} placeholder="Label" />
                    </>
                    }
                    {component === 'Radio Button' && 
                    <>
                    <input type="radio" {...register(`radio${index}`)} />
                    <input style={{borderWidth:0,backgroundColor:'transparent'}} {...register(`label${index}`)} placeholder="Label" />
                    </>
                    }
                    {component === 'Button' && <button type="button" title='Button' {...register(`button${index}`)} >Button</button>}
                    {/* Render the component based on the type */}
                </div>
            ))}
            </div>
            {/* <button type="submit">Submit</button> */}
        </form>
    );
};

export default FormBuilderArea;
