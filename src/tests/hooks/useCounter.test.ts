import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter tests', () => {

  test('useCounter should return default values', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.initial).toBe('function');
  });

  test('useCounter should return argument value', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('useCounter should increment +1', () => {
    const { result } = renderHook(() => useCounter(0));
    const { increment } = result.current;

    act(() => { increment() });

    const { counter } = result.current;
    expect(counter).toBe(1);
  });

  test('useCounter should decrement -1', () => {
    const { result } = renderHook(() => useCounter(15));
    const { decrement } = result.current;

    act(() => { decrement() });

    const { counter } = result.current;
    expect(counter).toBe(14);
  });

  test('useCounter should restore counter to argument value', () => {
    const { result } = renderHook(() => useCounter(15));
    const { decrement, initial } = result.current;

    act(() => { decrement(); initial() });

    const { counter } = result.current;
    expect(counter).toBe(15);
  });

});