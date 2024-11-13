
import { DataGrid } from 'devextreme-react';
import { Column, Editing } from 'devextreme-react/cjs/data-grid';


const Employe = [
    {
    FullName:"prem",
    Position : "manager",
    BirthDate: "02/01/1995"
  },
  {
    FullName:"ram",
    Position : "manager",
    BirthDate: "02/01/1995"
  },
  {
    FullName:"shyam",
    Position : "manager",
    BirthDate: "02/01/1995"
  },
  ]

export const CustomDataGrid = () => {
    return (
        <>
        <h1>Data Grid</h1>
        <DataGrid
              width={400}
              style={{margin:"20px"}}
              dataSource={Employe}
                // allowColumnReordering={true}
                >
                <Column dataField="FullName"></Column>
                <Column dataField="Position"></Column>
                <Column
                    dataField="BirthDate"
                    dataType="date">
                </Column>
                <Editing
                    allowUpdating={true}
                    allowAdding={true}
                    allowDeleting={true}
                    mode="row" />
                </DataGrid>
        </>
    )
}