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
import { getDocs, collection} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Sidebar = ({ isOpen, onClose }) => {
  const [markdowns, setMarkdowns] = useState([]);

  const { email } = useAuth();

  const markdownsCollectionRef = collection(db, "docs");

  const fetchMarkdowns = async () => {
    try {
      const data = await getDocs(markdownsCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setMarkdowns(filteredData);
    } catch (err) {
      console.log(err);
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
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar;