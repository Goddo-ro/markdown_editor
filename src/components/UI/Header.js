import React from 'react';
import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { ImExit } from "react-icons/im";
import { useAuth } from "../../hooks/useAuth";

const Header = ({ onShowSidebar }) => {
  const { isAuth } = useAuth();

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(removeUser());
  }

  return (
    <Heading bg="cyan.900" py={2} px={4} fontSize="xl" color="blue.50">
      <Flex alignItems='center' gap={4}>
        {
          isAuth &&
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} color="blue.50"/>}
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        }

        <div>
          Markdown Editor
        </div>

        <Spacer/>
        {
          isAuth &&
          <div>
            <div className="icon-container" id="exit-btn-container" onClick={exit}>
              <ImExit id="exit-btn"/>
              <p>Exit</p>
            </div>
          </div>
        }
      </Flex>
    </Heading>
  );
};

export default Header;