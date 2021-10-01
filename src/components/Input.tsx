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
  showValidationMessage?: boolean;
  disabled?: boolean;
  onKeyPress?: (e) => void;
}

export function Input(props: ButtonProps) {

  const [inputValue, setInputValue] = useState('');
  const [shouldValidationMessageAppear, setShouldValidationMessageAppear] = useState(false);
  const input = useRef(null);
  const span = useRef(null);

  return (
    <div className={styles.container}>
      <label htmlFor={props.id} className={styles.labelInput}>{props.labelText}</label>
      <div onClick={ () => input.current.focus()} 
        className={`${styles.inputContainer} ${inputValue.length > 0 ? styles.filled : null } ${(shouldValidationMessageAppear || props.showValidationMessage) ? styles.erro : null} ${props.disabled ? styles.disabled : null}`}>
        <props.icon/>
        <input id={props.id} ref={input}
          value = {inputValue}
          onChange = { e => {
            setInputValue(e.target.value); 
            setShouldValidationMessageAppear(false);
          } }
          size = {props.size}
          type={props.type}
          required={props.isRequired}
          onBlur={ () => props.isRequired 
            ? inputValue.length > 0
              ? null
              : setShouldValidationMessageAppear(true) 
            : null}
          onKeyPress={ props.onKeyPress ? (e) => props.onKeyPress(e) : null }
          disabled={props.disabled}
        />
        <span ref={span}
          className={`${styles.validationMessage} ${(shouldValidationMessageAppear || props.showValidationMessage) ? null : styles.displayNone}`}>Campo obrigatório</span>
        </div>
    </div>
  );
}
