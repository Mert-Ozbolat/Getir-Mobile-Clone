import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigatior from "./src/navigators/RootNavigatior"


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigatior />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop: '15%',
  },
});