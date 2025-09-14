import { act, renderHook } from '@testing-library/react-native';
import { mockNavigate } from '~/jest/mocks';
import { Creature } from '~/models/creature.model';
import useCreatureCardVM from '../view.model';

describe('useCreatureCardVM', () => {
  const { result } = renderHook(() =>
    useCreatureCardVM({
      creature: {} as Creature,
    })
  );

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('handleOnPress should call navigate', () => {
    act(() => {
      result.current.handleOnPress();
    });

    expect(mockNavigate).toHaveBeenCalled();
  });

  it('handleOnPress should call navigate with correct route/params', () => {
    act(() => {
      result.current.handleOnPress();
    });

    expect(mockNavigate).toHaveBeenCalledWith('CreatureDetails', {
      creature: {},
    });
  });

  it('handleOnPress should call navigate only once', () => {
    act(() => {
      result.current.handleOnPress();
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
