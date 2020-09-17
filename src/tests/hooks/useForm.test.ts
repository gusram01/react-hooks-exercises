import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import * as React from 'react';
import { shallow } from 'enzyme';

describe('useForm tests', () => {

  const initial = {
    name: 'Gus',
    email: 'g@g.com',
    password: '1234'
  };



  test('useForm should return default values', () => {
    const { result } = renderHook(() => useForm(initial));
    expect(result.current.values).toEqual(initial);
    expect(typeof result.current.handleInputChange).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('useForm handleInputChange should change default value', () => {

    const { result } = renderHook(() => useForm(initial));
    const { handleInputChange } = result.current;

    act(() => {
      handleInputChange({
        //@ts-expect-error
        target: {
          name: 'name',
          value: 'some other name'
        }
      });
    });
    const { values } = result.current;

    expect(values).toEqual({
      ...initial,
      name: 'some other name'
    })
  });

  test('useForm should return default values when call reset', () => {

    const { result } = renderHook(() => useForm(initial));
    const { handleInputChange, reset } = result.current;

    act(() => {
      handleInputChange({
        //@ts-expect-error
        target: {
          name: 'name',
          value: 'some other name'
        }
      });
      reset();
    });
    const { values } = result.current;

    expect(values).toEqual(initial);
  });

});
