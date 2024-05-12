import React from "react";
import AdminMiddleHeading from "./AdminMiddleHeading";
import UserResponseTable from "./UserResponseTable";

function AdminMiddle() {
  return (
    <>
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <ul
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
          data-bs-theme="light"
        >
          <li>
            <a
              class="dropdown-item rounded-2 px-4 py-3 blockquote fw-bold"
              href="#"
            >
              Total Responses
            </a>
          </li>

          <li>
            <hr class="dropdown-divider " />
          </li>
          <li>
            <a class="dropdown-item rounded-2 " href="#">
              {" "}
              View Details
            </a>
          </li>
        </ul>
        <ul
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
          data-bs-theme="light"
        >
          <li>
            <a
              class="dropdown-item rounded-2 px-3 py-3 blockquote fw-bold"
              href="#"
            >
              Positive Response
            </a>
          </li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#">
              View Details
            </a>
          </li>
        </ul>
        <ul
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
          data-bs-theme="light"
        >
          <li>
            <a
              class="dropdown-item rounded-2 px-3 py-3 blockquote fw-bold"
              href="#"
            >
              Negative Response
            </a>
          </li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#">
              View Details
            </a>
          </li>
        </ul>
        <ul
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
          data-bs-theme="light"
        >
          <li>
            <a
              class="dropdown-item rounded-2 px-4 py-3 blockquote fw-bold"
              href="#"
            >
              User Details
            </a>
          </li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#">
              View Details
            </a>
          </li>
        </ul>
        <ul
          class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
          data-bs-theme="light"
        >
          <li>
            <a
              class="dropdown-item rounded-2  px-4 py-3 blockquote fw-bold"
              href="#"
            >
              Admin Details
            </a>
          </li>

          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#">
              View Details
            </a>
          </li>
        </ul>
      </div>
      <AdminMiddleHeading />
      <UserResponseTable />
    </>
  );
}

export default AdminMiddle;
