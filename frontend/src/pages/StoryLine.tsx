import React from "react";
import "./StoryLine.css";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from '@mui/material/Stack';

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
  { value: 447, label: "Total Debt" },
  { value: 76, label: "Remaining Debt" },
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
    <Card withBorder p="sm" radius="md" className="card">
      <div className="inner">
        <div>
          <Text fz="xl" className="label">
            Debt X
          </Text>
          <div></div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className="ring">
          <RingProgress
            roundCaps
            thickness={4}
            size={100}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className="label">
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Payed off
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

export function AssetsCard() {
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
    <Card withBorder p="sm" radius="md" className="card">
      <div className="inner">
        <div>
          <Text fz="sm" className="label">
            House
          </Text>
          <div></div>
          <Group mt="xs">{items}</Group>
        </div>

        <div className="ring">
          <RingProgress
            roundCaps
            thickness={4}
            size={100}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className="label">
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Payed off
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}

function MultipleExpenses() {
  const numberOfExpenses = 20;

  return (
    <div className="expensesMainContainer">
      {Array.from({ length: numberOfExpenses }).map((_, index) => (
        <div className="specificExpence"> dede </div>
      ))}
    </div>
  );
}

function MultipleAssets() {
  const numberOfAssets = 20;

  return (
    <div className="expensesMainContainer">
      {Array.from({ length: numberOfAssets }).map((_, index) => (
        <div className="specificExpence"> dede </div>
      ))}
    </div>
  );
}

function MarkOptimization() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          //showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    />
  );
}


function Contact() {
  return (
    <div className="main">
      <div className="mainTitle"></div>
      <div className="accounts">
        <StatsGrid />
      </div>
      <div className="otherInfo">
        <div className="graphAndStuff">
          <div className="graph">
            <MarkOptimization />
          </div>
          <div className="lowerChartData">
            <div className="assets">
              <div className="expensesTitle">Assets</div>
              <MultipleExpenses />
            </div>
            <div className="Expenses">
              <div className="expensesTitle">Expenses</div>
              <MultipleExpenses/>
            </div>
          </div>
        </div>
        <div className="debts">
          <div className="debtsTitle">Your Debts</div>
          <MultipleStatsRingCards />
        </div>
      </div>
    </div>
  );
}

export default Contact;
