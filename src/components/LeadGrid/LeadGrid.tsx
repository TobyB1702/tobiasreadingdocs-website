import { Container, SimpleGrid, ScrollArea, Box, Image, Text } from '@mantine/core';
import me from '../../assets/me.png';

export function LeadGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Left: Image */}
        <Box>
<Image
  src={me}
  alt="Profile"
  radius={40} // Softer corners, adjust as needed
  h={400}
  w={350}
  fit="contain"
  style={{ background: '#fff' }}
/>
        </Box>
        {/* Right: Scroll Area */}
        <ScrollArea h={400}>
          <Box p="md" w={600} style={{ maxWidth: '100%' }}>
            <Text>
              Hello, my name is Toby. I love coding and building projects. I have a passion for learning new technologies and applying them to solve real‑world problems. I'm always looking for ways to improve my skills and stay up to date with the latest trends in the tech industry.
              <br /><br />
              I love AI and entered the industry straight after university by moving from a software engineer role to an AI engineer position in my first job.
              <br /><br />
              In my free time I enjoy training for CrossFit and Hyrox and have competed in several events. I'm also a big fan of A Song of Ice and Fire lore.
              <br /><br />
              Finally, it's my personal dream to move to and live in New York. I visited for the first time this February and fell in love with the city.
            </Text>
          </Box>
        </ScrollArea>
      </SimpleGrid>
    </Container>
  );
}