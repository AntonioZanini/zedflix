import React from 'react';

interface IProps {
    label: string; 
    type: string;
    name:string;
    value:string; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<IProps> = function ({
    label, 
    type, 
    name, 
    value, 
    onChange}) {
    return (
        <div>
            <label>
                {label}
                <input type={type} 
                    value={ value }
                    name={ name }
                    onChange={ onChange }/>
            </label>
        </div>
    );
}

export default FormField;