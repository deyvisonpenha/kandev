import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../styles';

interface IProps {
  isTextBold?: boolean;
}

const Paragraph = styled.p<IProps>`
  color: ${colors.gray300};
  font-weight: ${ ({ isTextBold }) => (isTextBold ? 700 : 400)};
  font-family: 'Inter';
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px;
  align-items: center;
  margin-top: 24px;
  border-style: solid none none none;
  width: 100%;
  border-width: 1px;
  border-color: ${colors.gray400};
  border-radius: 8px;
`;

const Img = styled.img`
  margin-bottom: 16px;
  width: 56px;
  height: 56px;
`;

export const EmptyTaskList: React.FC = () => {
  return (
    <Container>
      <Img src='/src/assets/empty.svg' />
      <Paragraph isTextBold>Você ainda não tem tarefas cadastradas</Paragraph>
      <Paragraph>Crie tarefas e organize seus itens a fazer</Paragraph>
    </Container>
  );
}