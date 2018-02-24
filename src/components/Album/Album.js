// @flow
import React from 'react';
import type { AlbumType } from 'types';

type Props = {
  album: AlbumType,
};

const Album = ({ album: { artist, coverUri, title } }) => {
  return (
    <div>
      <img src={coverUri} />
      <h1>{artist}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Album;
