import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text, Box, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../../../constants";
import BackButton from "../components/BackButton";
import NewGameButton from "../components/NewGameButton";

const MatchingShapesScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView backgroundColor={COLORS.white}>
      <Box px={10} h="100%">
        <BackButton
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 10,
            top: 5,
            padding: 10,
            borderColor: COLORS.lightGray,
            borderWidth: 1.5,
            borderRadius: 14,
            width: 45,
            height: 45,
          }}
          onPress={() => {
            navigation.navigate("Games");
          }}
        />

        <Box
          w="100%"
          h="90%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Text fontSize="40px" color={COLORS.black} style={{fontFamily: "Poppins-Bold", textAlign: 'center'}}>
            Matching Shapes
          </Text>

          <Button
            w="300px"
            py={30}
            style={styles.playButton}
            borderRadius={20}
            _pressed={{ opacity: 0.5 }}
            onPress={() => {
              navigation.navigate("PiecesModal", { name: "Matching Shapes" });
            }}
          >
            <Box
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="space-around"
            >
              <Text color={COLORS.white} fontSize="40px" bold mr={5}>
                Play
              </Text>
              <Icon name="play" color={COLORS.white} size={40} />
            </Box>
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    fontWeight: 700,
    alignSelf: "flex-start",
    color: COLORS.black,
    paddingLeft: 20,
    paddingTop: 30,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    alignSelf: "center",
  },
  playButton: {
    backgroundColor: COLORS.green, 
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  }
});

export default MatchingShapesScreen;
