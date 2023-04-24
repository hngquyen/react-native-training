import {formatNumberWithCommas} from '../src/utils/number';

describe('format number', () => {
  describe('with commas', () => {
    it('and 2 decimal places', () => {
      const tests: Array<[number, string]> = [
        [1234567.89, '1,234,567.89'],
        [0.1, '0.10'],
        [123.456, '123.46'],
        [1111, '1,111.00'],
        [0, '0.00'],
      ];

      tests.forEach(test => {
        const [input, expected] = test;
        expect(formatNumberWithCommas(input)).toBe(expected);
      });
    });

    it('negative number and 2 decimal places', () => {
      const tests: Array<[number, string]> = [
        [-1234567.89, '-1,234,567.89'],
        [-0.1, '-0.10'],
        [-123.456, '-123.46'],
        [-1111, '-1,111.00'],
        [0, '0.00'],
      ];

      tests.forEach(test => {
        const [input, expected] = test;
        expect(formatNumberWithCommas(input)).toBe(expected);
      });
    });
  });
});
