import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media ${device.sm} {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media ${device.lg} {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;

  @media ${({ theme }) => device.md} {
    padding: ${({ theme }) => theme.spacing['4xl']} 0;
  }
`;

export const PageWrapper = styled.div`
  min-height: calc(100vh - 60px);
  background-color: ${({ theme, $background }) => $background || theme.colors.background};
`;