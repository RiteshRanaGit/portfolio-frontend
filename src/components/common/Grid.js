import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${({ theme, $gap }) => $gap || theme.spacing.xl};
  
  @media ${device.md} {
    grid-template-columns: ${({ $mdColumns, $columns }) => $mdColumns || $columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  }
  
  @media ${device.lg} {
    grid-template-columns: ${({ $lgColumns, $mdColumns, $columns }) => $lgColumns || $mdColumns || $columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: ${({ $wrap }) => $wrap || 'wrap'};
  gap: ${({ theme, $gap }) => $gap || theme.spacing.md};
  align-items: ${({ $align }) => $align || 'stretch'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
`;

export const Col = styled.div`
  flex: ${({ $flex }) => $flex || '1'};
  min-width: ${({ $minWidth }) => $minWidth || '0'};
  
  @media ${device.md} {
    flex: ${({ $mdFlex, $flex }) => $mdFlex || $flex || '1'};
  }
  
  @media ${device.lg} {
    flex: ${({ $lgFlex, $mdFlex, $flex }) => $lgFlex || $mdFlex || $flex || '1'};
  }
`;