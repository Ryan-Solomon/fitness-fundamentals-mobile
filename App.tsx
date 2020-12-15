import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Root } from './src/routes/Routes';
import HomeScreen from './src/screens/HomeScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import QuizScreen from './src/screens/QuizScreen';
import TrainingScreen from './src/screens/TrainingScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name='Home' component={HomeScreen} />
        <Root.Screen name='Nutrition' component={NutritionScreen} />
        <Root.Screen name='Training' component={TrainingScreen} />
        <Root.Screen name='Quiz' component={QuizScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
