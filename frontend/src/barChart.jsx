import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const BarChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Items Sold on the basis of Price Range for a given month",
        backgroundColor: "rgba(108,229,232, 0.7)", // Updated for transparency
        borderColor: "rgb(108,229,232)", // Border color
        borderWidth: 2,
        hoverBackgroundColor: "rgba(86, 104, 169, 0.7)", // Updated for transparency
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await fetch(
          `https://roxiler-assignment-backend.vercel.app/api/barChart?month=${selectedMonth}`
        );
        const data = await response.json();

        // Assuming data is an array of objects with 'range' and 'count' properties
        const labels = data.map((item) => item.range);
        const counts = data.map((item) => item.count);

        setBarChartData({
          labels,
          datasets: [
            {
              ...barChartData.datasets[0],
              data: counts,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]);

  return (
    <div className="m-5 p-5 bg-white rounded-lg shadow-xl">
      <h2 className="font-bold text-2xl text-center text-primary mb-4">
        Bar Chart Stats - {selectedMonth}
      </h2>
      <div className="flex justify-center">
        {barChartData.labels.length > 0 ? (
          <div className="w-full max-w-4xl h-80"> {/* Increased width and height */}
            <Bar
              data={barChartData}
              options={{
                responsive: true, // Make the chart responsive
                maintainAspectRatio: false, // Disable aspect ratio to fill the height
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                    labels: {
                      color: "#333",
                      font: {
                        size: 14,
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Price Range",
                      font: {
                        size: 16,
                      },
                    },
                    grid: {
                      color: "rgba(0, 0, 0, 0.1)",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Number of Items",
                      font: {
                        size: 16,
                      },
                    },
                    grid: {
                      color: "rgba(0, 0, 0, 0.1)",
                    },
                  },
                },
              }}
            />
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading chart data...</div>
        )}
      </div>
    </div>
  );
};

export default BarChart;
