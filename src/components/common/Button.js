import styled, { css } from 'styled-components';

const buttonVariants = {
  primary: css`
    background-color: #FF6B4A !important;
    color: ${({ theme }) => theme.colors.white} !important;
    border: 2px solid #FF6B4A !important;
    
    &:hover:not(:disabled) {
      background-color: transparent !important;
      color: #FF6B4A !important;
      transform: translateY(-2px);
    }
  `,
  
  secondary: css`
    background-color: transparent !important;
    color: #FF6B4A !important;
    border: 2px solid #FF6B4A !important;
    
    &:hover:not(:disabled) {
      background-color: #FF6B4A !important;
      color: ${({ theme }) => theme.colors.white} !important;
    }
  `,
  
  accent: css`
    background-color: #FF6B4A !important;
    color: ${({ theme }) => theme.colors.white} !important;
    border: 2px solid #FF6B4A !important;
    
    &:hover:not(:disabled) {
      background-color: transparent !important;
      color: #FF6B4A !important;
      transform: translateY(-2px);
    }
  `,
  
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.gray[200]};
    }
  `
};

const buttonSizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  `,
  
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  
  ${({ $variant }) => buttonVariants[$variant || 'primary']}
  ${({ $size }) => buttonSizes[$size || 'md']}
  
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  
  ${({ $variant }) => buttonVariants[$variant || 'primary']}
  ${({ $size }) => buttonSizes[$size || 'md']}
  
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;