import React from "react";

export default function ServiceIcon({ type }) {
  const icons = {
    truck: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="2" y="10" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M24 14h5l4 5v7h-9V14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="9"  cy="28" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="28" cy="28" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    return: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 20c0 5.523 4.477 10 10 10s10-4.477 10-10S23.523 10 18 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 10v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    cash: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="18" cy="19" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 15h4M28 15h4M4 23h4M28 23h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    support: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="18" cy="18" r="5"  stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7.1 7.1l4.7 4.7M24.2 24.2l4.7 4.7M28.9 7.1l-4.7 4.7M11.8 24.2l-4.7 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    shield: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4l12 4v10c0 6-5 11-12 14C11 29 6 24 6 18V8l12-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M13 18l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    delivery: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 18h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 10l8 8-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8v20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[type] || null;
}
