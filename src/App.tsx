import { useEffect, useMemo, useState } from "react";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";

const r = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

function App() {
  const [count, setCount] = useState(2);
  const [rand, setRand] = useState(r(0, 4));
  const moons = useMemo(
    () =>
      new Array<string>(count * count)
        .fill("")
        .map((_, i) => (i === rand ? "MOOM" : "MOON")),
    [count]
  );

  useEffect(() => {
    setRand(r(0, count * count));
  }, [count]);

  const onClick = (v: string) => {
    if (v == "MOOM") setCount((count) => count + 1);
  };

  return (
    <Center h="100vh">
      <SimpleGrid columns={count} spacing={2} w="100vw" p="32px">
        {moons.map((v) => (
          <Button h="64px" onClick={() => onClick(v)}>
            {v}
          </Button>
        ))}
      </SimpleGrid>
    </Center>
  );
}

export default App;
