import React from 'react';
import styled from 'styled-components';

const SelectableSpan = styled.span`
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  user-select: text !important;
  cursor: text !important;
`;

export const SelectableEmail = ({ email, children, ...props }) => {
  return (
    <SelectableSpan className="selectable" {...props}>
      {children || email}
    </SelectableSpan>
  );
};

export const SelectablePhone = ({ phone, children, ...props }) => {
  return (
    <SelectableSpan className="selectable" {...props}>
      {children || phone}
    </SelectableSpan>
  );
};

export const SelectableText = ({ children, ...props }) => {
  return (
    <SelectableSpan className="selectable" {...props}>
      {children}
    </SelectableSpan>
  );
};