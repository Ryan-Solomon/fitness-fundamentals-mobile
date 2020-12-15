import { createStackNavigator } from '@react-navigation/stack';

type RootParamList = {
  Home: undefined;
  Quiz: undefined;
  Nutrition: undefined;
  Training: undefined;
};

export const Root = createStackNavigator<RootParamList>();
