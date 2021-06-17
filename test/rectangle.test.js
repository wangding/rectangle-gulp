/* global chai describe Rectangle test: true */
import { Rectangle } from '../src/rectangle';

describe('矩形计算器面积计算功能测试套件', () =>{
  test('宽度和高度是整数', () =>{
    let r = new Rectangle(4, 5);
    expect(r.area).toBe(20);
  });

  test('宽度和高度是小数', () => {
    let r = new Rectangle(0.1, 0.2);
    expect(r.area).toBe(0.020000000000000004);
  });

  test('宽度和高度是整数字符串', () => {
    let r = new Rectangle('4', '5');
    expect(r.area).toBe(20);
  });

  test('宽度和高度都是特殊值 0', () => {
    let r = new Rectangle(0, 0);
    expect(r.area).toBe(0);
  });

  test('宽度和高度都是非法字符串', () =>{
    let r = new Rectangle('a', 'b');
    expect(r.area).toBeNaN();
  });
});

describe('矩形计算器周长计算功能测试套件', () =>{
  test('宽度和高度是整数', () =>{
    let r = new Rectangle(4, 5);
    expect(r.perimeter).toBe(18);
  });

  test('宽度和高度是小数', () => {
    let r = new Rectangle(0.1, 0.2);
    expect(r.perimeter).toBe(0.6000000000000001);
  });

  test('宽度和高度是整数字符串', () => {
    let r = new Rectangle('4', '5');
    expect(r.perimeter).toBe(18);
  });

  test('宽度和高度都是特殊值 0', () => {
    let r = new Rectangle(0, 0);
    expect(r.perimeter).toBe(0);
  });

  test('宽度和高度都是非法字符串', () =>{
    let r = new Rectangle('a', 'b');
    expect(r.perimeter).toBeNaN();
  });
});
