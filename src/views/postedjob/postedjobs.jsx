/* eslint-disable react/jsx-key */
import React from "react";
import { Row, Col, Card, Input, Button, Tabs } from "antd";
import { SearchOutlined, ArrowUpOutlined } from "@ant-design/icons";
import filter from "../../assets/filter.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import UI from "../../assets/UI.png";
import Angular from "../../assets/Angular.png";
export const Postedjobs = () => {
  const Search = Input;
  return (
    <>
      <Card
        className=" shadow-2xl"
        title={
          <>
            <Row className="mb-3">
              <Col span={24} className="h-6"></Col>
              <Col xs={8} md={5} className="mt-1">
                <span className="text-base font-sans font-bold">Posted Jobs</span>
              </Col>
              <Col xs={4} md={3} className="mt-2">
                <span className="font-normal tracking-wide inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] font-sans cursor-pointer">
                  View All
                </span>
              </Col>
              <Col xs={0} md={5}></Col>
              <Col xs={8} md={8}>
                <Search
                  placeholder="Search"
                  className="w-64 h-10 rounded-md shadow-2xl shadow-slate-500 font-sans"
                  suffix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                        fontSize: 20
                      }}
                    />
                  }
                />
              </Col>
              <Col xs={24} md={3}>
                <Button className="flex rounded-md shadow-2xl shadow-slate-500" size="large">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-q font-normal font-sans">Filters</span>
                </Button>
              </Col>
            </Row>
          </>
        }
      >
        <>
          <Tabs
            defaultActiveKey="1"
            type="card"
            items={[
              {
                key: "1",
                label: <span className="font-sans">Active Jobs</span>,
                children: (
                  <>
                    <Row gutter={[16, 16]}>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title"
                          title={
                            <>
                              <div className="flex">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={python}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Python Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #001
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            // eslint-disable-next-line react/jsx-key
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#D9E4EF] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold text-[#0A66C2] font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={Angular}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Angular Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #002
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light ">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light font-sans">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#73A1FB] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={java}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Java Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #003
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#2F73A0] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans ">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img className="h-5 w-5 ml-1" src={UI}></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    UI/UX Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #004
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#0A66C2] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </>
                ),
              },
              {
                key: "2",
                label: <span className="font-sans">Inactive Jobs</span>,
                children: (
                  <>
                    <Row gutter={[16, 16]}>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title"
                          title={
                            <>
                              <div className="flex">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={python}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Python Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #001
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2] font-light font-sans">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#D9E4EF] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold text-[#0A66C2] font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={Angular}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Angular Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #002
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2] font-light font-sans">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light font-sans">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#73A1FB] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={java}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Java Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #003
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light font-sans">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#2F73A0] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img className="h-5 w-5 ml-1" src={UI}></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    UI/UX Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #004
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#0A66C2] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </>
                ),
              },
              {
                key: "3",
                label: <span className="font-sans">Completed Jobs</span>,
                children: (
                  <>
                    <Row gutter={[16, 16]}>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title"
                          title={
                            <>
                              <div className="flex">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={python}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Python Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #001
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#D9E4EF] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold text-[#0A66C2] font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={Angular}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Angular Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #002
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#73A1FB] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img
                                    className="h-5 w-5 ml-1"
                                    src={java}
                                  ></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    Java Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #003
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small">
                                <span className="text-[#0A66C2] font-light font-sans">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#2F73A0] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card
                          className="card_title "
                          title={
                            <>
                              <div className="flex ">
                                <div className="flex">
                                  <img className="h-5 w-5 ml-1" src={UI}></img>
                                  <span className="text-sm ml-1 font-normal font-sans">
                                    UI/UX Developers
                                  </span>
                                </div>
                                <span className="text-sm font-light ml-2 font-sans">
                                  #004
                                </span>
                              </div>
                            </>
                          }
                          actions={[
                            <div>
                              <ArrowUpOutlined className="w-5" />
                              <span className="text-black text-small font-sans">
                                <span className="text-[#0A66C2] font-light">28% {' '}</span>vs Last month
                              </span>
                              <span className="text-black text-small font-light font-sans">  6 mins ago</span>
                            </div>,
                          ]}
                        >
                          <Row>
                            <Col span={24} className="m-auto text-center font-light">
                              <span className="text-sm font-sans">Senior Developers</span>
                              <div className="w-16 h-16 mx-auto mt-2 mb-2 bg-[#0A66C2] flex flex-col justify-center items-center">
                                <h1 className="text-xl text-center font-bold  text-white font-sans">
                                  258
                                </h1>
                              </div>
                              <span className="text-sm mt-1 font-sans">
                                Total Applicants
                              </span>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </>
      </Card>
    </>
  );
}
