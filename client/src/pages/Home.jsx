import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const Dashboard = () => {
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const candleChartRef = useRef(null);

  useEffect(() => {
    const options1 = {
      series: [
        {
          name: "Installation",
          data: [112000],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        parentHeightOffset: 0,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: ["Nombre d'installation"],
      },
    };

    const options2 = {
      series: [
        {
          name: "Désinstallations",
          data: [183000],
        },
      ],
      chart: {
        type: "line",
        height: 350,
        parentHeightOffset: 0,
      },
      xaxis: {
        categories: ["Nombre de désinstallations"],
      },
    };

    const options3 = {
      series: [
        {
          name: "Inscriptions",
          data: [80000],
        },
      ],
      chart: {
        type: "candlestick",
        height: 350,
        parentHeightOffset: 0,
      },
      xaxis: {
        categories: ["Nombre d'inscriptions"],
      },
    };

    if (barChartRef.current && lineChartRef.current && candleChartRef.current) {
      const barChart = new ApexCharts(barChartRef.current, options1);
      const lineChart = new ApexCharts(lineChartRef.current, options2);
      const candleChart = new ApexCharts(candleChartRef.current, options3);

      barChart.render();
      lineChart.render();
      candleChart.render();
    }
  }, []);

  return (
    <div className="content-container">
      <div id="main">
        <div className="page-content">
          <section className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <div className="card-body px-4 py-4-5">
                      <div className="row">
                        <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                          <div className="stats-icon purple mb-2">
                            <i className="fa-solid fa-download"></i>
                          </div>
                        </div>
                        <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                          <h6 className="text-muted font-semibold">
                            Nombre d'installation
                          </h6>
                          <h6 className="font-extrabold mb-0">112.000</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div className="card-body px-4 py-4-5">
                      <div className="row">
                        <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                          <div className="stats-icon blue mb-2">
                            <i className="fa-solid fa-trash-can"></i>
                          </div>
                        </div>
                        <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                          <h6 className="text-muted font-semibold">
                            Nombre de désinstallations
                          </h6>
                          <h6 className="font-extrabold mb-0">183.000</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div className="card-body px-4 py-4-5">
                      <div className="row">
                        <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                          <div className="stats-icon green mb-2">
                            <i className="fa-solid fa-user-plus"></i>
                          </div>
                        </div>
                        <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                          <h6 className="text-muted font-semibold">
                            Nombre d'inscriptions
                          </h6>
                          <h6 className="font-extrabold mb-0">80.000</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Traffic sur les produits</h4>
                    </div>
                    <div className="card-body">
                      <div ref={barChartRef}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Traffic sur les enchères</h4>
                    </div>
                    <div className="card-body">
                      <div ref={lineChartRef}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <h4>Traffic sur les catégories</h4>
                    </div>
                    <div className="card-body">
                      <div ref={candleChartRef}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;