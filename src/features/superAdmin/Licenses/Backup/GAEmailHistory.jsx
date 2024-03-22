import React from "react";
import CommonTemplate from "./CommonTemplate";
import GAEmailHistoryTable from "./GAEmailHistoryTable";


const GAEmailHistory = () => {
    return (
        <>
        <CommonTemplate title="GA" subtitle="Active"/>
        <GAEmailHistoryTable/>
        </>
    )
}

export default GAEmailHistory;