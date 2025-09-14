import EquipmentCard from '~/components/EquipmentCard';
import ZeldaList from '~/components/ZeldaList';
import useEquipmentVM from './view.model';

const EquipmentsListScreen = () => {
  const { data, isLoading, error } = useEquipmentVM();

  return (
    <ZeldaList
      data={data}
      isLoading={isLoading}
      error={error}
      renderItem={item => <EquipmentCard equipment={item} />}
    />
  );
};

export default EquipmentsListScreen;
