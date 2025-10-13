import { useState } from 'react';
import {
  IconHome2,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimalColored.module.css';
import myLogo from '../../assets/logo.png';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} color="#1f1f1f" />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
];

export function NavbarMinimalColored() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
        <img src={myLogo} alt="Logo" style={{ width: 90, height: 90, borderRadius: '16px' }} />
        <Stack justify="center" gap={0} style={{ marginTop: 24 }}>
          {links}
        </Stack>
      </div>
      {/* ...other navbar sections if needed... */}
    </nav>
  );
}