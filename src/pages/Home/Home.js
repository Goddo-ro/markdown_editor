import React, { useEffect, useState } from 'react';
import { useCurDoc } from "../../hooks/useCurDoc";
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import Editor from "../../components/Editor";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");

  const {title, body} = useCurDoc();

  useEffect(() => {
    setValue(body);
  }, [body]);

  return (
    <Box className="home-container">
      <Grid className="home-container--grid" w="100%" h="100%" templateColumns="repeat(2, 1fr)">
        <Editor value={value} setValue={setValue}/>
        <p>{body}</p>
      </Grid>
    </Box>
  );
};

export default Home;