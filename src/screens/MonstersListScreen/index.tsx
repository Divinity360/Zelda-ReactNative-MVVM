import MonsterCard from '~/components/MonsterCard';
import ZeldaList from '~/components/ZeldaList';
import useMonsterViewModel from './view.model';

const MonstersListScreen = () => {
  const { data, isLoading, error } = useMonsterViewModel();

  return (
    <ZeldaList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => <MonsterCard monster={item} />}
    />
  );
};

export default MonstersListScreen;
