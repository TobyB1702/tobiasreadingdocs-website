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
              Hello my name is Toby and I love coding and building projects. I have a passion for learning new technologies and applying them to solve real-world problems. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends in the tech industry. In my free time, I enjoy contributing to open-source projects, attending tech meetups, and exploring new programming languages and frameworks.
              <br /><br />
              More about me: I enjoy working on challenging problems and collaborating with others. My favorite languages are TypeScript, Python, and Go. I also love cloud technologies and DevOps!
              Hello my name is Toby and I love coding and building projects. I have a passion for learning new technologies and applying them to solve real-world problems. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends in the tech industry. In my free time, I enjoy contributing to open-source projects, attending tech meetups, and exploring new programming languages and frameworks.
              <br /><br />
              More about me: I enjoy working on challenging problems and collaborating with others. My favorite languages are TypeScript, Python, and Go. I also love cloud technologies and DevOps!
            </Text>
          </Box>
        </ScrollArea>
      </SimpleGrid>
    </Container>
  );
}