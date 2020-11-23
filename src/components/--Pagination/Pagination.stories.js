import React from "react";
import Pagination from "./Pagination.js";

export default {
  title: "Components/Pagination",
  component: Pagination,
};
export const Default = (args) => <Pagination {...args} />;
Default.args = {
  currentPage: 5,
  totalPages: 15,
  maxVisiblePages: 4,
};
