import React, { useState } from 'react';
import styles from '../styles/components/Input.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  id: string;
  placeholder: string;
  icon: IconDefinition;
  size?: number;
}

export function Input(props: ButtonProps) {

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={`${styles.inputContainer} ${inputValue.length > 0 ? styles.filled : null }`}>
      <FontAwesomeIcon icon={ props.icon }/>
      <input id={props.id} placeholder={props.placeholder}
        value = {inputValue}
        onChange = { e => {setInputValue(e.target.value)} }
        size = {props.size}
        type="text"/>
    </div>
  );
}
