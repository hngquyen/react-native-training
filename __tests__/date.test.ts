import {formatDateFromEpochTime} from '../src/utils/date';

describe('format date from epochtime', () => {
  it('should format date correctly', () => {
    const tests: Array<[number, string]> = [
      [1641029367, '01/01/2022'],
      [1672500000, '31/12/2022'],
    ];

    tests.forEach(test => {
      const [received, expected] = test;
      expect(formatDateFromEpochTime(received)).toBe(expected);
    });
  });

  it('should return empty string for invalid received', () => {
    const tests: Array<[any, string]> = [
      [undefined, ''],
      [null, ''],
      [NaN, ''],
      ['invalid', ''],
    ];

    tests.forEach(test => {
      const [received, expected] = test;
      expect(formatDateFromEpochTime(received)).toBe(expected);
    });
  });
});
