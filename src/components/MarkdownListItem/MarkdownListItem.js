import React from 'react';
import { Flex, Spacer } from "@chakra-ui/react";
import { BiTrashAlt } from "react-icons/bi";
import "./MarkdownListItem.css";
import MarkdownService from "../../services/MarkdownService";
import { useDispatch } from "react-redux";
import { setMarkdown } from "../../store/slices/markdownSlice";
import { useCurDoc } from "../../hooks/useCurDoc";

const MarkdownListItem = ({ markdown, fetchMarkdowns }) => {
  const {id: curDocId} = useCurDoc();

  const dispatch = useDispatch();

  const deleteMarkdown = async () => {
    await MarkdownService.delete(markdown.id);
    fetchMarkdowns();
  }

  const handleClick = e => {
    if (e.target.tagName === "path" || e.target.tagName === "svg") {
      deleteMarkdown();
      return;
    }

    dispatch(setMarkdown({
      ...markdown
    }));
  }

  return (
    <Flex className={"markdownListItem" + (curDocId === markdown.id ? " current" : "")}
          alignItems="center" px={4} onClick={handleClick}>
      {markdown.title}
      <Spacer/>
      <BiTrashAlt className="delete-btn"/>
    </Flex>
  );
};

export default MarkdownListItem;