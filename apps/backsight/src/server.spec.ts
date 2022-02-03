import supertest from 'supertest';
import { createServer } from './server';

describe('server', () => {
   it('root returns 200', async () => {
      await supertest(createServer())
         .get('/')
         .expect(200)
         .then((res) => {
            expect(res.body.ok).toBe(true);
         });
   });

   it('message endpoint says hello', async () => {
      await supertest(createServer())
         .get('/message/jared')
         .expect(200)
         .then((res) => {
            expect(res.body).toEqual({ message: 'hello jared' });
         });
   });
});
