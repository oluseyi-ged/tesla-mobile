import React from "react"
import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"
import StyledButton from "../StyledButton"

const CarItem = ({ name, tagLine, image, tagLineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          text="custom order"
          onPress={() => {
            console.warn("custom order was pressed")
          }}
        />
        <StyledButton
          type="secondary"
          text="Existing inventory"
          onPress={() => {
            console.warn("existing inventory was pressed")
          }}
        />
      </View>
    </View>
  )
}

export default CarItem
