import { act, renderHook } from '@testing-library/react-hooks';
import { mockNavigate } from '~/jest/mocks';
import useMenuButtonVM from '../view.model';

describe('MenuButtonVM', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('handleOnPress should NOT call navigate when param is empty', () => {
    const { result } = renderHook(() => useMenuButtonVM());

    act(() => {
      result.current.handleOnPress();
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('handleOnPress should call navigate', () => {
    const { result } = renderHook(() => useMenuButtonVM());

    act(() => {
      result.current.handleOnPress('Materials');
    });

    expect(mockNavigate).toHaveBeenCalled();
  });

  it('handleOnPress should call navigate with correct params', () => {
    const { result } = renderHook(() => useMenuButtonVM());

    act(() => {
      result.current.handleOnPress('Materials');
    });

    expect(mockNavigate).toHaveBeenCalledWith('Materials');
  });

  it('handleOnPress should call navigate', () => {
    const { result } = renderHook(() => useMenuButtonVM());

    act(() => {
      result.current.handleOnPress('Materials');
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
