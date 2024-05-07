import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {
  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  const chartSeries = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }];

  return (
    <div id="main">
      <div className="page-content">
        <section className="row card-stats">
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
        </section>
        <section className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Traffic sur les produits</h4>
              </div>
              <div className="card-body">
                <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Traffic sur les enchères</h4>
              </div>
              <div className="card-body">
                <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Traffic sur les catégories</h4>
              </div>
              <div className="card-body">
                <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
