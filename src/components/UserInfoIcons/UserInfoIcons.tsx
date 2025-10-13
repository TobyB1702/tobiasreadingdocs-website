import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import classes from './UserInfoIcons.module.css';
import me from '../../assets/me.png';

export function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar
          src={me}
          size={94}
          radius="md"
        />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            Toby James Bell
          </Text>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Data Scientist
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              toby.bell1702@hotmail.co.uk
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}