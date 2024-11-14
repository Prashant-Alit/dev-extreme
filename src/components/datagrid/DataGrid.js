
import { DataGrid } from 'devextreme-react';
import { Column, Editing, FilterRow, GroupPanel, HeaderFilter, MasterDetail, Pager, Scrolling, SearchPanel, Selection } from 'devextreme-react/cjs/data-grid';
import { useEffect, useState } from 'react';
import { getPostData } from '../apiservices/apiservices';
import {Employe} from "../../helper/helper"

import "./datagrid.style.scss"

export const CustomDataGrid = () => {
  const [postData, setPostData] = useState();

  useEffect(() => {
    const post = getPostData();
    console.log("post data", post)
    post.then((res) => setPostData(res))
      .catch((error) => console.log("eeeee", error))
    setPostData(post)
  }, [])


  const detailFature = (props) => {
    // {console.log("looking for data",props.data.data)}
    return (
      <div>
      <p><b>Employee Details:</b></p>
      <p>Full Name: {props.data.data.FullName}</p> 
       <p>Position: {props.data.data.Position}</p> 
       <p>Birth Date: {props.data.data.BirthDate}</p>
   </div>
    )
  }
  return (
    <div className='grid-container'>
     <div><h1 className='grid-heading'>Data Grid</h1></div>
    <div>
      <DataGrid
        style={{ margin: "10px" }}
        dataSource={Employe}
        keyExpr="id"
        showBorders={true}
        allowColumnReordering={true}
        columnAutoWidth={true}
        allowColumnResizing={true}
        focusedRowEnabled={true}
        focusedRowKey={3}
      >
        <Selection mode="single" />
        <Scrolling mode="virtual" />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel
          visible={true}
          width={240}
          highlightCaseSensitive={true}
          mode="equal"
          placeholder="Search..."
        />
          {/* <Selection
             mode="single"
             visible="true"
             allowSelectAll={true}
             deferred={true}
          /> */}
        <Pager visible={true} defaultPageSize={15} defaultPageIndex={1}  showNavigationButtons={true} />
        <Column dataField="id" sortOrder='desc'width={100} ></Column>
        <Column dataField="FullName" width={250}></Column>
        <Column dataField='Position' width={250}></Column>
        <Column dataField='BirthDate' width={250}></Column>
        <GroupPanel visible={true} />
       
        <MasterDetail
          enabled={true}
           component={detailFature}
          />
         <Editing
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
          mode="popup" useIcons={true}
        /> 
      </DataGrid>
      </div>
    </div>
  )
}






































































































































































































































































































































////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <h1>Data Grid with Advanced Features</h1>
// <DataGrid
//   style={{ margin: "10px" }}
//   dataSource={Employe}
//   keyExpr="id"
//   showBorders={true}
//   allowColumnReordering={true}
//   columnAutoWidth={true}
//   allowColumnResizing={true}
//   focusedRowEnabled={true}
// >
//   {/* Enable Scrolling */}
//   <Scrolling mode="virtual" />
  
//   {/* Enable Multi-Row Selection */}
//   <Selection mode="multiple" />

//   {/* Filtering and Search */}
//   <FilterRow visible={true} />
//   <SearchPanel
//     visible={true}
//     width={240}
//     highlightCaseSensitive={true}
//     placeholder="Search..."
//   />
//   <HeaderFilter visible={true} />
  
//   {/* Column and Group Panel Customization */}
//   <GroupPanel visible={true} />
//   <ColumnChooser enabled={true} />
//   <ColumnFixing enabled={true} />

//   {/* Editing Settings */}
//   <Editing
//     allowUpdating={true}
//     allowAdding={true}
//     allowDeleting={true}
//     mode="popup"
//   />

//   {/* Columns */}
//   <Column dataField="id" caption="Employee ID" dataType="number" sortOrder="desc" />
//   <Column dataField="FullName" caption="Full Name" />
  
//   {/* Lookup Column for Position */}
//   <Column
//     dataField="Position"
//     caption="Position"
//     lookup={{
//       dataSource: positions,
//       valueExpr: "name",
//       displayExpr: "name"
//     }}
//   />
  
//   <Column dataField="BirthDate" caption="Birth Date" dataType="date" />

//   {/* Summaries */}
//   <Summary>
//     <Summary.TotalItem column="id" summaryType="count" displayFormat="Total Employees: {0}" />
//   </Summary>

