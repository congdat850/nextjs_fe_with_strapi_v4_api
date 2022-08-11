import React, { useEffect, useState } from "react";

// components

import CardTableUser from "components/Cards/CardTablesUser";

// layout for page

import Admin from "layouts/Admin.js";

import UserService from "../../apis/users";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const userService = UserService();
    const res = await userService.getUsers();
    if (res) {
      setData({ data: [...res.map(e=>({
        id:e.id,
        username:e.username,
        email:e.email,
        created_at:e.created_at,
      }))] });
    }
  }, []);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableUser res={data} color="dark" />
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;
