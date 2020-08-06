import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

import './styles.css';
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string; 
    options: Array<{
        value: string;
        label: string;
    }>;
}
const Select: React.FC<SelectProps> = ({name, label, options, ...rest}) => {
    // const keySelect = Math.round(Math.random() * 1000);
    // const keyOptionSelect = Math.round(Math.random() * 1000);
    // console.log(keySelect);
    // console.log(keyOptionSelect);
    
    
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select defaultValue="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;