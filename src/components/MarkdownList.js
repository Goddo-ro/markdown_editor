import React from 'react';
import { Flex } from "@chakra-ui/react";
import MarkdownListItem from "./MarkdownListItem/MarkdownListItem";
import { useCurDoc } from "../hooks/useCurDoc";

const MarkdownList = ({ markdowns, fetchMarkdowns }) => {
  return (
    <Flex flexDirection="column" gap={1} py={2}>
      {
        markdowns.map(markdown =>
          <MarkdownListItem key={markdown.id} markdown={markdown} fetchMarkdowns={fetchMarkdowns}/>
        )
      }
    </Flex>
  );
};

export default MarkdownList;