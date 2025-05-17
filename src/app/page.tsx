"use client";
import { Chart, useChart } from "@chakra-ui/charts";
import styles from "./page.module.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Home() {
  const chart = useChart({
    data: [
      { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 300, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 200, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 278, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 189, pv: 2390, amt: 2500 },
      { name: "Page G", uv: 239, pv: 3490, amt: 2100 },
    ],
    series: [
      { name: "uv", color: "#8884d8" },
      { name: "pv", color: "#82ca9d" },
    ],
  });

  return (
    <Box className={styles.page}>
      <Flex flexDirection="column">
        <Heading>Header</Heading>
        <Text>Text</Text>

        {JSON.stringify(chart.data)}
        <Chart.Root chart={chart}>
          <LineChart width={500} height={300} data={chart.data}>
            <Line type="monotone" dataKey={chart.key("uv")} stroke="#8884d8" />
            <Line type="monotone" dataKey={chart.key("pv")} stroke="#82ca9d" />
            <CartesianGrid stroke={chart.color("border")} vertical={false} />
            <XAxis dataKey={chart.key("name")} stroke={chart.color("border")} />
            <YAxis dataKey={chart.key("pv")} stroke={chart.color("border")} />
            <Tooltip />
            <Legend />
          </LineChart>
        </Chart.Root>
      </Flex>
    </Box>
  );
}
