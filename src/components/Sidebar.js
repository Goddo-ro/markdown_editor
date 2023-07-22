import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent, Flex, Text, Spacer
} from '@chakra-ui/react'
import { useAuth } from "../hooks/useAuth";
import { AiOutlineFileAdd } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import MarkdownList from "./MarkdownList";
import MarkdownService from "../services/MarkdownService";

const Sidebar = ({ isOpen, onClose }) => {
  const [markdowns, setMarkdowns] = useState([]);

  const { email, id } = useAuth();

  const fetchMarkdowns = async () => {
    try {
      const data = await MarkdownService.getAll();
      const filteredData = data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id })).filter(doc => doc.userId === id);
      setMarkdowns(filteredData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchMarkdowns();
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader borderBottom="2px solid" borderColor="blackAlpha.600">{email}</DrawerHeader>
          <DrawerBody backgroundColor="blackAlpha.200" padding="0">
            <Flex alignItems="center" borderBottom="1px solid" borderColor="blackAlpha.600" paddingX="4" paddingY="1">
              <Text>
                Markdowns:
              </Text>
              <Spacer/>
              <AiOutlineFileAdd cursor="pointer"/>
            </Flex>
            <MarkdownList markdowns={markdowns} fetchMarkdowns={fetchMarkdowns}/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar;