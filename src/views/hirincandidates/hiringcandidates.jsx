import React from 'react'
import { Col, Row, Button } from 'antd'
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"
export const Hiringcandidates = () => {
  return (
    <>
      <Row gutter={(16, 16)} className='flex mt-5 mb-5 '>
        <Col span={24} className="flex flex-row justify-between">
          <span className='mt-1 text-base font-sans font-bold'>Hiring Candidates</span>
          <span className='mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] font-sans cursor-pointer'>View All</span>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-full bg-white text-center'>
            <img src={user3}></img>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <span className='text-md font-normal font-sans'>John Doe</span>
          <h1 className='font-light text-small mt-1 font-sans'>Senior Python Developer</h1>
          <h1 className='text-small mt-1 font-light font-sans'>Hired by: Stella</h1>
        </Col>
        <Col span={5}>
          <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] ml-2 font-sans">Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-full bg-white text-center'>
            <img src={user5}></img>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <span className='text-md font-normal font-sans'>John Doe</span>
          <h1 className='font-light text-small mt-1 font-sans'>Senior Python Developer</h1>
          <h1 className='text-small mt-1 font-light font-sans'>Hired by: Stella</h1>
        </Col>
        <Col span={5}>
          <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] ml-2 font-sans">Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-full bg-white text-center pt-2'>
            <img src={user4}></img>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <span className='text-md font-normal font-sans'>John Doe</span>
          <h1 className='font-light text-small mt-1 font-sans'>Senior Python Developer</h1>
          <h1 className='text-small mt-1 font-light font-sans'>Hired by: Stella</h1>
        </Col>
        <Col span={5}>
          <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] ml-2 font-sans">Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-full bg-white text-center'>
            <img src={user5}></img>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <span className='text-md font-normal font-sans'>John Doe</span>
          <h1 className='font-light text-small mt-1 font-sans'>Senior Python Developer</h1>
          <h1 className='text-small mt-1 font-light font-sans'>Hired by: Stella</h1>
        </Col>
        <Col span={5}>
          <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] ml-2 font-sans">Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-2'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-full bg-white text-center'>
            <img src={user5}></img>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <span className='text-md font-normal font-sans'>John Doe</span>
          <h1 className='font-light text-small mt-1 font-sans'>Senior Python Developer</h1>
          <h1 className='text-small mt-1 font-light font-sans'>Hired by: Stella</h1>
        </Col>
        <Col span={5}>
          <Button className="text-[#0A66C2] text-sm rounded-sm border-[#0A66C2] ml-2 font-sans">Details</Button>
        </Col>
      </Row>
    </>
  )
}
