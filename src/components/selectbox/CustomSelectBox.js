import { SelectBox } from "devextreme-react";
import { useCallback, useState } from "react";

const data = [
    {
      ID: 1,
      Name: 'Male'
    },
    {
      ID: 2,
      Name: 'Female'
    },

  ]

export const CustomSelectBox = () => {
    const [selectValue, setSelectValue] = useState()

    const onNameValueChanged = useCallback((args) => {
        setSelectValue(args.value);
      }, [])
    return (
        <>
            <h1>select box</h1>
            <SelectBox
                className='inputBox'
                // searchEnabled={true}
                dataSource={data}
                width={400}
                // elementAttr={selectBoxAttributes}
                onValueChanged={onNameValueChanged}
                displayExpr={"Name"}
                valueExpr={"ID"}
                showDropDownButton={true}
                label="Select gender"
                labelMode="floating"
            />
        </>
    )
}