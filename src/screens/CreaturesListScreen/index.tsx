import CreatureCard from '~/components/CreatureCard';
import ZeldaList from '~/components/ZeldaList';
import useCreaturesVM from './view.model';

const CreaturesListScreen = () => {
  const { data, isLoading, error } = useCreaturesVM();

  return (
    <ZeldaList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => <CreatureCard creature={item} />}
    />
  );
};

export default CreaturesListScreen;
