import AppRouter from "./components/AppRouter";
import {Box, Container} from "@chakra-ui/react";
import Header from "./components/UI/Header";

function App() {
  return (
    <Container maxW="1920px" minH="100vh" p={0} className="App">
      <Box>
        <Header/>
        <AppRouter/>
      </Box>
    </Container>
  );
}

export default App;
