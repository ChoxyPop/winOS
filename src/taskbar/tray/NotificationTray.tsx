import React, { FC } from 'react';
import { TaskBarItem } from '../TaskBarItem';
import styled from 'styled-components/macro';
import { ExpandToggle } from './ExpandToggle';

const StyledNotificationTray = styled(TaskBarItem)`
  display: flex;
  padding: 0 7px 0 16px;
  align-items: center;
  height: 100%;

  border: 1px solid #3b4350;
  border-left-color: #1c2128;
  border-right: none;

  /* prettier-ignore */
  box-shadow:
  inset 2px 0px 2px 0px #6b7685,
  inset 0px 3px 2px -1px #5d6878,
  inset 0px -4px 14px 0px #6b7685;

  background: #444c59;


  .icon {
    width: 16px;
    height: 16px;
  }
`;

export const NotificationTray: FC = ({ children, ...rest }) => (
  <StyledNotificationTray {...rest}>
    <ExpandToggle />
    {children}
  </StyledNotificationTray>
);
