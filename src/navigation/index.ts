import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '~/constants/colors';
import { Creature } from '~/models/creature.model';
import { Equipment } from '~/models/equipment.model';
import { Material } from '~/models/material.model';
import { Monster } from '~/models/monster.model';
import CreatureDetails from '~/screens/CreatureDetailsScreen';
import CreaturesListScreen from '~/screens/CreaturesListScreen';
import EquipmentDetailsScreen from '~/screens/EquipmentDetailsScreen';
import EquipmentsListScreen from '~/screens/EquipmentsListScreen';
import HomeScreen from '~/screens/HomeScreen';
import MaterialDetailsScreen from '~/screens/MaterialDetailsScreen';
import MaterialsListScreen from '~/screens/MaterialsListScreen';
import MonsterDetailsScreen from '~/screens/MonsterDetailsScreen';
import MonstersListScreen from '~/screens/MonstersListScreen';
import HeaderBackButton from '../components/HeaderBackButton';

const RootStack = createNativeStackNavigator({
  screenOptions: {
    contentStyle: {
      backgroundColor: colors.background,
    },
    headerLeft: HeaderBackButton,
    // Common Header Styles
    headerTitleStyle: {
      fontFamily: 'Hylia',
      color: colors.text,
      fontSize: 24,
    },
    headerTransparent: true,
    headerBlurEffect: 'dark',
    headerShadowVisible: false,
    // Large Header Styles
    headerLargeTitle: true,
    headerLargeTitleStyle: {
      color: colors.text,
      fontFamily: 'Hylia',
    },
    headerLargeTitleShadowVisible: false,
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    Monsters: {
      screen: MonstersListScreen,
      options: {
        title: 'Monsters',
      },
    },
    MonsterDetails: {
      screen: MonsterDetailsScreen,
      options: {
        title: 'Details',
        headerLargeTitle: false,
        headerSearchBarOptions: undefined,
      },
    },
    Materials: {
      screen: MaterialsListScreen,
      options: {
        title: 'Materials',
      },
    },
    MaterialDetails: {
      screen: MaterialDetailsScreen,
      options: {
        title: 'Details',
        headerLargeTitle: false,
        headerSearchBarOptions: undefined,
      },
    },
    Equipments: {
      screen: EquipmentsListScreen,
      options: {
        title: 'Equipments',
      },
    },
    EquipmentDetails: {
      screen: EquipmentDetailsScreen,
      options: {
        title: 'Details',
        headerLargeTitle: false,
        headerSearchBarOptions: undefined,
      },
    },
    Creatures: {
      screen: CreaturesListScreen,
      options: {
        title: 'Creatures',
      },
    },
    CreatureDetails: {
      screen: CreatureDetails,
      options: {
        title: 'Details',
        headerLargeTitle: false,
        headerSearchBarOptions: undefined,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;

// type-check the useNavigation hook
export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      MonsterDetails: { monster: Monster };
      MaterialDetails: { material: Material };
      EquipmentDetails: { equipment: Equipment };
      CreatureDetails: { creature: Creature };
    }
  }
}
