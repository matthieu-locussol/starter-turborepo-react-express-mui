import { Box, Typography } from '@mui/material';
import { CounterButton } from '@packages/ui';
import * as React from 'react';

export const IndexPage = () => {
   return (
      <Box>
         <Typography variant="h3">Website</Typography>
         <CounterButton />
      </Box>
   );
};
