import { Button } from '@mui/material';
import React, { useState } from 'react';

export const CounterButton = () => {
   const [count, setCount] = useState(0);

   return (
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
         count {count}
      </Button>
   );
};
