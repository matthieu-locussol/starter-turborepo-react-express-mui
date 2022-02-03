import assert = require('assert');

export function _assert<T>(value: T, message?: string | Error): asserts value is NonNullable<T> {
   // @ts-expect-error needed, else error: This condition will always return 'false' since the types 'T' and 'boolean' have no overlap.ts(2367)
   if (value === true || value === false) {
      console.error('do not use _assert for boolean value, use _assertTrue instead');
      const err = typeof message === 'object' ? message : new Error(message);
      console.error(err);
      throw err;
   }

   if (value !== undefined && value !== null) {
      return;
   }

   const err = typeof message === 'object' ? message : new Error(message);
   console.error(err);
   throw err;
}

export function _assertTrue(value: boolean, message?: string | Error): asserts value {
   if (value === true) {
      return;
   }

   const err = typeof message === 'object' ? message : new Error(message);
   console.error(err);
   throw err;
}

export function _assertEq<T, U extends T>(
   value1: T,
   value2: U,
   message?: string | Error,
): asserts value1 is U {
   if (value1 === value2) {
      return;
   }

   const err = typeof message === 'object' ? message : new Error(message);
   console.error(err);
   throw err;
}

export function _assertStrictEqual<T>(
   actual: unknown,
   expected: T,
   message?: string | Error | undefined,
): asserts actual is T {
   return assert.strictEqual(actual, expected, message);
}

export function _throw(message: string | Error): never {
   console.error(message);

   if (typeof message === 'string') {
      throw new Error(message);
   }

   throw message;
}
