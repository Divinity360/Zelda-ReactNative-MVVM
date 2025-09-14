import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EffectBoxGroup from '~/components/EffectBoxGroup';
import Image from '~/components/Image';
import Text from '~/components/Text';
import colors from '~/constants/colors';
import { Equipment } from '~/models/equipment.model';

type EquipmentDetailsRouteProp = RouteProp<
  {
    EquipmentDetails: { equipment: Equipment };
  },
  'EquipmentDetails'
>;

const EquipmentDetailsScreen = () => {
  const route = useRoute<EquipmentDetailsRouteProp>();
  const { equipment } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Image imageUrl={equipment.image} type="large" />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text type="title" style={styles.name}>
              {equipment.name}
            </Text>
          </View>

          <View style={styles.section}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Description
            </Text>
            <Text style={styles.description}>{equipment.description}</Text>
          </View>

          <View style={styles.section}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Stats
            </Text>
            <EffectBoxGroup equipProps={equipment.properties} />
          </View>

          {equipment.common_locations &&
            equipment.common_locations.length > 0 && (
              <View style={styles.section}>
                <Text type="subtitle" style={styles.sectionTitle}>
                  Common Locations
                </Text>
                {equipment.common_locations.map((location, index) => (
                  <View key={index} style={styles.itemContainer}>
                    <Text style={styles.itemText}>• {location}</Text>
                  </View>
                ))}
              </View>
            )}

          <View style={styles.section}>
            <Text type="subtitle" style={styles.sectionTitle}>
              Additional Info
            </Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>DLC Content:</Text>
              <Text style={styles.infoValue}>
                {equipment.dlc ? 'Yes' : 'No'}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>ID:</Text>
              <Text style={styles.infoValue}>{equipment.id}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  effectsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    width: '100%',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  name: {
    marginBottom: 8,
    color: colors.text,
  },
  categoryContainer: {
    backgroundColor: colors.palette1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  category: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    color: colors.text,
  },
  description: {
    color: colors.text,
    lineHeight: 22,
  },
  itemContainer: {
    marginBottom: 8,
  },
  itemText: {
    color: colors.text,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.palette1,
  },
  infoLabel: {
    color: colors.text,
    fontWeight: '600',
  },
  infoValue: {
    color: colors.text,
  },
});

export default EquipmentDetailsScreen;
