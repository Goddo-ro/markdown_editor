import React from 'react';
import { Flex } from "@chakra-ui/react";
import MarkdownListItem from "./MarkdownListItem/MarkdownListItem";
import { useMarkdowns } from "../hooks/useMarkdowns";

const MarkdownList = () => {
  const markdowns = useMarkdowns();

  return (
    <Flex flexDirection="column" gap={1} py={2}>
      {
        markdowns.map(markdown =>
          <MarkdownListItem key={markdown.id} markdown={markdown}/>
        )
      }
    </Flex>
  );
};

export default MarkdownList;