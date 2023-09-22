import React from "react";

import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import { ChartContainer, BarPlot } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import { Bar } from "react-chartjs-2";

const data = [
  { month: "January", number: Math.floor(Math.random() * 100) },
  { month: "February", number: Math.floor(Math.random() * 100) },
  { month: "March", number: Math.floor(Math.random() * 100) },
  { month: "April", number: Math.floor(Math.random() * 100) },
  { month: "May", number: Math.floor(Math.random() * 100) },
  { month: "June", number: Math.floor(Math.random() * 100) },
  { month: "July", number: Math.floor(Math.random() * 100) },
  { month: "August", number: Math.floor(Math.random() * 100) },
  { month: "September", number: Math.floor(Math.random() * 100) },
  { month: "October", number: Math.floor(Math.random() * 100) },
  { month: "November", number: Math.floor(Math.random() * 100) },
  { month: "December", number: Math.floor(Math.random() * 100) },
];

const enrolledPeople = [
  { id: 0, value: 10, label: "Houses" },
  { id: 1, value: 15, label: "Health" },
  { id: 2, value: 20, label: "Lifestyle" },
  { id: 3, value: 9, label: "finance" },
];

const services = [
  { id: 0, value: 10, label: "In Progress" },
  { id: 1, value: 15, label: "Pending" },
];

export default function Analytics() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom></Typography>
          <Container>
            <Grid container spacing={3}>
              <Grid item sx={{ width: "100%" }}>
                <BarChartCard data={data} />
              </Grid>
              <Divider />
              <Grid item sx={{ width: "100%" }}>
                <Stack
                  direction="row"
                  width="100%"
                  textAlign="center"
                  spacing={2}
                >
                  <Box flexGrow={1}>
                    <PieChartCard
                      data={enrolledPeople}
                      title="Services and Beneficiaries"
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <PieChartCard
                      data={services}
                      title="People enrolled in services"
                    />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
}

const BarChartCard = ({ data }: any) => {
  const months = data.map((item: any) => item.month);
  const numbers = data.map((item: any) => item.number);
  return (
    <>
      <Typography variant="h5" component="div">
        Total beneficiaries over the year
      </Typography>
      <BarChart
        width={1000}
        height={300}
        series={[{ data: numbers, label: "Beneficiaries", id: "pvId" }]}
        xAxis={[{ data: months, scaleType: "band" }]}
      />
    </>
  );
};

const PieChartCard = ({ data, title }: any) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: "gray",
          },
        }}
        height={200}
        width={400}
      />
    </>
  );
};
