import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

Deno.test('1 + 1 should be 2', () => {
  assertEquals(1 + 1, 2);
});

Deno.test('7 + 3 should be 10', () => {
  assertEquals(7 + 3, 10);
});
