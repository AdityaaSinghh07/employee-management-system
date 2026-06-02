import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Employees() {

  const [employees, setEmployees] =
    useState([]);

  const token =
    localStorage.getItem("token");

  const getEmployees = async () => {

    const res = await api.get(
      "/employees",
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    setEmployees(res.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>

      <h2>Employees</h2>

      {employees.map((emp) => (

        <div key={emp.id}>

          {emp.name} - {emp.email}

        </div>

      ))}

    </div>
  );
}
