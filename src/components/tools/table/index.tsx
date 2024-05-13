import { useState } from "react";
import { User } from "@/types/user";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

interface TableBoxProps {
  data: User[];
  openDeleteModal: (id: number) => void;
  editUserDrawer: () => void;
}

export function TableBox({
  data,
  openDeleteModal,
  editUserDrawer,
}: TableBoxProps) {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 rounded-xl ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avatar
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((user, index) => (
            <tr
              key={user.id}
              className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="px-6 py-2 whitespace-nowrap">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
              </td>
              <td className="px-6 py-2 whitespace-nowrap">{user.first_name}</td>
              <td className="px-6 py-2 whitespace-nowrap">{user.last_name}</td>
              <td className="px-6 py-2 whitespace-nowrap">{user.email}</td>
              <td className="py-2 whitespace-nowrap">
                <div className="w-full flex justify-start items-center gap-3">
                  <button
                    className="text-indigo-600 hover:bg-primary-light transition-all duration-200 p-1 rounded-md"
                    onClick={editUserDrawer}
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    className="text-red-600 hover:bg-primary-light transition-all duration-200 p-1 rounded-md"
                    onClick={() => openDeleteModal(user.id)}
                  >
                    <FaTrashCan />
                  </button>
                  <button className="hover:bg-primary-light transition-all duration-200 p-1 rounded-md">
                    <FaEye />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
