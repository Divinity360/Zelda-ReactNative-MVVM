import { NormalizedError } from '~/utils/rtkQueryErrorNormalizer';

export interface ZeldaListProps<T> {
  data: T[] | undefined;
  isLoading: boolean;
  error: NormalizedError | undefined;
  renderItem: (item: T) => React.ReactElement;
  emptyMessage?: string;
}
