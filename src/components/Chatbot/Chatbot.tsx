import { 
  IconArrowRight, 
  IconRobot 
} from '@tabler/icons-react';
import { 
  ActionIcon, 
  TextInput, 
  TextInputProps, 
  useMantineTheme, 
  Container, 
  SimpleGrid, 
  ScrollArea, 
  Box, 
  Textarea,  
  Title, 
  Paper
} from '@mantine/core';
import classes from './Chatbot.module.css';
export function Chatbot(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
      <Paper
        shadow="md"
        radius="lg"
        p="xl"
        style={{
          maxWidth: 500,
          width: '100%',
          background: '#fff',
          margin: '0 auto', // Ensure Paper is centered
        }}
      >
        <Title order={2} className={classes.title} ta="center" mt="sm" mb={24}>
          Meet Yobi
        </Title>
        <Textarea
          placeholder="Yobi answer incoming!"
          minRows={8}
          autosize
          readOnly
          mb="md"
          style={{ marginBottom: 32 }} // Increased spacing below the title
        />
        <TextInput
          radius="xl"
          size="md"
          placeholder="Ask Yobi anything!"
          rightSectionWidth={42}
          leftSection={<IconRobot size={18} stroke={1.5} />}
          rightSection={
            <ActionIcon size={32} radius="xl" color="dark" variant="filled">
              <IconArrowRight size={18} stroke={1.5} />
            </ActionIcon>
          }
          {...props}
        />
      </Paper>
    </div>
  );
}