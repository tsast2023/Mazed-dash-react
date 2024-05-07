import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const Dashboard = () => {
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const candleChartRef = useRef(null);
  const [isChartsInitialized, setIsChartsInitialized] = useState(false);

  useEffect(() => {
    if (!isChartsInitialized && barChartRef.current && lineChartRef.current && candleChartRef.current) {
      const optionsBar = {
        series: [{
          name: "Installation",
          data: [112000]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: ['Nombre d\'installation'],
        }
      };

      const optionsLine = {
        series: [{
          name: "Désinstallations",
          data: [183000]
        }],
        chart: {
          type: 'line',
          height: 350
        },
        xaxis: {
          categories: ['Nombre de désinstallations'],
        }
      };

      const optionsCandle = {
        series: [{
          name: "Inscriptions",
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            }
          ]
        }],
        chart: {
          type: 'candlestick',
          height: 350
        },
        xaxis: {
          categories: ['Nombre d\'inscriptions'],
        }
      };

      // Creating chart instances
      new ApexCharts(barChartRef.current, optionsBar).render();
      new ApexCharts(lineChartRef.current, optionsLine).render();
      new ApexCharts(candleChartRef.current, optionsCandle).render();

      setIsChartsInitialized(true);  // Set the flag to true after initializing charts
    }
  }, [barChartRef.current, lineChartRef.current, candleChartRef.current]);

  return (
      <div id="main">
        <div className="page-content">
          <section className="row">
          <div className='card-stats'>
            <div className="col-4">
              <div className="card">
                <div className="card-body px-4 py-4-5">
                  <div className="row">
                    <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                      <div className="stats-icon purple mb-2">
                        <i className="fa-solid fa-download "></i>
                      </div>
                    </div>
                    <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                      <h6 className="text-muted stats-text">Nombre d'installation</h6>
                      <h6 className="stats-number mb-0">112.000</h6>
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
                      <h6 className="text-muted stats-text">Nombre de désinstallations</h6>
                      <h6 className="stats-number mb-0">183.000</h6>
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
                      <h6 className="text-muted stats-text">Nombre d'inscriptions</h6>
                      <h6 className="stats-number mb-0">80.000</h6>
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
                  <div className="card-body chart">
                    <div ref={candleChartRef}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Dashboard;
