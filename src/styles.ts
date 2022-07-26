import styled from '@emotion/styled';

export const colors = {
  gray700: '#0D0D0D',
  gray600: '#1A1A1A',
  gray500: '#262626',
  gray400: '#333333',
  gray300: '#808080',
  gray200: '#D9D9D9',
  gray100: '#F2F2F2',
  blue: '#4EA8DE',
  blueDark: '#1E6F9F',
  purple: '#8284FA',
  purpleDark: '#5E60CE',
  danger: '#E25858'
}

export const Header = styled.body`
  display: flex;
  justify-content: center;
  background-color: ${colors.gray700};
  color: #fff;
  padding-top: 72px;
  padding-bottom: 80px;
`;

export const BodyTasks = styled.div`
  --headerSize: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.gray600};
  min-height: calc(100vh - var(--headerSize))
`;

export const InputFormContent = styled.div`
  display: flex;
  margin-top: -25px;
  margin-bottom: 64px;
  justify-content: space-between;
  gap: 8px;
`