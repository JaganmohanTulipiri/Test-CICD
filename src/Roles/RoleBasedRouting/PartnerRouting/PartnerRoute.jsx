import React from "react";
import PartnerSystemAdmin from "../../../features/Partners/PartnerSystemAdmin";
import { Route } from "react-router-dom";
import DistrictLookup from "../../../features/Partners/DistrictLookup";
import Notifications from "../../../features/Partners/Notifications";
import ReportsMain from "../../../features/Partners/Reports/Report";
import AdministerTest from "../../../features/Partners/Reports/AdministerTest";
import FitnessGramStudentReport from "../../../features/Partners/Reports/FitnessGramStudentReport";
import SmartCoachComponent from "../../../components/GlobalComponents/SmartCoach/SmartCoachComponent";
import RecommendedSmart from "../../../components/GlobalComponents/SmartCoach/RecommendedSmart";

export const PartnerRoute = [
  <Route index element={<PartnerSystemAdmin/>} />,
  <Route path="DistrictLookup" element={<DistrictLookup/>}/>,



  // <Route path='SmartCoach' element={<SmartCoachComponent />} />,


  <Route path='SmartCoach' element={<RecommendedSmart />} />,





  <Route path="Notifications" element={<Notifications/>}/>,
  <Route path="Reports" element={<ReportsMain/>}/>,
  <Route path="Reports/AdministerTest" element={<AdministerTest/>}/>,
  <Route path="Reports/StudentReport" element={<FitnessGramStudentReport/>}/>
]
