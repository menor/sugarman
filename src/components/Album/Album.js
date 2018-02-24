// @flow
import React from 'react';
import styled from 'styled-components';

import type { AlbumType } from 'types';

type Props = {
  album: AlbumType,
};

const Album = ({ album: { artist, coverUri, title } }) => {
  return (
    <div>
      <AlbumCover src={coverUri} />
      <h1>{artist}</h1>
      <h2>{title}</h2>
    </div>
  );
};

const AlbumCover = styled.img`
  max-width: 360px;
`

export default Album;
