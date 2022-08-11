/* eslint-disable react/jsx-no-target-blank */
import Login from "./auth/login";
import React, { useEffect, useState } from "react";

export default () => {
  useEffect(() => {
    const user = window.localStorage.getItem("user") || {};
    if (Object.keys(user).length !== 0) {
      window.location.href = "/admin/dashboard";
    }
    else {
      window.location.href ="/auth/login"
    }
  },[]);
  return <></>
};
