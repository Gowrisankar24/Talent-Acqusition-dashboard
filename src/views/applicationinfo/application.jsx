import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, Row, Col, Select } from "antd";
const Application = () => {
  const data = [
    {
      name: "Jan",
      uv: 2000,
      pv: 800,
    },
    {
      name: "Feb",
      uv: 850,
      pv: 3900,
    },
    {
      name: "Mar",
      uv: 1200,
      pv: 4000,

    },
    {
      name: "Apr",
      uv: 2380,
      pv: 3200,
    },
    {
      name: "May",
      uv: 3220,
      pv: 2608,
    },
    {
      name: "Jun",
      uv: 3000,
      pv: 680,
    },
    {
      name: "Jul",
      uv: 400,
      pv: 980,
    },
    {
      name: "Aug",
      uv: 2100,
      pv: 1580,
    },
    {
      name: "Sep",
      uv: 3200,
      pv: 1080,
    },
    {
      name: "Oct",
      uv: 2100,
      pv: 1400,
    },
    {
      name: "Nov",
      uv: 400,
      pv: 3600,
    },
    {
      name: "Dec",
      uv: 1500,
      pv: 500,
    },
  ];

  return (
    <>
      <Card
        className=" shadow-2xl"
        title={
          <>
            <Row>
              <Col xs={24} md={7} className="mt-1">
                <span className="text-base">Application&#39;s Info</span>
              </Col>
              <Col xs={24} md={13} className="flex mt-2">
                <div className="h-4 w-4 rounded-sm bg-[#277ACC]"></div>
                <span className="ml-2 mr-2 text-small font-medium"> Received</span>

                <div className="h-4 w-4 ml-2 rounded-sm bg-[#002B55]"></div>
                <span className="ml-2 text-small"> Processed</span>
              </Col>
              <Col xs={24} md={4} className="float-right">
                <Select
                  defaultValue="Month"
                  style={{
                    width: 90,
                  }}
                  options={[
                    {
                      value: "Year",
                      label: "Year",
                    },
                    {
                      value: "Month",
                      label: "Month",
                    },
                    {
                      value: "Date",
                      label: "Date",
                    }
                  ]}
                  className="font-medium text-small"
                />
              </Col>
            </Row>
          </>
        }
      >
        <ResponsiveContainer width="100%" height={150}>
          <ComposedChart
            width={500}
            height={250}
            data={data}
            margin={{
              top: 0,
              right: 20,
              left: 10,
            }}
          >
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" barSize={30} fill="#277ACC" isAnimationActive={true} animationDuration={800} radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="uv" stroke="#002B55" dot={false} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default Application;
