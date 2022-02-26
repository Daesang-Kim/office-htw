import {
  pad2, toNumber,
} from './calculation'

describe('Pad2 Function Testing', () => {
  it('string 2 => string 02', () => {
    expect(pad2('2')).toBe('02');
  });
  it('number 2 => string 02', () => {
    expect(pad2(2)).toEqual('02');
  });
  it('string empty => string 0', () => {
    expect(pad2('')).toBe('0');
  });
  it('string empty => string 0', () => {
    expect(pad2('123')).toBe('123');
  });
  it('0 => string 00', () => {
    expect(pad2(0)).toBe('00');
  });
  it('number 12 => string 12', () => {
    expect(pad2(12)).toBe('12');
  });
})

describe('toNumber Function Testing', () => {
  it('string 0 => number 0', () => {
    expect(toNumber('0')).toEqual(0)
  })
  it('string empty => number 0', () => {
    expect(toNumber('')).toEqual(0)
  })
})
