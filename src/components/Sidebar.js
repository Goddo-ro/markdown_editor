import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent, DrawerFooter, Button, Flex, Text, Spacer, IconButton
} from '@chakra-ui/react'
import { useAuth } from "../hooks/useAuth";
import { AiOutlineFileAdd } from "react-icons/ai";
import React from "react";


const Sidebar = ({ isOpen, onClose }) => {
  const { email } = useAuth();

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
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar;