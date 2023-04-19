import React from "react";
import { Row, Col, Card } from "antd";

const DisplayData = ({ weatherData }) => {
  const currentDate = new Date();
  return (
    <>
      <Row>
        <Col span={8}>
          <Row style={{ margin: "50px" }}>
            <Col span={9}>
              <img
                src={`http://openweathermap.org/img/wn/${
                  weatherData?.data &&
                  weatherData?.data[0]?.weather?.icon.substring(1)
                }@2x.png`}
                alt=""
              />
            </Col>
            {weatherData?.data && weatherData?.data?.length && (
              <Col span={15}>
                <p>
                  City: <strong>{weatherData?.city_name}</strong>{" "}
                </p>
                <p>TimeZone: {weatherData?.timezone}</p>
                <p>Weather: {weatherData?.data[0]?.weather?.description}</p>
                <p>
                  Wind Speed: {weatherData?.data[0]?.wind_spd} {"km/hr"}
                </p>
                <p>Date: {currentDate.toLocaleString()}</p>
              </Col>
            )}
          </Row>
        </Col>

        <Col span={16}>
          {weatherData?.data &&
            weatherData?.data?.length &&
            weatherData.data.map((currentData, index) => {
              if (index !== 0) {
                return (
                  <div
                    style={{
                      margin: 10,
                      padding: 10,
                    }}
                    key={currentData?.datetime}
                  >
                    <Card style={{ textAlign: "center" }}>
                      <img
                        src={`http://openweathermap.org/img/wn/${currentData?.weather?.icon.substring(
                          1
                        )}@2x.png`}
                        alt=""
                      />
                      <p>Date: {currentData?.datetime}</p>
                      <p>Weather: {currentData?.weather?.description}</p>
                      <p>
                        Wind Speed: {currentData?.wind_spd} {"km/hr"}
                      </p>
                      <p></p>
                      <p></p>
                    </Card>
                  </div>
                );
              }
            })}
        </Col>
      </Row>
    </>
  );
};

export default DisplayData;
