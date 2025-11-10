import React from 'react';
import icon from './assets/media.png'; // usa cualquier ícono tipo play o video
import { Program } from '../../Program.interface';
import { BFSRequire } from 'browserfs';
import { MediaPlayerWindow } from './MediaPlayerWindow';

export const MediaPlayerApp: Program = async function (args) {
  const [path = '/C:/example.mp4'] = args;
  const nodePath = BFSRequire('path');
  const fileName = nodePath.basename(path);

  const windowSize = {
    width: Math.min(window.innerWidth, 480),
    height: Math.min(window.innerHeight, 360),
  };

  this.os.windowManager.create({
    title: `${fileName || 'Untitled'} - ${MediaPlayerApp.metadata.name}`,
    icon: MediaPlayerApp.metadata.icon,
    rect: {
      left: Math.max(0, window.innerWidth * 0.3 - windowSize.width / 2),
      top: Math.max(0, window.innerHeight * 0.3 - windowSize.height / 2),
      ...windowSize,
    },
    minSize: {
      width: 200,
      height: 150,
    },
    body: <MediaPlayerWindow path={path} />,
  });
};

MediaPlayerApp.metadata = {
  name: 'Media Player',
  icon,
  fileExtensions: {
    '.mp4': icon,
    '.avi': icon,
  },
};
