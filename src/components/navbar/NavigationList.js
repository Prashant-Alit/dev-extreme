import React, { useCallback } from "react";
import List from "devextreme-react/list";
import { Link } from "react-router-dom";

const navigation = [
    { id: 1, text: "Login", icon: "lock", path: "views/login" },
    { id: 2, text: "Data Grid", icon: "card", path: "views/datagrid" },
    { id: 3, text: "Date box", icon: "event", path: "views/datebox" },
    { id: 4, text: "Select", icon: "check", path: "views/select" },
    { id: 5, text: "Number", icon: "plus", path: "views/number" },
    { id: 6, text: "PopUp", icon: "info", path: "views/popup" },
    { id: 7, text: "Html Editor", icon: "columnproperties", path: "views/htmleditor" },
    { id: 8, text: "Login Form", icon: "user", path: "views/employeelogin" }
];

function NavigationList(props){
    const closeDrawer = () => {
        props.stateHandler(false);
    }

    const renderItem = useCallback((data) => {
        return (
            <div>
                <Link to={'/' + data.path}>
                    <div>
                        <div className="dx-list-item-icon-container">
                            <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`}/>
                        </div>
                        <span>{data.text}</span>
                    </div>
                </Link> 
            </div>
        );
    }, [])

        return (
            <div>
                <List
                    items={navigation}
                    width={200}
                    selectionMode="single"
                    onSelectionChanged={closeDrawer}
                    itemRender={renderItem}
                />
            </div>
        );
}

export default NavigationList;