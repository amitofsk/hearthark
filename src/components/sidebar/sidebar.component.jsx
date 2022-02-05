import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaRegUser, FaDollarSign } from "react-icons/fa";
import {
  FiMessageCircle,
  FiSettings,
  FiCalendar,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

import "./sidebar.styles.scss";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3 className="side__header">Heart Hack</h3>
      <button
        className="side__group"
        onClick={() => navigate("/doctor/dashboard")}
      >
        <MdOutlineDashboard className="side__icon" />
        <span>dashboard</span>
      </button>
      <button
        className="side__group"
        onClick={() => navigate("/doctor/patient")}
      >
        <FaRegUser className="side__icon" />
        <span>patients</span>
      </button>
      <Link to="/messages" className="side__group">
        <FiMessageCircle className="side__icon" />
        <span>messages</span>
      </Link>
      <Link to="/payments" className="side__group">
        <FaDollarSign className="side__icon" />
        <span>payments</span>
      </Link>
      <Link to="/calendar" className="side__group">
        <FiCalendar className="side__icon" />
        <span>calendar</span>
      </Link>
      <Link to="/settings" className="side__group">
        <FiSettings className="side__icon" />
        <span>settings</span>
      </Link>

      <div className="side__footer">
        <Link to="/help" className="side__group">
          <FiHelpCircle className="side__icon" />
          <span>help</span>
        </Link>
        <Link to="/logout" className="side__group">
          <FiLogOut className="side__icon" />
          <span>log out</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
