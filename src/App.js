import { useState } from "react";
import { Heading, Button, Box, VStack, Input } from "@chakra-ui/react";
import { sort, countDoubleNumber, removeDuplicates, flipDominoes, removeByTotalValue } from "./utils";

// Default dominoes data
const defaultDominoes = [
  [6, 1], 
  [4, 3], 
  [5, 1], 
  [3, 4], 
  [1, 1], 
  [3, 4], 
  [1, 2]
];

export default function App() {
  const [dominoes, setDominoes] = useState(defaultDominoes);
  const [doublesCount, setDoublesCount] = useState(0);
  const [totalValueToRemove, setTotalValueToRemove] = useState("");

  const handleSort = (order) => {
    const sortedDominoes = sort(dominoes, order);
    setDominoes(sortedDominoes);
  };

  const handleCountDoubles = () => {
    const count = countDoubleNumber(dominoes);
    setDoublesCount(count);
  };

  const handleRemoveDuplicates = () => {
    const uniqueDominoes = removeDuplicates(dominoes);
    setDominoes(uniqueDominoes);
  };

  const handleFlipDominoes = () => {
    const flippedDominoes = flipDominoes(dominoes);
    setDominoes(flippedDominoes);
  };

  const handleRemoveByTotalValue = () => {
    const totalValue = parseInt(totalValueToRemove, 10);
    if (!isNaN(totalValue)) {
      const updatedDominoes = removeByTotalValue(dominoes, totalValue);
      setDominoes(updatedDominoes);
    }
  };

  // Reset the dominoes to default state
  const handleReset = () => {
    setDominoes(defaultDominoes);
    setDoublesCount(0);  // Reset the doubles count as well
    setTotalValueToRemove("");  // Clear the input field
  };

  return (
    <div>
      <Heading>Hello Purwadhika</Heading>
      <Button onClick={() => handleSort("asc")} margin="5px">
        Sort Ascending
      </Button>
      <Button onClick={() => handleSort("desc")} margin="5px">
        Sort Descending
      </Button>
      <Button onClick={handleRemoveDuplicates} margin="5px">
        Remove Duplicates
      </Button>
      <Button onClick={handleFlipDominoes} margin="5px">
        Flip Dominoes
      </Button>
      <Button onClick={handleCountDoubles} margin="5px">
        Count Doubles
      </Button>
      <br />
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {dominoes.map((domino, index) => (
          <Box
            key={index}
            border="1px solid black"
            borderRadius="8px"
            padding="10px"
            margin="5px"
            width="40px"
            textAlign="center"
            backgroundColor="lightgray"
          >
            <VStack spacing="1px">
              <span>{domino[0]}</span>
              <hr style={{ width: "100%", margin: "4px 0", borderColor: "black"}} />
              <span>{domino[1]}</span>
            </VStack>
          </Box>
        ))}
      </div>
      <br />
      <p>Doubles Count: {doublesCount}</p>
      <br />
      <Input 
        placeholder="Enter total value to remove" 
        value={totalValueToRemove} 
        onChange={(e) => setTotalValueToRemove(e.target.value)} 
        width="200px"
        margin="5px"
      />
      <Button onClick={handleRemoveByTotalValue} margin="5px">
        Remove by Total Value
      </Button>

      <Button onClick={handleReset} margin="5px" colorScheme="red">
        Reset to Default
      </Button>
    </div>
  );
}
