import React from 'react';
import { Layout, Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import logo from "../../assets/logo.png"
import day from "../../assets/day.png"
import surface from "../../assets/surface.png"
import setting from "../../assets/setting.png"
import notification from "../../assets/notification.png"
import message from "../../assets/message.png"
import user from "../../assets/user.png"

const { Header } = Layout;
const Headers = () => {
  const Search = Input
  return (
    <>
      <Header className="sticky top-0 z-10 w-screen flex items-center bg-white shadow-2xl !p-0 ">
        <Row gutter={(16, 16)} className='w-screen justify-between text-center'>
          <Col className="flex text-center">
            <img src={logo} className="w-25 h-10 me-10 ms-2 mt-3"></img>
            <Search
              placeholder="Search"
              className="w-64 ms-10 rounded-md shadow-2xl shadow-slate-500 mt-3 mb-3"
              suffix={
                <SearchOutlined
                  style={{
                    color: 'rgba(0,0,0,.45)',
                    fontSize: 20
                  }}
                />
              }
            />
          </Col>
          <Col>
            <span className='flex items-center gap-11 mt-5 mr-8 sm:gap-6  md:gap-6 lg:gap-12 lg:mr-13 xl:gap-14 xl:mr-16 2xl:mr-16'>
              <img src={day} className="w-5 h-5"></img>
              <img src={surface} className="w-5 h-5"></img>
              <img src={message} className="w-5 h-5"></img>
              <img src={notification} className="w-5 h-5"></img>
              <img src={setting} className="w-5 h-5"></img>
              <img src={user} className="w-5 h-5"></img>
            </span>
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default Headers;