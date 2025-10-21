import { Button, Container, Group, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
<h1 className={classes.title}>
  <Text component="span" inherit style={{ color: '#2e2e2e', fontWeight: 700 }}>
      human-toby.org
  </Text>{' '}

</h1>

        <Text className={classes.description} color="dimmed">
          Hello and welcome to my personal website! My name is Toby, and I'm a data scientist from the UK. Here, you'll find a few of my personal projects!
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