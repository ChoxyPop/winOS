import React from 'react';
import styled from 'styled-components/macro';
import expandIcon from '../../assets/widgets/tray-expand.png';

export interface ExpandToggleProps {
  expanded?: boolean;
}

const FlippedStyle = {
  transform: 'scaleX(-1)',
};

export const ExpandToggle = styled((props: ExpandToggleProps) => (
  <button {...props}>
    <img
      src={expandIcon}
      draggable={false}
      alt="Expand notification tray"
      style={props.expanded ? FlippedStyle : undefined}
    />
  </button>
)).attrs({
  type: 'button',
})`
  position: absolute;
  left: -9px;
  width: 19px;
  height: 19px;
  margin-top: 1px;
  text-align: center;

  border-radius: 100%;
  border: 1px solid #1a1e28;
  border-color: #2c3240 #a4a9b6 #717683 #1a1e28;

  background-color: #6f7a88;
  /* prettier-ignore */
  box-shadow:
  inset -4px -4px 6px #2c3442,
  inset -9px -9px 6px #3a4352;

  &:hover {
    background-color: #8b95a3;
    box-shadow: inset -10px -10px 8px -7px #444d5b;
  }

  &:active {
    background-color: #5f6a77;
    /* prettier-ignore */
    box-shadow:
      inset -4px -4px 6px #232a35,
      inset -9px -9px 6px -2px #3b4655;
  }

    img {
      opacity: 0.5;
    }
  }

  img {
    filter: drop-shadow(0 0 1px #00000077);
  }
`;
