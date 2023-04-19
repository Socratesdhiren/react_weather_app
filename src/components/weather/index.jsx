import React, { useEffect, useState } from "react";
import { Row, Col, Input, Spin } from "antd";
import { Layout, Select } from "antd";
import axios from "axios";

import DisplayData from "./DispayData";

const baseUrl = `https://api.weatherbit.io/v2.0/forecast/daily?`;

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const daysList = [{ value: 3 }, { value: 7 }, { value: 14 }];

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [days, setDays] = useState(7);
  const [searchValue, setSearchValue] = useState("kathmandu");

  const fetchWeather = (values) => {
    setLoading(true);
    axios
      .get(
        `${baseUrl}city=${searchValue}&days=${days}&key=0d1fa2dfb4594be893429206271d5b31`
      )
      .then((response) => {
        setWeatherData(response?.data);
      })
      .catch((error) => {
        console.log(error?.response);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const onSearch = (value) => {
    value && setSearchValue(value);
  };
  const handleDayChange = (value) => {
    setDays(value);
  };

  useEffect(() => {
    fetchWeather();
  }, [searchValue, days]);

  return (
    <>
      <Header style={{ position: "fixed", top: 0, zIndex: 100, width: "100%" }}>
        <Row style={{ margin: "0 20px" }}>
          <Col span={16} style={{ color: "#fff" }}>
            <div style={{ fontWeight: 500, fontSize: 20 }}>
              Weather Forecast
            </div>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Select
                  onChange={handleDayChange}
                  style={{
                    width: "120px",
                    marginRight: "20px",
                  }}
                  placeholder="Select Days"
                >
                  {daysList.map((day) => (
                    <Option value={day?.value}>{day?.value}</Option>
                  ))}
                </Select>
              </Col>
              <Col style={{ marginTop: "15px" }}>
                <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  defaultValue={searchValue}
                  enterButton
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "20px", marginTop: "50px" }}>
        <Spin spinning={loading}>
          <DisplayData weatherData={weatherData} />
        </Spin>
      </Content>
    </>
  );
};

export default Weather;
