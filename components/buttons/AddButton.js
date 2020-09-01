import React, { useState } from "react";

import { Button } from "react-native-paper";
// Modal

// import TripModal from "../modals/TripModal";
// Styles
// import { AddButtonStyle } from "./styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

/**
 * Not sure what's happening here
 * but remove any code you wont use
 * fix any code you will use and use it
 * try not to leave commented code like this in master
 */

  return (
    <>
      {/* <AddButtonStyle> */}
      <Button>
        <ion-icon name="add-circle-outline"></ion-icon>

        {/* onClick={() => setIsOpen(true)} */}
        <Text>add</Text>
        {/* </AddButtonStyle> */}
      </Button>

      {/* <TripModal isOpen={isOpen} closeModal={closeModal} /> */}
    </>
  );
};

export default AddButton;
