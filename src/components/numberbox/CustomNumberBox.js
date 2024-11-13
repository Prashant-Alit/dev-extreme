import { NumberBox } from "devextreme-react"


export const CustomeNumberBox = () => {

  const handleNumberInput =( ) => {
    console.log("handle number input is clicked")
  }

    return (
        <>
         <h1>Number box</h1>
         <NumberBox
                  // value={261991}
                  width={400}
                  min={0}
                  max={1000000}
                  onValueChange={handleNumberInput}
                  format="$ #,##0.##"
                  step={1}
                  showSpinButtons={true}
                  //  showClearButton={true}
                />
        </>
    )
}