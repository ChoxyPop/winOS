import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { OSContext } from '../../App';
import { MediaMenuBar } from './MediaMenuBar';

export interface MediaPlayerWindowProps {
  path: string;
}

export const MediaPlayerWindow: FC<MediaPlayerWindowProps> = ({ path }) => {
  const { fileSystem } = useContext(OSContext)!;
  const [src, setSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    try {
      const data = fileSystem.readFileSync(path);
      const blob = new Blob([data], { type: 'video/mp4' }); // también puede ser video/avi
      const url = URL.createObjectURL(blob);
      setSrc(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } catch (err) {
      console.error('Error reading file:', err);
      setSrc(null);
    }
  }, [path]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MediaMenuBar />
      {src ? (
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          style={{
  flexGrow: 1,
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'auto',
  height: 'auto',
  background: 'black',
  display: 'block',
  margin: 'auto',
  objectFit: 'contain'
}}

        />
      ) : (
        <div style={{ padding: 10 }}>Could not load video file.</div>
      )}
    </div>
  );
};
