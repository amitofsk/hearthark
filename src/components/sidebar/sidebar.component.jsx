import React from "react";
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
  return (
    <aside className="sidebar">
      <h3 className="side__header">Heart Hack</h3>
      <Link to="/dashboard" className="side__group">
        <MdOutlineDashboard className="side__icon" />
        <span>dashboard</span>
      </Link>
      <Link to="/patients" className="side__group">
        <FaRegUser className="side__icon" />
        <span>patients</span>
      </Link>
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
