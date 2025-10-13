import { IconBrandInstagram, IconBrandTwitter, IconBrandGithubFilled } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from './FooterSocial.module.css';
import myLogo from '../../assets/logo.png';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={myLogo} alt="Logo" style={{ width: 40, height: 40, borderRadius: 12 }} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <a href="https://github.com/TobyB1702" target="_blank" rel="noopener noreferrer">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithubFilled style={{ width: 40, height: 40, borderRadius: 12 }} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}