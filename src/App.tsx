import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";

const r = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const rows = (count: number) => count * 3;
const nums = (count: number) => count * rows(count);

function App() {
  const [count, setCount] = useState(1);
  const [rand, setRand] = useState(r(0, nums(count)));
  const moons = useMemo(
    () =>
      new Array<string>(nums(count))
        .fill("")
        .map((_, i) => (i === rand ? "moom" : "moon")),
    [count]
  );

  useEffect(() => {
    setRand(r(0, nums(count)));
  }, [count]);

  const onClick = async (v: string) => {
    if (v !== "moom") return;
    await new Promise((resolve) => setTimeout(resolve, 280));
    if (count < 5) setCount(count + 1);
    else console.info("ゲーム終了処理");
  };

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
        <HStack justify="center" mb="1" fontSize="24px">
          {new Array(5)
            .fill(0)
            .map((_, i) =>
              i + 1 < count ? (
                <CheckCircleIcon color="green.400" />
              ) : (
                <MinusIcon />
              )
            )}
        </HStack>
        <SimpleGrid maxH="100%" columns={count} spacing="0.5">
          {moons.map((v) => (
            <Button
              h={`calc((100vh - 300px) / ${rows(count)})`}
              maxW="200px"
              maxH="80px"
              onClick={() => onClick(v)}
              p="0"
              colorScheme="whiteAlpha"
              _active={{
                backgroundColor: v === "moom" ? "green.200" : "red.400",
              }}
            >
              <Image src={`${v}.png`} w="100%" h="100%" objectFit="contain" />
            </Button>
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
