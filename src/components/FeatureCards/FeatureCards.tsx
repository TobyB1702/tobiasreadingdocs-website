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
      'This fun project generates daily facts using a large language model (LLM) and shares via email to subscribers, its currently got 15 users! It was a warm up project to get use to full cloud process',
    icon: IconMessageCog,
    color: '#2e2e2e',
  },
  {
    title: 'MCP News Updates',
    description:
      'A more advanced project that uses docker, azure function app and a mcp server connected to a free news API. Which gives daily news updates on AI and Visa news!',
    icon: IconNews,
    color: '#2e2e2e',
  },
  {
    title: 'Personal Assistant, Yobi',
    description:
      'My personal favourite project, Yobi is a personal chatbot that give information about myself, it also uses MCP and can access my data and the news api aswell.',
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