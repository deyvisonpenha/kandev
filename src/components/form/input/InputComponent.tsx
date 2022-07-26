import React from 'react'
import styled from '@emotion/styled';
import { colors } from '../../../styles';

const Input = styled.input`
  background-color: ${colors.gray500};
  border: 1px solid ${colors.gray700};
  border-radius: 8px;
  width: 638px;
  height: 54px;
  padding: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`;

export const InputComponent: React.FC<React.InputHTMLAttributes<HTMLInputElement>>  = ({...rest}) => {
  return <Input {...rest} />
}
