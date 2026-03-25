import React from "react";
import { MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { FiShield, FiZap } from "react-icons/fi";

const iconStyle = { fontSize: "1.8rem", color: "var(--teal)" };

export default function ServiceIcon({ type }) {
  const icons = {
    truck:    <MdLocalShipping style={iconStyle} />,
    return:   <TbTruckReturn   style={iconStyle} />,
    cash:     <BsCashCoin      style={iconStyle} />,
    support:  <MdSupportAgent  style={iconStyle} />,
    shield:   <FiShield        style={iconStyle} />,
    delivery: <FiZap           style={iconStyle} />,
  };

  return icons[type] || null;
}
