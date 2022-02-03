import { _assert, _assertEq, _assertStrictEqual, _assertTrue, _throw } from './_assert';

describe(__filename, () => {
   beforeEach(() => {
      console.error = () => ({});
   });

   it('_assert', () => {
      expect(() => _assert(true)).toThrow();
      expect(() => _assert(false)).toThrow();
      expect(() => _assert(null)).toThrow();
      expect(() => _assert(undefined)).toThrow();

      const variable: string | null = 'value';
      expect(() => _assert(variable)).not.toThrow();
   });

   it('_assertTrue', () => {
      expect(() => _assertTrue(true)).not.toThrow();
      expect(() => _assertTrue(false)).toThrow();
   });

   it('_assertEq', () => {
      expect(() => _assertEq('', '')).not.toThrow();
      expect(() => _assertEq('value', 'value2')).toThrow();
   });

   it('_assertStrictEqual', () => {
      expect(() => _assertStrictEqual('', '')).not.toThrow();
      expect(() => _assertStrictEqual('', 'value')).toThrow();
      expect(() => _assertStrictEqual(123, '123')).toThrow();
   });

   it('_throw', () => {
      expect(() => _throw('')).toThrow('');
      expect(() => _throw('ErrorMsg')).toThrow('ErrorMsg');
      expect(() => _throw(new Error('Msg'))).toThrow('Msg');
   });
});
