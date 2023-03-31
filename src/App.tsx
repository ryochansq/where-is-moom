import { useEffect, useState } from "react";
import { Center, Collapse, Grid, GridItem } from "@chakra-ui/react";
import { Game } from "./features/Game";
// import { useStopwatch } from "./hooks/useStopWatch";

function App() {
  const [scene, setScene] = useState<Scene>("game");
  // const { time, stop, reset } = useStopwatch();

  // useEffect(() => {
  //   if (scene === "game") reset();
  //   else stop();
  // }, [scene]);

  // const timeString = (time / 1000 - 4).toFixed(2);

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
          {/* クリアタイム：{timeString} 秒 */}
        </Collapse>
      </GridItem>
    </Grid>
  );
}

export default App;
