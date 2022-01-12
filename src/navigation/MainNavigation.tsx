import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "../types";

// screens
import TransactionList from "../screens/TransactionList";
import TransactionDetail from "../screens/TransactionDetail";

const AppStack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name={"TransactionList"}
          component={TransactionList}
          options={{ title: "Daftar Transaksi" }}
        />
        <AppStack.Screen
          name={"TransactionDetail"}
          component={TransactionDetail}
          options={{ title: "Detail Transaksi", headerBackTitleVisible: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default MainNavigation;
