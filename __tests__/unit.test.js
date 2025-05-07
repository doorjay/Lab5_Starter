// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: valid "123-456-7890"', () => 
{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
}); 

test('isPhoneNumber: valid “(123) 456-7890”', () => 
{
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: invalid “1234567890” (no separators)', () => 
{
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber: invalid “1-34-70” (too few digits)', () => 
{
  expect(isPhoneNumber('1-34-70')).toBe(false);
});

// isEmail
test('isEmail: valid “test@example.com”', () => 
{
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail: valid “username@domain.co”', () => 
{
  expect(isEmail('username@domain.co')).toBe(true);
});

test('isEmail: invalid “test@com” (missing dot)', () => 
{
  expect(isEmail('test@com')).toBe(false);
});

test('isEmail: invalid “@example.com” (missing user)', () => 
{
  expect(isEmail('@example.com')).toBe(false);
});

// isStrongPassword

test('isStrongPassword: valid “Abc_1234”', () => 
{
  expect(isStrongPassword('Abc_1234')).toBe(true);
});

test('isStrongPassword: valid “Zzz999”', () => 
{
  expect(isStrongPassword('Zzz999')).toBe(true);
});

test('isStrongPassword: invalid “1abcd” (doesn’t start with letter)', () => 
{
  expect(isStrongPassword('1abcd')).toBe(false);
});

test('isStrongPassword: invalid “ab” (too short)', () => 
{
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate: valid “01/01/2020”', () => 
{
  expect(isDate('01/01/2020')).toBe(true);
});

test('isDate: valid “12/31/1999”', () => 
{
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate: invalid “999/01/2020” (month 3 digits)', () => 
{
  expect(isDate('999/01/2020')).toBe(false);
});

test('isDate: invalid “00/00/00000” (year 5 digits)', () => 
{
  expect(isDate('00/00/00000')).toBe(false);
});

// isHexColor

test('isHexColor: valid “#FFF”', () => 
{
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor: valid “#abcdef”', () => 
{
  expect(isHexColor('#abcdef')).toBe(true);
});

test('isHexColor: invalid “FF” (too short a code)', () => 
{
  expect(isHexColor('FF')).toBe(false);
});

test('isHexColor: invalid “#GGGGGG” (to long a code)', () => 
{
  expect(isHexColor('#GGGGGGG')).toBe(false);
});