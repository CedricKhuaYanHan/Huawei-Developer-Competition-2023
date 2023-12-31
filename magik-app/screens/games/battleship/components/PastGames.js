import React from "react";
import { Box, Text, ScrollView, Center } from "native-base";
import ButtonGame from "./ButtonGame";
import { COLORS } from "../../../../constants";
import { t } from 'react-native-tailwindcss';

const PastPuzzles = ({}) => {
  return (
    <Box h="60%">
      <Text
        fontFamily="Poppins-SemiBold"
        mb="10px"
        mt="17px"
        color={COLORS.gray}
        mx="10px"
      >
        Past Games
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={[t.hFull]}>
        <Center w="100%">
          {Array.from(Array(7).keys()).map((e) => {
            return (
              <ButtonGame
                text={`Game ${e + 1}`}
                lastPlayed={new Date()}
                icon="extension-puzzle-outline"
                onPress={() => console.log("")}
              />
            );
          })}
        </Center>
      </ScrollView>
    </Box>
  );
};

export default PastPuzzles;
