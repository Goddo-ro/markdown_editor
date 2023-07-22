import React from 'react';
import { Flex, Spacer } from "@chakra-ui/react";
import { BiTrashAlt } from "react-icons/bi";
import "./MarkdownListItem.css";
import MarkdownService from "../../services/MarkdownService";

const MarkdownListItem = ({ markdown, fetchMarkdowns }) => {
  const deleteMarkdown = async () => {
    const response = await MarkdownService.delete(markdown.id);
    fetchMarkdowns();
  }

  const handleClick = e => {
    if (e.target.tagName === "path" || e.target.tagName === "svg") {
      deleteMarkdown();
      return;
    }
    console.log("Not deleted!")
  }

  return (
    <Flex alignItems="center" px={4} className="markdownListItem" onClick={handleClick}>
      {markdown.title}
      <Spacer/>
      <BiTrashAlt className="delete-btn"/>
    </Flex>
  );
};

export default MarkdownListItem;