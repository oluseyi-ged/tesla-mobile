import React from "react"
import styles from "./styles"
import { View, Text, Pressable } from "react-native"

const StyledButton = ({ type, text, onPress }) => {
  const backgroundColor = `${type}` === "primary" ? "#171a20cc" : "#ffffffa6"
  const textColor = `${type}` === "primary" ? "#ffffff" : "#171a20"

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton
