
import { Spin } from "antd";
import { useSelector } from "react-redux";
import SuperAdminLeads from "./SuperAdminLead";
import AdminLeads from "./AdminLeads";
import TeamLeadLeads from "./TeamLeads";
import UserLeads from "./UserLeads";

const Leads = () => {

  const CurrentRole = useSelector((state: any) => state.auth?.user?.role);
  return CurrentRole === undefined ? (
    <Spin size="large"/>
  ): (
    <div className="ml-2 rounded-lg">

      {(CurrentRole === "SuperAdmin" || CurrentRole === "CRMAdministrator") &&(<SuperAdminLeads/>) }
      {(CurrentRole === "Admin") &&(<AdminLeads/>) }
      {(CurrentRole === "TeamLead") &&(<TeamLeadLeads/>) }
      {(CurrentRole === "User") &&(<UserLeads/>) }

    </div>
  )
}

export default Leads;