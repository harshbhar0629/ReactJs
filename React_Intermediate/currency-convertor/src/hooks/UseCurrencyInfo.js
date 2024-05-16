/** @format */

import React from "react";
import { useState, useEffect } from "react";

const UseCurrencyInfo = (currency) => {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect(() => {
        fetch(url);
    }, []);
	return <div></div>;
};

export default UseCurrencyInfo;