//   {/* Master-Detail Interface */}
//   <MasterDetail
//     enabled={true}
//     component={({ data }) => (
//       <div>
//         <p><b>Employee Details:</b></p>
//         <p>Full Name: {data.FullName}</p>
//         <p>Position: {data.Position}</p>
//         <p>Birth Date: {data.BirthDate}</p>
//       </div>
//     )}
//   />

//   {/* Focused Row */}
//   <Pager visible={true} />
// </DataGrid>
// </div>

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { DataGrid } from 'devextreme-react';
// import { Column, ColumnChooser, ColumnFixing, Editing, FilterRow, GroupPanel, HeaderFilter, MasterDetail, Pager, Scrolling, SearchPanel, Selection, Summary } from 'devextreme-react/data-grid';
// import { useState, useEffect } from 'react';
// import { getPostData } from '../apiservices/apiservices';

// import "./datagrid.style.scss";

// const Employe = [
//   // Original employee data array as defined above
// ];


// export const CustomDataGrid = () => {
//   const [postData, setPostData] = useState([]);

//   useEffect(() => {
//     getPostData().then(setPostData).catch(console.log);
//   }, []);

//   return (
//     <div className='grid-container'>
//       <h1>Data Grid with Advanced Features</h1>
//       <DataGrid
//         style={{ margin: "10px" }}
//         dataSource={Employe}
//         keyExpr="id"
//         showBorders={true}
//         allowColumnReordering={true}
//         columnAutoWidth={true}
//         allowColumnResizing={true}
//         focusedRowEnabled={true}
//         focusedRowKey={3}  // Set the initial focused row by row key (ID)
//         onFocusedRowChanged={(e) => console.log('Focused Row:', e.row)} // Track focused row changes
//         rowAlternationEnabled={true}  // Alternates row colors for better readability
//         onRowPrepared={(e) => {
//           // Custom row styling based on conditions
//           if (e.rowType === "data" && e.data.Position === "Manager") {
//             e.rowElement.style.backgroundColor = "#d0eaff"; // Light blue for Manager positions
//           }
//           if (e.rowType === "data" && e.data.Position === "Consultant") {
//             e.rowElement.style.fontWeight = "bold"; // Bold font for Consultant positions
//           }
//         }}
//       >
//         {/* Enable Scrolling */}
//         <Scrolling mode="virtual" />
        
//         {/* Enable Multi-Row Selection */}
//         <Selection mode="multiple" />

//         {/* Filtering and Search */}
//         <FilterRow visible={true} />
//         <SearchPanel
//           visible={true}
//           width={240}
//           highlightCaseSensitive={true}
//           placeholder="Search..."
//         />
//         <HeaderFilter visible={true} />
        
//         {/* Column and Group Panel Customization */}
//         <GroupPanel visible={true} />
//         <ColumnChooser enabled={true} />
//         <ColumnFixing enabled={true} />

//         {/* Editing Settings */}
//         <Editing
//           allowUpdating={true}
//           allowAdding={true}
//           allowDeleting={true}
//           mode="popup"
//         />

//         {/* Columns */}
//         <Column dataField="id" caption="Employee ID" dataType="number" sortOrder="desc" />
//         <Column dataField="FullName" caption="Full Name" />
        
//         {/* Lookup Column for Position */}
//         <Column
//           dataField="Position"
//           caption="Position"
//           lookup={{
//             dataSource: positions,
//             valueExpr: "name",
//             displayExpr: "name"
//           }}
//         />
        
//         <Column dataField="BirthDate" caption="Birth Date" dataType="date" />

//         {/* Summaries */}
//         <Summary>
//           <Summary.TotalItem column="id" summaryType="count" displayFormat="Total Employees: {0}" />
//         </Summary>

//         {/* Master-Detail Interface */}
//         <MasterDetail
//           enabled={true}
//           component={({ data }) => (
//             <div>
//               <p><b>Employee Details:</b></p>
//               <p>Full Name: {data.FullName}</p>
//               <p>Position: {data.Position}</p>
//               <p>Birth Date: {data.BirthDate}</p>
//             </div>
//           )}
//         />

//         {/* Focused Row */}
//         <Pager visible={true} />
//       </DataGrid>
//     </div>
//   );
// };
