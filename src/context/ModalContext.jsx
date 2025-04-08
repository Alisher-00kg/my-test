import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ onOpen: openModal, onClose: closeModal, open }}
    >
      {children}
    </ModalContext.Provider>
  );
};
