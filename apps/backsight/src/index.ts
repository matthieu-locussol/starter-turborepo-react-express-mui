import { _assertTrue } from 'utils';
import { createServer } from './server';

const port = process.env.PORT || 4001;
const server = createServer();

server.listen(port, () => {
   _assertTrue(port === 4001);
   console.log(`api running on ${port}`);
});
