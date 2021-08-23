import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import CarItem from "./components/CarItem"

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Model S"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require("./assets/images/ModelS.jpeg")}
      />
      <CarItem
        name="Model Y"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require("./assets/images/ModelY.jpeg")}
      />
      <CarItem
        name="Model 3"
        tagLine="Order Online for"
        image={require("./assets/images/Model3.jpeg")}
      />
      <CarItem
        name="Model X"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require("./assets/images/ModelX.jpeg")}
      />
      <CarItem
        name="Solar Panels"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require("./assets/images/SolarPanels.jpeg")}
      />
      <CarItem
        name="Solar Roof"
        tagLine="Order Online for"
        tagLineCTA="Touchless Delivery"
        image={require("./assets/images/SolarRoof.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
