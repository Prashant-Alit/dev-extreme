
import React, { useState, useMemo, useCallback } from "react";
import NavigationList from "./NavigationList";
import "devextreme/dist/css/dx.light.css";
import "./navbar.css";
import { Routes, Route } from 'react-router-dom'; 
import { Drawer } from "devextreme-react/drawer";
import { Toolbar, Item } from "devextreme-react/toolbar";
import { Login } from "../login";
import { CustomDataGrid } from "../datagrid";
import { CustomDateBox } from "../datebox";
import { CustomSelectBox } from "../selectbox";
import { CustomeNumberBox } from "../numberbox/CustomNumberBox";

export const Navbar = () => {
    const [isOpened, setState] = useState(false);
    const buttonOptions = useMemo(() => {
        return {
            icon: "menu",
            onClick: () => {
                setState(!isOpened );
            }
        };
    }, [isOpened]);

    const renderList = useCallback(() => {
        const stateHandler = (newState) => setState(newState);
        return (
            <NavigationList stateHandler={stateHandler} />
        );
    }, []);


    const onOutsideClick = useCallback(() => {
        setState(false);
        return false;
      }, [setState]);

        return (
            <div>
                <Toolbar id="toolbar">
                    <Item
                        widget="dxButton"
                        options={buttonOptions}
                        location="before"
                    />
                </Toolbar>
                <Drawer
                    revealMode="expand"
                    height={700}
                    openedStateMode="shrink"
                    minSize={35}
                    style={{padding:"10px"}}
                    render={renderList}
                    opened={isOpened}
                    closeOnOutsideClick={onOutsideClick}
                >   
                    <div id="view">
                        <Routes>
                            <Route exact path="views/login" element={<Login />} />
                            <Route path="views/datagrid" element={<CustomDataGrid />} />
                            <Route path="views/datebox" element={<CustomDateBox />} />
                            <Route path="views/select" element={<CustomSelectBox />} />
                            <Route path="views/number" element={<CustomeNumberBox />} />
                        </Routes>
                    </div>
                </Drawer>
            </div>
        );
}

// export default NavigationDrawer;