import React from 'react';

import { storiesOf } from '@storybook/react';
import Album from '.';

const moonrite = {
  artist: 'Moonrite',
  coverUri: 'https://i.scdn.co/image/183b359cc1b870bf5e32a3ac54d41cf6e24db423',
  title: 'S/T',
};

storiesOf('Album', module)
  .add('Default', () => <Album />)
  .add('Example', () => <Album album={moonrite} />);
