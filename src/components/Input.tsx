import * as React from 'react';
import styled from 'styled-components';

import { SingleParamAny } from '../utils/types';

interface IInputProps {
  value: string | number;
  onChange: SingleParamAny;
  name: string;
  label: string;
  type?: string;
  id?: string;
  required?: boolean;
  isTextArea?: boolean;
  pattern?: string;
  title?: string;
  placeholder?: string;
}

export interface IInputState {
  focused: boolean;
}

const InputWrapper = styled.div`
  margin: 1.5rem 0 0;
  max-width: 430px;
`;

const inputBaseStyle = `
  background: white;
  border: none;
  padding: .35rem .75rem;
  display: block;
  width: 100%;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  ${inputBaseStyle}
  resize: vertical;
`;

const StyledInput = styled.input`
  ${inputBaseStyle}
`;

const StyledLabel = styled.label``;

export class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      focused: false,
    }
  }

  public handleFocus = (e: any) => {
    const newState = {
      ...this.state,
      focused: !this.state.focused,
    };
    this.setState(newState);
  }

  public render() {
    const self = this;
    const { name, type, label, required, onChange, isTextArea, value, pattern, title, placeholder } = self.props;
    const id = self.props.id ? self.props.id : name;

    const inputProps = {
      type: type || 'text',
      value,
      name,
      id,
      required: required ? true : false,
      onChange,
      onFocus: self.handleFocus,
      onBlur: self.handleFocus,
      focused: self.state.focused,
      pattern,
      title,
      placeholder,
    }

    return(
      <InputWrapper>
        <StyledLabel
          htmlFor={id}
        >
          {label}
        </StyledLabel>
        {isTextArea ?
          <TextArea {...inputProps} rows={5} />
          : <StyledInput {...inputProps} />}
      </InputWrapper>
    )
  }
}

export default Input;