import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  ${({ $hoverable }) => $hoverable && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  `}
`;

export const CardHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;