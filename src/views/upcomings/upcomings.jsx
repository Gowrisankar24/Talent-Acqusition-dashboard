import React from 'react'
import { Col, Row, Button } from 'antd'
export const Upcomings = () => {
  return (
    <>
      <Row gutter={(16, 16)} className='flex mt-5 mb-5'>
        <Col span={24} className="flex flex-row justify-between">
          <span className='mt-1 text-base font-sans font-bold'>Upcomings</span>
          <span className=' mt-2 inline-block border-b-2 border-[#0A66C2] text-[#0A66C2] font-sans cursor-pointer'>View All</span>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-md bg-[#0B74AD26] text-center pt-2'>
            <h1 className='text-lg font-medium text-[#0B74AD] font-sans'>07</h1>
            <span className='text-[#0B74AD] text-lg font-sans'>Feb</span>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <h1 className='font-normal text-md font-sans'>Interview with designer</h1>
          <span className='text-md font-light font-sans'>Created by <span className="text-[#0B74AD] font-normal">Stella</span></span>
          <h1 className='text-small mt-1 font-light font-sans'>10 A.M to 11 A.M</h1>
        </Col>
        <Col span={5}>
          <Button className='ml-1 font-sans' type='primary '>Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-5'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center pt-2'>
            <h1 className='text-lg font-medium text-black'>07</h1>
            <span className='text-black text-lg font-sans'>Feb</span>
          </div>
        </Col>
        <Col span={13} className='gap-y-3'>
          <h1 className='font-normal text-md font-sans'>Interview with PMO</h1>
          <span className='text-md font-light font-sans'>Created by <span className="text-[#0B74AD] font-normal">Stephen</span></span>
          <h1 className='text-small mt-1 font-light font-sans '>10 A.M to 11 A.M</h1>
        </Col>
        <Col span={5}>
          <Button className='ml-1 font-sans' type='primary'>Details</Button>
        </Col>
      </Row>
      <Row gutter={(16, 16)} className='mt-5 mb-3'>
        <Col span={6}>
          <div className='h-14 w-14 rounded-md bg-[#C0C1C1] text-center pt-2'>
            <h1 className='text-lg font-medium text-black'>07</h1>
            <span className='text-black text-lg font-sans'>Feb</span>
          </div>
        </Col>
        <Col span={13} className='gap-y-7'>
          <h1 className='font-normal text-md font-sans'>Interview with Net. Admin</h1>
          <span className='text-md font-light font-sans'>Created by <span className="text-[#0B74AD] font-normal">Stella</span></span>
          <h1 className='text-small mt-1 font-light font-sans'>10 A.M to 11 A.M</h1>
        </Col>
        <Col span={5}>
          <Button className='ml-1 font-sans' type='primary'>Details</Button>
        </Col>
      </Row>
    </>
  )
}
