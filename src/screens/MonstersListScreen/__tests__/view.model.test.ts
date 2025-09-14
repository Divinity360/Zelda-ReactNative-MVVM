import { renderHook } from '@testing-library/react-native';
import { mockApiHooks } from '~/api/__mocks__/hooks';
import { HooksApi } from '~/api/hooks';
import useMonsterViewModel from '../view.model';

describe('useMonsterViewModel', () => {
  it('should return the data', () => {
    const { result } = renderHook(() =>
      useMonsterViewModel(mockApiHooks as HooksApi)
    );
    expect(result.current.data).toEqual([{ id: '1', name: 'Lynel' }]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(undefined);
  });

  it('should return a normalized error when the request fails', () => {
    mockApiHooks.useGetAllMonstersQuery.mockImplementationOnce(() => ({
      data: {
        data: [],
      },
      isLoading: false,
      error: {
        status: 500,
        data: { message: 'Internal server error' },
      },
    }));

    const { result } = renderHook(() =>
      useMonsterViewModel(mockApiHooks as HooksApi)
    );
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual({
      status: 500,
      message: 'Internal server error',
      raw: {
        status: 500,
        data: { message: 'Internal server error' },
      },
    });
  });
});
