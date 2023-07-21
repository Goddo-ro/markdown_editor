import AppRouter from "./components/AppRouter";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const { isAuth } = useAuth();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <Container maxW="1920px" minH="100vh" p={0} className="App">
      <Box>
        <Header onShowSidebar={toggleSidebar}/>
        {
          isAuth &&
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
        }
        <AppRouter/>
      </Box>
    </Container>
  );
}

export default App;
