import { createStackNavigator } from '@react-navigation/stack';

type RootParamList = {
  Home: undefined;
  Quiz: undefined;
  NutritionFundamentals: undefined;
  TrainingFundamentals: undefined;
};

const Root = createStackNavigator<RootParamList>();
