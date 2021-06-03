import React, { useRef, useState } from 'react';
import styles from '../styles/components/Input.module.css';
import { IconType } from 'react-icons/lib';

interface ButtonProps {
  id: string;
  icon: IconType;
  labelText: string;
  type: string;
  size?: number;
}

export function Input(props: ButtonProps) {

  const [inputValue, setInputValue] = useState('');
  const input = useRef(null);

  return (
    <>
    <label htmlFor={props.id} className={styles.labelInput}>{props.labelText}</label>
    <div onClick={(e) => input.current.focus()} className={`${styles.inputContainer} ${inputValue.length > 0 ? styles.filled : null }`}>
      <props.icon/>
      <input id={props.id} ref={input}
        value = {inputValue}
        onChange = { e => {setInputValue(e.target.value)} }
        size = {props.size}
        type={props.type}/>
    </div>
    </>
  );
}
