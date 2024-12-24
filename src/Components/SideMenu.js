import React, { useState } from "react";

export default function SideMenu() {
  const initialMenuItems = {
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
  };

  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const toggleMenu = (key) => {
    setMenuItems((prevItems) => ({
      ...prevItems,
      [key]: {
        ...prevItems[key],
        isExpand: !prevItems[key].isExpand,
      },
    }));
  };

  const renderMenuItems = Object.entries(menuItems).map(([key, item]) => (
    <li key={key} className="bg-navtorDark hover:cursor-pointer flex flex-col group">
      <div
        className={`border border-navtorDark group-hover:border-navtorLightBlue ${item.isExpand ? "bg-grayHighlight" : ""} flex items-center flex-row rounded-r-full my-2 h-11`}
        onClick={() => toggleMenu(key)}
      >
        <i className={`${item.icon} fa-sm pl-3 pr-2 group-hover:text-navtorLightBlue text-white`} />
        <h1 className="text-[14px] group-hover:text-navtorLightBlue text-white">{item.header}</h1>
        {item.options && (
          <i
            className={`group-hover:text-navtorLightBlue text-white fa-sm fa-solid fa-angle-left ${item.isExpand ? "-rotate-90 duration-200" : ""} absolute right-5`}
          />
        )}
      </div>
      {item.options && (
        <div
          className={`flex flex-col transition-[max-height] overflow-hidden duration-700 mx-5 ease-in-out ${item.isExpand ? "max-h-40" : "max-h-0"}`}
        >
          <ul>
            {item.options.map((option, index) => (
              <li key={index} className="text-[14px] text-white py-1">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <div
      id="side-menu-container"
      className="text-left flex fixed h-full bg-navtorDark lg:w-2/6 2xl:w-60"
    >
      <ul id="menu-items-list" className="flex flex-col w-full pr-3 pt-3">
        {renderMenuItems}
      </ul>
    </div>
  );
}
