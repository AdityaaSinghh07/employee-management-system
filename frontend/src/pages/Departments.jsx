import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Departments() {

  const [departments,
    setDepartments] =
    useState([]);

  const token =
    localStorage.getItem("token");

  const loadDepartments =
    async () => {

      const res =
        await api.get(
          "/departments",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setDepartments(res.data);
    };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <div>

      <h2>Departments</h2>

      {departments.map((d) => (

        <div key={d.id}>
          {d.name}
        </div>

      ))}

    </div>
  );
}
