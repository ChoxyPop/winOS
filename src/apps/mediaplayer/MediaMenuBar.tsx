import React, { useContext } from 'react';
import { MenuBar } from '../../widgets/menubar/MenuBar';
import { Item, Separator } from 'react-contexify';
import { WindowContext } from '../../windows/WindowManager';
import { MenuBarMenu } from '../../widgets/menubar/MenuBarMenu';

export const MediaMenuBar = () => {
  const window = useContext(WindowContext)!;

  return (
    <MenuBar>
      <MenuBarMenu label="File">
        <Item>Open...</Item>
        <Separator />
        <Item onClick={() => window.destroy()}>Exit</Item>
      </MenuBarMenu>

      <MenuBarMenu label="Playback">
        <Item>Play</Item>
        <Item>Pause</Item>
        <Item>Stop</Item>
      </MenuBarMenu>

      <MenuBarMenu label="Help">
        <Item>About Media Player</Item>
      </MenuBarMenu>
    </MenuBar>
  );
};
