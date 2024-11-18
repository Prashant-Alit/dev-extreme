import { Button, Popup } from "devextreme-react";
import { useState } from "react";

import styles from "./CustomPopup.module.css";
import { ToolbarItem } from "devextreme-react/cjs/autocomplete";

export const CustomPopup = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const buttonOptions = {
    text: "Refresh",
    onClick: function () {
      handleNewPopup();
    },
  };

  const handleNewPopup = () => {
    ("handlenewpopup");
    return (
      <>
        <Popup
          // className={styles.cutompopup}
          visible={isPopupVisible}
          hideOnOutsideClick={true}
          onHiding={togglePopup}
          showTitle={true}
          title="Info"
          defaultWidth={300}
          defaultHeight={300}
          resizeEnabled={true}
          dragEnabled={true}
          position="center"
          container="#containerElement"
          // contentRender={renderContent}
        >
          <ToolbarItem text="Titletttt" location="before"></ToolbarItem>
          <ToolbarItem
            widget="dxButton"
            location="after"
            // options={this.buttonOptions}
          ></ToolbarItem>

        </Popup> 
      </>
    );
  };

  const renderContent = () => {
    return (
      <>
        <p>Static content</p>
        <Button
          text="Click me"
          onClick={() => {
            setPopupVisibility(false);
          }}
        />
      </>
    );
  };
  return (
    <div id="containerElement">
      <h1> PopUp </h1>
      <Popup
        className={styles.cutompopup}
        visible={isPopupVisible}
        hideOnOutsideClick={true}
        onHiding={togglePopup}
        showTitle={true}
        title="Information"
        // defaultWidth={300}
        // defaultHeight={300}
        resizeEnabled={true}
        dragEnabled={true}
        position="center"
        contentRender={renderContent}
        shading={true}
        shadingColor="rgba(0, 0, 0, 0.3)"
      >
        <ToolbarItem text="Title" location="before" />
        <ToolbarItem
          options={buttonOptions}
          widget="dxButton"
          location="after"
        />
         <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="after"
        //   options={getCloseButtonOptions}
        />
      </Popup>
      <Button text="Open popup" onClick={togglePopup} />
      {handleNewPopup}
    </div>
  );
};
