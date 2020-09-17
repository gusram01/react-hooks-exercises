import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('useFetch tests', () => {

  test('useFetch should return default values', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, error, loading } = result.current;

    expect(data).toEqual([]);
    expect(error).toBe(null);
    expect(loading).toBe(true);

  });

  test('useFetch should return data, loading: false, error: false, after fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    await waitForNextUpdate();
    const { data, error, loading } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);

  });

  test('useFetch should handle error', async () => {
    // the url was misspelled
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/1api/quotes/1'));

    await waitForNextUpdate();
    const { data, error, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(true);

  });

});
