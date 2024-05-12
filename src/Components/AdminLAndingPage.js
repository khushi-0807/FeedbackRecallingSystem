import React from "react";
import AdminNav from "./AdminNav";
import AdminRightPart from "./AdminRightPart";
import AdminUpperNav from "./AdminUpperNav";

function AdminLAndingPage() {
  return (
    <>
      <div class="d-flex">
        <AdminNav />
        <AdminUpperNav />
      </div>
    </>
  );
}

export default AdminLAndingPage;
