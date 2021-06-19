import React, { useRef, useState } from 'react';
import styles from '../styles/components/Input.module.css';
import { IconType } from 'react-icons/lib';

interface ButtonProps {
  id: string;
  icon: IconType;
  labelText: string;
  type: string;
  size?: number;
  isRequired?: boolean;
}

export function Input(props: ButtonProps) {

  const [inputValue, setInputValue] = useState('');
  const [shouldValidationMessageAppear, setShouldValidationMessageAppear] = useState(false);
  const input = useRef(null);
  const span = useRef(null);

  return (
    <>
    <label htmlFor={props.id} className={styles.labelInput}>{props.labelText}</label>
    <div onClick={ () => input.current.focus()} 
      className={`${styles.inputContainer} ${inputValue.length > 0 ? styles.filled : null } ${shouldValidationMessageAppear ? styles.erro : null}`}>
      <props.icon/>
      <input id={props.id} ref={input}
        value = {inputValue}
        onChange = { e => {setInputValue(e.target.value); setShouldValidationMessageAppear(false)} }
        size = {props.size}
        type={props.type}
        required={props.isRequired}
        onBlur={ () => props.isRequired 
          ? inputValue.length > 0
            ? null
            : setShouldValidationMessageAppear(true) 
          : null}
      />
      <span ref={span}
        className={`${styles.validationMessage} ${shouldValidationMessageAppear ? null : styles.displayNone}`}>Campo obrigatório</span>
      </div>
    </>
  );
}
