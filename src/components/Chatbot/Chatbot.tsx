import { 
  IconArrowRight, 
  IconRobot 
} from '@tabler/icons-react';
import { 
  ActionIcon, 
  TextInput, 
  TextInputProps, 
  useMantineTheme, 
  Textarea,  
  Title, 
  Paper
} from '@mantine/core';
import classes from './Chatbot.module.css';
import { useState, useRef } from 'react';
import { Loader } from '@mantine/core';

// ...existing code...
export function Chatbot(props: TextInputProps) {
  const theme = useMantineTheme();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const eventSourceRef = useRef<EventSource | null>(null);

  const onWaiting = () => {
    return <Loader size="xs" color={theme.colors.dark[0]} />;
  }

  const sendYobiRequest = async () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }
    setResponse('');
    setLoading(true); // Set loading to true
    const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL);

    const encodedQuery = encodeURIComponent(input.trim());
    const url = `${BACKEND_URL}/chat/chat_with_yobi?query=${encodedQuery}`;

    const es = new EventSource(url);
    eventSourceRef.current = es;

    es.addEventListener('start', () => {
      console.log('Yobi started responding...');
    });

    es.addEventListener('token', (e) => {
      try {
        const data = JSON.parse(e.data);
        setResponse((prev) => prev + (data.delta || ''));
      } catch {
        console.warn('Malformed token event:', e.data);
      }
    });

    es.addEventListener('end', (e) => {
      console.log('Yobi finished responding.');
      es.close();
      eventSourceRef.current = null;
      setLoading(false); // Set loading to false
    });

    es.onerror = (err) => {
      console.error('Stream error:', err);
      es.close();
      eventSourceRef.current = null;
      setLoading(false); // Set loading to false
    };
  };

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
          margin: '0 auto',
        }}
      >
        <Title order={2} className={classes.title} ta="center" mt="sm" mb={24}>
          Meet Yobi
        </Title>
        {loading && ( // Show loader when loading
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            {onWaiting()}
          </div>
        )}
        <Textarea
          placeholder="Yobi’s answer will appear here..."
          minRows={8}
          autosize={true}
          readOnly
          mb="md"
          value={response}
          style={{ marginBottom: 32, maxHeight: 200, overflowY: 'auto' }}
        />
        <TextInput
          id="yobi-textbox"
          radius="xl"
          size="md"
          placeholder="Ask Yobi anything!"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendYobiRequest();
            }
          }}
          rightSectionWidth={42}
          leftSection={<IconRobot size={18} stroke={1.5} />}
          rightSection={
            <ActionIcon size={32} radius="xl" color="dark" variant="filled" onClick={sendYobiRequest}>
              <IconArrowRight size={18} stroke={1.5} />
            </ActionIcon>
          }
          {...props}
        />
      </Paper>
    </div>
  );
}