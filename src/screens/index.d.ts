import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type RootTabsParamList = {
  Home: undefined;
  Settings: undefined;
};

type ScreenProps<T extends keyof RootTabsParamList> = BottomTabScreenProps<
  RootTabsParamList,
  T
>;
