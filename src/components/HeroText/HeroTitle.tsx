import { Button, Container, Group, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
<h1 className={classes.title}>
  Welcome To{' '}
  <Text component="span" inherit style={{ color: '#2e2e2e', fontWeight: 700 }}>
    Toby Bell's
  </Text>{' '}
  Personal Website!
</h1>

        <Text className={classes.description} color="dimmed">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text>

        <Group className={classes.controls}>

          <Button
            component="a"
            href="https://github.com/TobyB1702"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}