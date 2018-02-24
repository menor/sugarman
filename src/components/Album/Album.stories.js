import React from 'react';

import { storiesOf } from '@storybook/react';
import Album from '.';

const moonrite = { artist: 'Moonrite', title: 'S/T' };

storiesOf('Album', module)
  .add('Default', () => <Album />)
  .add('Example', () => <Album album={moonrite} />);
