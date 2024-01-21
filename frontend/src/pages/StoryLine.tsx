import React from "react";
import "./StoryLine.css";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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

function StatsGrid(props:any) {
  const stats: any = [];

  Object.keys(props.response.investments).forEach(function(key, index) {
    const startPrice = props.response.years[props.range[0]]['investments'][key]
    const endPrice = props.response.years[props.range[1]]['investments'][key]
    const diff = (endPrice - startPrice)

    const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;
    stats.push(
      <Paper withBorder p="lg" style={{width:250}} radius="md" key={key}>
        <Group justify="space-between">
          <Text size="sm" color="dimmed" className="title">
            {key}
          </Text>
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className="value">{Math.round(endPrice * 100) / 100}</Text>
          <Text color={diff > 0 ? "teal" : diff=== 0? "gray": "red"} className="diff">
            <span> + {Math.round(diff * 100) / 100}</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text className="compared" color="dimmed" mt={7}>
          Compared to initial year
        </Text>
      </Paper>
    )
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

export function StatsRingCard(props:any) {
  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;

  return (
    <Card withBorder p="sm" radius="md" className="card">
      <div className="inner">
        <div>
          <Text fz="xl" className="label">
            Debt {props.id}
          </Text>
          <Text>
            {props.amount}
          </Text>
        </div>

        <div className="ring">
          <RingProgress
            roundCaps
            thickness={4}
            size={100}
            sections={[
              { value: props.type==="mortgage" ? (props.year / props.years) * 100 : (props.amount/props.response.debts.find((obj:any) => obj.id === props.id).amount) *100 , color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className="label">
                  {(props.type==="mortgage" ? (props.year / props.years) * 100 : (props.amount/props.response.debts.find((obj:any) => obj.id === props.id).amount) *100).toFixed(0)}%
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

function MultipleStatsRingCards(props:any) {
  const numberOfCards = 5;

  return (
    <div className="debts">
      {props.response.years[props.range[1]]['debts'].map((_:any, index:number) => (
        <StatsRingCard id= {_.id} amount={_.amount} type={_.type} years={_.years} year={props.range[1]} response={props.response}/>
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

function MultipleExpenses(props:any) {
  const numberOfExpenses = 20;
  const expenses:any =[]
  Object.keys(props.response.years[props.range[1]]['expenses']).forEach((key, value) =>  expenses.push(
    <><section>
    <div> {key} </div>
    <span>..............................................................................................................................................................</span>
    <div>  {Math.round(props.response.years[props.range[1]]['expenses'][key]*100)/100} </div>
  </section></>
  ))

  return (
    <div className="expensesMainContainer">
      {expenses}
    </div>
  );
}

function MultipleAssets(props:any) {
  const numberOfAssets = 20;

  return (
    <div className="expensesMainContainer">
      {props.response.years[props.range[1]]['assets'].map((_:any, index:number) => (
        <><section>
        <div> {_.name} </div>
        <span>..............................................................................................................................................................</span>
        <div>  {Math.round(_.value*100)/100} </div>
      </section>
      </>
      ))}
    </div>
  );
}

function MarkOptimization(props:any) {
  var xValues=[]
  var yValues=[]
  var TFSAValues =[]
  var RRSPValues=[]
  var OPENValues=[]
  var FSHAValues = []
  for (var i = props.range[0]; i <= props.range[1]; i++) {
      xValues.push(i);
      var total=0
      for (var key in props.response.years[i].investments){
        if (key === "TFSA"){
          TFSAValues.push(props.response.years[i].investments[key])
        }
        if (key === "RRSP"){
          RRSPValues.push(props.response.years[i].investments[key])
        }
        if (key === "OPEN"){
          OPENValues.push(props.response.years[i].investments[key])
        }
        if (key === "FSHA"){
          FSHAValues.push(props.response.years[i].investments[key])
        }
        total+=props.response.years[i].investments[key]
      }
      yValues.push(total)
  }
  return (
    <LineChart
      xAxis={[{ data: xValues }]}
      series={[
        {
          data: yValues,
          label: 'TOTAL', area: true,
           color: 'rgb(144,238,144)',
           showMark: false
          //showMark: ({ index }) => index % 2 === 0,
        },
        {
          data: OPENValues,
          label: 'OPEN', area: true, showMark: false
          //showMark: ({ index }) => index % 2 === 0,
        },
        {
          data: FSHAValues,
          label: 'FSHA', area: true, showMark: false
          //showMark: ({ index }) => index % 2 === 0,
        },
        {
          data: RRSPValues,
          label: 'RRSP', area: true, showMark: false
          //showMark: ({ index }) => index % 2 === 0,
        },
        {
          data: TFSAValues,
          label: 'TFSA', area: true, showMark: false

          //showMark: ({ index }) => index % 2 === 0,
        },
      ]}
    />
  );
}

interface ContactProps{
  response: any,
}


function Contact({response}: ContactProps) {
  const [range, setRange] = React.useState<number[]>([0, response['years'].length-1]);


  const handleChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as number[]);
  };
  
  function valuetext(value: number) {
    return ` Year ${value}`;
  }

  return (
    <div className="main">
      <Box sx={{ width: '100%' , height: 20, paddingRight: 20,paddingLeft: 20}}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={range}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          color="success"
          style={{
            padding: '2px 0px'
          }}
          max={response['years'].length-1}
        />
    </Box>
      <div className="accounts">
        <StatsGrid response = {response} range={range}/>
      </div>
      <div className="otherInfo">
        <div className="graphAndStuff">
          <div className="graph">
            <MarkOptimization response={response} range={range} />
          </div>
          <div className="lowerChartData">
            <div className="assets">
              <div className="expensesTitle">Assets</div>
              <MultipleAssets response={response} range={range}/>
            </div>
            <div className="Expenses">
              <div className="expensesTitle">Expenses</div>
              <MultipleExpenses response={response} range={range}/>
            </div>
          </div>
        </div>
        <div className="debtContainer">
          <div className="debtsTitle">Your Debts</div>
          <MultipleStatsRingCards response={response} range={range} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
