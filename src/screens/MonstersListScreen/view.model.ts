import { useEffect, useState } from 'react';
import { hooksApi, HooksApi } from '~/api/hooks';
import useHeaderSearch from '~/hooks/useHeaderSearch';
import { normalizeError } from '~/utils/rtkQueryErrorNormalizer';

const useMonsterViewModel = (hooks: HooksApi = hooksApi) => {
  const { data, isLoading, error } = hooks.useGetAllMonstersQuery();
  const { searchTerm } = useHeaderSearch();
  const [filteredData, setFilteredData] = useState(data?.data);

  useEffect(() => {
    if (searchTerm) {
      const filtered = data?.data?.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data?.data);
    }
  }, [searchTerm, data]);
  /**
   * Place all the logic with data.
   * connects with a secondary slice if needed
   */

  return {
    data: filteredData,
    isLoading,
    error: normalizeError(error),
  };
};

export default useMonsterViewModel;
