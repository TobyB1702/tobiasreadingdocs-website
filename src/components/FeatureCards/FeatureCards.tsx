import { IconRobot, IconMessageCog, IconNews } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'LLM Daily Facts',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconMessageCog,
    color: '#2e2e2e',
  },
  {
    title: 'MCP News Updates',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconNews,
    color: '#2e2e2e',
  },
  {
    title: 'Personal Assistant, Yobi',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconRobot,
    color: '#2e2e2e',
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={feature.color} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" >

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Some Personal Projects Spotlight!
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        These projects are uses the latest technologies and best practices, hosted in azure and have a user base! Check out below!
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}