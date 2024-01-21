import React from "react";
import "./StoryLine.css";
import {
  Group,
  Paper,
  SimpleGrid,
  Text,
  Card,
  RingProgress,
  useMantineTheme,
} from "@mantine/core";

import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

const data = [
  { title: "TFSA", value: "13,456", diff: 34 },
  { title: "RRSP", value: "4,145", diff: -13 },
  { title: "FHSA", value: "745", diff: 18 },
  { title: "Non-Registered", value: "188", diff: -30 },
];

function StatsGrid() {
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" color="dimmed" className="title">
            {stat.title}
          </Text>
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className="value">{stat.value}</Text>
          <Text color={stat.diff > 0 ? "teal" : "red"} className="diff">
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text className="compared" color="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });

  return (
    <div className="">
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
}

const stats = [
  { value: 447, label: "Remaining" },
  { value: 76, label: "In progress" },
];

export function StatsRingCard() {
  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className="label">{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className="card">
      <div className="inner">
        <div>
          <Text fz="xl" className="label">
            Project tasks
          </Text>
          <div>
            <Text className="label" mt={30}>
              1887
            </Text>
            <Text fz="xs" c="dimmed">
              Completed
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className="ring">
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className="label">
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}

function MultipleStatsRingCards() {
  const numberOfCards = 5; 

  return (
    <div>
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <StatsRingCard key={index} />
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="main">
      <div className="accounts">
        <StatsGrid />
      </div>
      <div className="otherInfo">
        <div className="graphAndStuff"></div>
        <div className="debts">
          <MultipleStatsRingCards />
        </div>
      </div>
    </div>
  );
}

export default Contact;
