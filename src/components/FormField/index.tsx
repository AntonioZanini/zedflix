import React from 'react';

interface IProps {
    label: string;
    type: string;
    name:string;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<IProps> = ({
  label,
  type,
  name,
  value,
  onChange,
} : IProps) => {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        <input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FormField;
