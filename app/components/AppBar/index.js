/**
 *
 * AppBar
 *
 */

import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '100' }}
    {...props}
  >
    <Heading level="3" margin="none">
      <FormattedMessage {...messages.header} />
    </Heading>
    <Button icon={<Notification />} onClick={() => {}} />
  </Box>
);

export default AppBar;
