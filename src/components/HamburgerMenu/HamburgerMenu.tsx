import React from 'react';

import HamburgerButton from './HamburgerButton';
import Drawer from './Drawer';
import BackDrop from '../BackDrop/BackDrop';

interface Props {
  opened: boolean;
  clickHandler: () => void;
  children: React.ReactNode;
}

function HamburgerMenu({ opened, clickHandler, children }: Props) {
  return (
    <div>
      <HamburgerButton opened={opened} onClick={clickHandler} />
      <Drawer opened={opened}>{children}</Drawer>
      <BackDrop opened={opened} onClick={clickHandler} />
    </div>
  );
}

export default HamburgerMenu;
