import { Box, Flex, Textarea, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import CryptoJs from "crypto-js";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const secretKey = "thisissecretkey";
  const encrypt = () => {
    const cipherText = CryptoJs.AES.encrypt(text, secretKey).toString();
    setResult(cipherText);
  };
  const decrypt = () => {
    const plainText = CryptoJs.AES.decrypt(text, secretKey);
    setResult(plainText.toString(CryptoJs.enc.Utf8));
  };
  return (
    <Flex flexDirection="row" justifyContent="center" p={4}>
      <Box boxSize="2xl" textAlign="center">
        <Text fontSize="3xl">Encrypt Decrypt</Text>
        <Text fontSize="xl">Advanced Encryption Standard (AES)</Text>
        <Textarea
          mt={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Input plaintext or cipherext here"
        />
        <Flex justifyContent="center" mt={8}>
          <Button colorScheme="telegram" onClick={encrypt}>
            Encrypt
          </Button>
          <Button colorScheme="gray" ml="12px" onClick={decrypt}>
            Decrypt
          </Button>
        </Flex>
        <Textarea
          mt={8}
          value={result}
          placeholder="Result"
          onChange={(e) => setResult(e.target.value)}
        />
      </Box>
    </Flex>
  );
}

export default App;
