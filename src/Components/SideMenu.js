import React, { useState } from "react";

export default function SideMenu() {
  const [menuItemHovered, setMenuItemHovered] = useState(false);

  const [sideMenuItems, setSideMenuItems] = useState({
    dashboard: {
      header: "Crew Dashboard",
      icon: "fa fa-dashboard",
      options: null,
      isExpand: false,
      subOptions: null,
    },
    vesselReports: {
      header: "Vessel Reports",
      icon: "fa fa-ship",
      options: [
        "View Vessel Reports",
        "Create new Report",
        "Edit Report in Progress",
      ],
      isExpand: false,
      subOptions: [
        "Sea Report",
        "Maneuvering Report",
        "Anchor/Drifting Report",
        "Port Report",
      ],
    },
    engineReports: {
      header: "Engine Reports",
      icon: "fa fa-cogs",
      options: ["View Engine Reports", "Create new Report"],
      isExpand: false,
      subOptions: ["ME Performance", "AE Performance"],
    },
    vesselSett: {
      header: "Vessel Settings",
      icon: "fa fa-sliders",
      options: null,
      isExpand: false,
      subOptions: null,
    },
    mySett: {
      header: "My Settings",
      icon: "fa fa-user-circle",
      options: null,
      isExpand: false,
      subOptions: null,
    },
    clientSett: {
      header: "Client Settings",
      icon: "fa fa-user-circle",
      options: null,
      isExpand: false,
      subOptions: null,
    },
    management: {
      header: "Management",
      icon: "fa fa-sliders",
      options: ["View Users", "View Clients", "View Vessels"],
      isExpand: false,
      subOptions: null,
    },
  });

  const handleMenuToggle = (value) => {
    setSideMenuItems((prevItems) => ({
      ...prevItems,
      [value.key]: {
        ...prevItems[value.key],
        isExpand: !prevItems[value.key].isExpand,
      },
    }));
  };
  const renderListItems = Object.entries(sideMenuItems).map(([key, value]) => {
    return (
      <li className=" bg-navtorDark hover:cursor-pointer flex flex-col group">
        <div className={` border border-navtorDark group-hover:border-navtorLightBlue ${value.isExpand ? 'bg-grayHighlight': ''} flex items-center flex-row rounded-r-full my-2 h-12`} onClick={() => handleMenuToggle({ key })}>
            <i key={key} className={`${value.icon} fa-sm pl-3 pr-2 group-hover:text-navtorLightBlue text-white`} />
            <h1 className="text-sm group-hover:text-navtorLightBlue text-white ">{value.header}</h1>
          {value.options != null ? (<i
              className={ `group-hover:text-navtorLightBlue text-white fa-sm fa-solid  fa-angle-left ${value.isExpand ? ' -rotate-90 duration-200': ''} absolute right-5`}
            ></i>):(<div></div>)}
        </div>
            {value.isExpand
              ? value.options.map((option) => (
                <div className={`flex flex-col rows-1 items-center ${value.isExpand ? 'origin-top duration-200': 'h-0'}`}>
                  <ul>
                    <li className="text-xs text-white">{option}</li>
                  </ul>
                </div>
              )): (<div></div>)
            }
        </li>
    )})

  return (
    <div
      id="side-menu-container"
      className="text-left flex fixed h-full bg-navtorDark lg:w-2/6 2xl:w-64"
    >
      <ul id="menu-items-list" className="flex flex-col w-full pr-3">
        {renderListItems}
      </ul>
    </div>
  );
}
