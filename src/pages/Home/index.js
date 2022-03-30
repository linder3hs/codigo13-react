import { Container, Grid } from "@mui/material";
import Chart from "react-apexcharts";

const Home = () => {
  const chartData = {
    series: [
      {
        name: "Tech Development",
        data: [10, 30, 20, 14, 66, 32, 16],
      },
    ],
    options: {
      xaxis: {
        categories: ["JS", "CSS", "HTML", "Firebase", "NodeJS", "React", "Vue"],
      },
      fill: {
        colors: ["#fffaaa"],
      },
      grid: {
        row: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
        column: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
      },
      chart: {
        zoom: {
          enabled: true,
          type: "x",
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <Grid>
        <h1>Home</h1>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={500}
        />
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={500}
        />
        <Chart
          options={{
            labels: ["A", "B", "C", "D", "E"],
            fill: {
              colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
            },
            dataLabels: {
              style: {
                colors: ["#addccc", "#f01", "#F44336", "#E91E63", "#ccaadd"],
              },
            },
          }}
          series={[44, 55, 41, 17, 15]}
          type="donut"
          width={500}
        />
      </Grid>
    </Container>
  );
};

export default Home;

// this.state = {
//   series: [
//     {
//       name: "Inflation",
//       data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
//     },
//   ],
//   options: {
//     chart: {
//       height: 350,
//       type: "bar",
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         dataLabels: {
//           position: "top", // top, center, bottom
//         },
//       },
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: "12px",
//         colors: ["#304758"],
//       },
//     },

//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       position: "top",
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       crosshairs: {
//         fill: {
//           type: "gradient",
//           gradient: {
//             colorFrom: "#D8E3F0",
//             colorTo: "#BED1E6",
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5,
//           },
//         },
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     yaxis: {
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         formatter: function (val) {
//           return val + "%";
//         },
//       },
//     },
//     title: {
//       text: "Monthly Inflation in Argentina, 2002",
//       floating: true,
//       offsetY: 330,
//       align: "center",
//       style: {
//         color: "#444",
//       },
//     },
//   },
// };
