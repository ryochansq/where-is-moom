import { useEffect, useState } from "react";
import { Center, Collapse, Grid, GridItem } from "@chakra-ui/react";
import { Game } from "./features/Game";

function App() {
  const [scene, setScene] = useState<Scene>("game");

  return (
    <Grid
      h="100vh"
      templateAreas={`"header""main"`}
      gridTemplateRows={"50px auto"}
      justifyItems="center"
    >
      <GridItem bg="orange.300" fontWeight="bold" w="100%">
        <Center h="100%">MOO"M" をさがせ！</Center>
      </GridItem>
      <GridItem p="8px" maxW="md">
        <Collapse in={scene === "game"} animateOpacity unmountOnExit>
          <Game setScene={setScene} />
        </Collapse>
        <Collapse in={scene === "result"} animateOpacity unmountOnExit>
          クリアタイム：xx.xx秒
        </Collapse>
      </GridItem>
    </Grid>
  );
}

export default App;
