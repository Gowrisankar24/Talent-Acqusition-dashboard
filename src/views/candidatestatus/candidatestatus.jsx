/* eslint-disable no-unused-vars */
import { Card, Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import filter from "../../assets/filter.png";
import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

export const Candidatestatus=()=> {
  const Search = Input;
  const rowData = [
    { Jobid: "#001", Name: "John Doe", Position: "Designer", level1: "6/10",level2:"7/10",level3:"3/10",level4:"...",totalmarks:"...",status:"Active",action:"" },
    { Jobid: "#002", Name: "John Smith", Position: "Angular Developer", level1: "6/10",level2:"5/10",level3:"5/10",level4:"8/10",totalmarks:"24/40",status:"Hired",action:"" },
    { Jobid: "#003", Name: "Johnson Smith", Position: "Python Developer", level1: "6/10",level2:"7/10",level3:"3/10",level4:"...",totalmarks:"...",status:"Active",action:"" },
    { Jobid: "#004", Name: "Stella", Position: "Python Developer", level1: "6/10",level2:"2/10",level3:"",level4:"",totalmarks:"24/40",status:"Reject",action:"" },
    { Jobid: "#005", Name: "Randy", Position: "IOS Developer", level1: "6/10",level2:"7/10",level3:"3/10",level4:"...",totalmarks:"...",status:"Active",action:"" },
    { Jobid: "#006", Name: "John Doe", Position: "Junior Designer", level1: "6/10",level2:"7/10",level3:"3/10",level4:"...",totalmarks:"...",status:"Active",action:"" },
  ];

  const colDefs = [
    { field: "Jobid",headerName:"Job ID" },
    { field: "Name",headerName:"Name" },
    { field: "Position",headerName:"Position" },
    { field: "level1",headerName:"1st Level" },
    { field: "level2",headerName:"2nd Level" },
    { field: "level3",headerName:"3rd Level" ,
      cellRenderer:(params)=>{
      if(params?.value===''){ return <span className="text-center"><i className="fad fa-times-circle text-[#de3a2f] font-medium text-base"/></span>}
      return <span>{params?.value}</span>
    } 
  },
    { field: "level4",headerName:"4th Level",
      cellRenderer:(params)=>{
        if(params?.value===''){ return <span className="text-center"><i className="fad fa-times-circle text-[#de3a2f] font-medium text-base"/></span>}
        return <span>{params?.value}</span>
      } 
     },
    { field: "totalmarks",headerName:"Total Marks" },
    { field: "status",headerName:"Status", cellRenderer:(params)=>{
      if(params?.value ==='Active'){
        return <span className="text-[#e3904b] bg-[#ebcaae] p-1 space-x-2 font-medium">{params?.value}</span>;
      }
      else if(params?.value ==='Reject'){
        return <span className="text-[#de3a2f] bg-[#ff9b94] p-1 space-x-2 font-medium">{params?.value}</span>;
      }
      else if(params?.value ==='Hired'){
        return <span className="text-[#55c96a] bg-[#a2f5b1] p-1 space-x-2 font-medium">{params?.value}</span>;
      }
    } },
    { field: "actions",headerName:"Actions", cellRenderer :()=>{
      return <span><i className="fad fa-eye"/></span>
    },
    cellStyle: { textAlign: 'center' }
   },

  ];

  const autoSizeStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,

};

  return (
    <>
      <Card
        className="candidate"
        title={
          <>
            <Row>
              <Col span={24} className="h-6"></Col>
              <Col xs={8} md={6}>
                <h1 className="text-base font-medium">Candidate Status</h1>
              </Col>
              <Col xs={5} md={4} className="mt-1">
                <div className="inline-block border-b-2 border-[#0A66C2] font-medium text-[#0A66C2]">
                  View All
                </div>
              </Col>
              <Col md={3}></Col>
              <Col xs={8} md={8}>
                <Search
                  placeholder="Search"
                  className="w-64 h-10 rounded-none shadow-xl"
                  suffix={
                    <SearchOutlined
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  }
                />
              </Col>
              <Col xs={24} md={3}>
                <Button className="flex rounded-sm" size="large">
                  <img className="w-3 h-3 mt-1 mr-1" src={filter}></img>
                  <span className="ml-q">Filter</span>
                </Button>
              </Col>
              <Col span={24} className="h-8"></Col>
            </Row>
          </>
        }
      >
        <Row>
          <Col span={24}>
            <div
              className="ag-theme-quartz interview-info" // applying the grid theme
              style={{ height: 420 }} // the grid will fill the size of the parent container
            >
              <AgGridReact rowData={rowData} columnDefs={colDefs} autoSizeStrategy={autoSizeStrategy} />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
