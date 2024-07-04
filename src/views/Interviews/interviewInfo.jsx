import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import user1 from "../../assets/User1.png";
import user2 from "../../assets/User2.png";
import Calendar from "../../assets/Calendar.png";
import Clock from "../../assets/Clock.png";
export const InterviewInfo = () => {
  return (
    <>
      <Card
        className="shadow-2xl"
        style={{ height: 400 }}
        title={
          <Row>
            <Col span={24} className="h-6"></Col>
            <Col span={23} className="mb-2">
              <h1 className="tracking-wide text-base font-medium">Today Interviews Meetings Info</h1>
            </Col>
            <Col span={1} className="mb-2">
              <MoreOutlined className="float-right font-bold text-lg" />
            </Col>
          </Row>
        }
      >
        <div className="flex overflow-x-auto p-4 interview-info gap-x-4">
          <div style={{ flex: '0 0 auto', marginRight: '1rem', maxWidth: 600, maxHeight: 700 }}>
            {/* <Card className="grid gap-2 border-2 border-solid border-[#e5e7eb] p-4"> */}
            <Row gutter={(16, 16)} className="flex-row border-[#cfcfd3] border-2 rounded-md">
              <Col span={10} className="flex-col border-r-2 p-3 mt-3 border-[#cfcfd3]">
                <div className="h-20 w-20 rounded-full m-auto">
                  <img src={user1} alt="User 1" />
                </div>
                <h1 className="mt-3 text-center font-sans">John Smith</h1>
                <h1 className="mt-1 text-center font-sans">Senior Python Developer</h1>
                <Row className="mt-3 border-t-2 border-[#cfcfd3]">
                  <Col span={12} className="flex flex-col items-center border-r-2 border-[#cfcfd3] mt-3">
                    <img className="h-5 w-5" src={Calendar} alt="Calendar"></img>
                    <span className="mt-2 text-sm text-[#0A66C2] font-sans">19th Feb 2024</span>
                  </Col>
                  <Col span={12} className=" flex flex-col items-center mt-3">
                    <img className="h-5 w-5" src={Clock} alt="Clock"></img>
                    <span className="mt-2 text-sm text-[#0A66C2] font-sans">10.30 AM</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={14} className="flex-col">
                <Row gutter={[16, 16]} className="!gap-0">
                  <Col span={12} className="p-2 border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0">
                    <span className="table-cell font-sans">1st Level: 7/10</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans" >Interviewer: Stella</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">2nd Level: 6/10</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans" >Interviewer: Smith</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans"> 3rd Level: Waiting</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Interviewer: {' '}
                      <span className="text-blue-400">
                        Stephen
                      </span>
                    </span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Meet Via: G-Meet</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Attendees: Johnson</span>
                  </Col>
                </Row>
                <Row gutter={(16, 16)} className="mt-6">
                  <Col className="ms-3">
                    <Button className="text-[#0A66C2] text-sm rounded-none border-[#0A66C2] font-sans">Reschedule Meeting</Button>
                  </Col>
                  <Col>
                    <Button type="primary" className="text-sm rounded-none font-sans">Join Meeting</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* </Card> */}
          </div>
          <div style={{ flex: '0 0 auto', marginRight: '1rem', maxWidth: 600 }}>
            <Row gutter={(16, 16)} className="flex-row border-[#cfcfd3] border-2 rounded-md">
              <Col span={10} className="flex-col border-r-2 p-3 mt-3 border-[#cfcfd3] font-sans">
                <div className="h-20 w-20 rounded-full m-auto">
                  <img src={user2} alt="User 2"></img>
                </div>
                <h1 className="mt-3 text-center font-sans">Maria</h1>
                <h1 className="mt-1 text-center font-sans">Senior Python Developer</h1>
                <Row className="mt-3 border-t-2 border-[#cfcfd3]">
                  <Col span={12} className="flex flex-col items-center border-r-2 border-[#cfcfd3] mt-3">
                    <img className="h-5 w-5" src={Calendar} alt="Calendar"></img>
                    <span className="mt-2 text-sm text-[#0A66C2] font-sans">19th Feb 2024</span>
                  </Col>
                  <Col span={12} className=" flex flex-col items-center mt-3">
                    <img className="h-5 w-5" src={Clock} alt="Clock"></img>
                    <span className="mt-2 text-sm text-[#0A66C2] font-sans">10.30 AM</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={14} className="flex-col">
                <Row gutter={[16, 16]} className="!gap-0">
                  <Col span={12} className="p-2 border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0">
                    <span className="table-cell font-sans">1st Level: 7/10</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Interviewer: Stella</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">2nd Level: 6/10</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Interviewer: Smith</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">3rd Level: Waiting</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Interviewer: Stephen</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Meet Via: G-Meet</span>
                  </Col>
                  <Col span={12} className="border-l-2 border-r-0 border-b-2 border-[#cfcfd3] ms-0 p-2">
                    <span className="table-cell font-sans">Attendees: Johnson</span>
                  </Col>
                </Row>
                <Row gutter={(16, 16)} className="mt-6">
                  <Col className="ms-3">
                    <Button className="text-[#0A66C2] text-sm rounded-none border-[#0A66C2] font-sans">Reschedule Meeting</Button>
                  </Col>
                  <Col>
                    <Button type="primary" className="text-sm rounded-none font-sans">Join Meeting</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

          </div>
        </div>
      </Card>
    </>
  );
}
