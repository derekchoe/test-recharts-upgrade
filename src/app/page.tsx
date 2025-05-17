"use client";
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
  return (
    <Box className={styles.page}>
      <Flex flexDirection="column">
        <Heading>Header</Heading>
        <Text>Text</Text>
        <LineChart
          width={500}
          height={300}
          data={[
            { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
            { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
            { name: "Page C", uv: 300, pv: 9800, amt: 2290 },
            { name: "Page D", uv: 200, pv: 3908, amt: 2000 },
            { name: "Page E", uv: 278, pv: 4800, amt: 2181 },
            { name: "Page F", uv: 189, pv: 2390, amt: 2500 },
            { name: "Page G", uv: 239, pv: 3490, amt: 2100 },
          ]}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </Flex>
    </Box>
  );
}
