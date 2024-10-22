import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

// Notification Component
export default function Notification({ message, isError }) {
  if (isError) {
    toast.error(message);
  } else {
    toast.success(message);
  }

  return null;
}

// Custom Toast Container
export const CustomToastContainer = styled(ToastContainer)`
  right: 5rem;
  font-size: var(--font__14);
`;
