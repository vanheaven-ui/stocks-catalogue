import removeDups from '../../utils/removeDups';

describe('removeDups method', () => {
  const received = ['A', 'B', 'C', 'A', 'B', 'D', 'C'];
  const expected = ['A', 'B', 'C', 'D'];
  test('removes duplicates from an array', () => {
    expect(removeDups(received)).toStrictEqual(expected);
  });
});
