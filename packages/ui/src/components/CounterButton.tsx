import { Button } from '@mui/material';
import React, { useState } from 'react';
export interface CounterButtonProps {
   initialValue?: number;
}

export const CounterButton = ({ initialValue }: CounterButtonProps) => {
   const [count, setCount] = useState(initialValue || 0);

   return (
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
         count {count}
      </Button>
   );
};
