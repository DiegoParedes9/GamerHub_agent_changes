const COLORS = {
  background: '#070B14',

  card: '#111827',

  neonBlue: '#38BDF8',
  neonPurple: '#8B5CF6',

  text: '#FFFFFF',
  muted: '#94A3B8',

  border: '#1E293B',
};
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/features/gaming/screens/HomeScreen';

import DiscoverScreen from './src/features/gaming/screens/DiscoverScreen';

import SquadsScreen from './src/features/gaming/screens/SquadsScreen';

import ProfileScreen from './src/features/gaming/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#0B1120',

            borderTopColor: '#1E293B',
            borderTopWidth: 1,

            height: 75,

            paddingBottom: 10,
            paddingTop: 10,
          },

          tabBarActiveTintColor: COLORS.neonBlue,

          tabBarInactiveTintColor: '#64748B',

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },

          tabBarIcon: ({ color, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            }

            else if (route.name === 'Discover') {
              iconName = focused
                ? 'compass'
                : 'compass-outline';
            }

            else if (route.name === 'Squads') {
              iconName = focused
                ? 'people'
                : 'people-outline';
            }

            else if (route.name === 'Profile') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={26}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
        />

        <Tab.Screen
          name="Squads"
          component={SquadsScreen}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}