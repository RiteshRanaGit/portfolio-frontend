import styled from 'styled-components';
import { Section } from '../components/common';

export const PageSection = styled(Section)`
  min-height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;