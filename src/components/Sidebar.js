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
import { fetchMarkdowns } from "../store/slices/markdownsSlice";
import { useDispatch } from "react-redux";

const Sidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const { email, id } = useAuth();

  useEffect(() => {
    fetchMarkdowns(id, dispatch);
  }, [email]);

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
            <MarkdownList/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar;