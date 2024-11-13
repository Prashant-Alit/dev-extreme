import { Button } from "devextreme-react"

export const CustomButton = ({handleSubmit}) => {
    return (
        <Button
        // className='btn'
        type="success"
        text="Submit"
        useSubmitBehavior={true}
        width={300}
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
        stylingMode={"contained"}
      />
    )
}