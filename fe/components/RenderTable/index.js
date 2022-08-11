import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TableDropdown from "components/Dropdowns/TableDropdown.js";

// components

export default ({ schema = [], items = [], color = "light" }) => {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              {schema.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                {schema.columnName &&
                  schema.columnName.length !== 0 &&
                  schema.columnName.map((e) => (
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      {e}
                    </th>
                  ))}
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {items.map((e) => (
                <tr>
                  {Object.keys(e).map((property) => (
                    <>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {e[property]}
                      </td>
                    </>
                  ))}
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
