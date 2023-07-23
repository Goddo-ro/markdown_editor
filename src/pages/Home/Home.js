import React, { useEffect, useState } from 'react';
import { useCurDoc } from "../../hooks/useCurDoc";
import { Box, Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import Editor from "../../components/Editor";
import "./Home.css";
import Preview from "../../components/Preview/Preview";
import { BiSave } from "react-icons/bi";
import MarkdownService from "../../services/MarkdownService";
import { useDispatch } from "react-redux";
import { setMarkdown } from "../../store/slices/markdownSlice";
import { fetchMarkdowns } from "../../store/slices/markdownsSlice";

const Home = () => {
  const [isSaved, setSaved] = useState(true);
  const [curTitle, setCurTitle] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const {id, title, body, userId} = useCurDoc();

  useEffect(() => {
    setCurTitle(title);
    setValue(body);
  }, [title, body]);

  useEffect(() => {
    if (curTitle !== title || value !== body) {
      setSaved(false);
    } else {
      setSaved(true);
    }
  }, [curTitle, value]);

  const refetchMarkdowns = async () => {
    await fetchMarkdowns(userId, dispatch);
  }

  const handleSave = () => {
    MarkdownService.update(id, curTitle, value)
      .then(() => {
        dispatch(setMarkdown({
          id: id,
          title: curTitle,
          body: value,
          userId: userId,
        }));

        setSaved(true);
        refetchMarkdowns();
      });
  }

  return (
    <Box className="home-container">
      <Flex p={2} alignItems="center">
        <input id="markdown-title" value={curTitle}
               onChange={(e) => setCurTitle(e.target.value)}
        />
        <Spacer/>
        {
          !isSaved && <BiSave onClick={handleSave} title="Save" id="save-btn"/>
        }
      </Flex>
      <Grid className="home-container--grid" w="100%" h="100%" templateColumns="repeat(2, 1fr)">
        <Editor value={value} setValue={setValue}/>
        <Preview value={value}/>
      </Grid>
    </Box>
  );
};

export default Home;