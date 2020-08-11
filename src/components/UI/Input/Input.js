import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const InputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        InputClasses.push(classes.Invalid);
    }

    switch(props.elementType){
        case('input'):
            inputElement= <input 
                className={InputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case('textArea'):
            inputElement= <textarea 
                className={InputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            break;
        case('select'):
            inputElement= (
                <select 
                    className={InputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed} >
                    {props.elementConfig.options.map(option=>(
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={InputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
