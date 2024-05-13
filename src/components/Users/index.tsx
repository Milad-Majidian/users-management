import { User } from "@/types/user";

import { Box, LoadingOverlay, Pagination, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
import { deleteUserApi, getUsersApi } from "@/services/user";
import { useNavigate } from "react-router-dom";
import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import EditUser from "./EditUser";
import CreateUser from "./CreateUser";
import { useUserStore } from "@/store/user";
import { TableBox } from "../Tools/table";

function Users() {
  let navigate = useNavigate();
  const { getToken, setToken } = useUserStore();

  if (getToken() === null) {
    navigate("/login");
  }

  const [usersData, setUsersData] = useState<User[]>([]);
  const [userId, setUserId] = useState<number>(0);

  const [openEditUser, setOpenEditUser] = useState(false);
  const [editUserDrawer, setEditUserDrawer] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const openDeleteModal = (userId: number) =>
    modals.openConfirmModal({
      title: "Delete User",
      centered: true,
      children: (
        <Text size="sm">Are you sure you want to delete this user?</Text>
      ),
      labels: { confirm: "Delete user", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        deleteUserHandle(userId);
        console.log("Confirmed");
      },
    });

  /**
   * Get Users Information
   * @constructor
   * @param {string} pageNumber - PageNumner.
   */
  async function getUsers(pageNumber: string) {
    try {
      setLoading(true);
      const { data, page, per_page, total_pages } = await getUsersApi(
        parseInt(pageNumber)
      );
      setUsersData(data);
      updateUrlParams(page);
      setTotal(total_pages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  /**
   * Delete User
   * @constructor
   * @param {number} id - Id of User.
   */

  async function deleteUserHandle(id: number) {
    try {
      setLoading(true);
      const { data } = await deleteUserApi(id);
      console.log("data", data);
      setLoading(false);
      deleteUser(id);
      // handleDelete(id);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  const deleteUser = (id: number) => {
    const updatedUsers = usersData.filter((user) => user.id !== id);
    setUsersData(updatedUsers);
  };

  const editUser = ({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) => {
    return (
      <EditUser
        opened={openEditUser}
        onClose={() => setOpenEditUser(!openEditUser)}
        userId={userId}
        firstName={firstName}
        lastName={lastName}
      />
    );
  };

  function updateUrlParams(value: string) {
    setPage(parseInt(value));
    const newURL = new URL(window.location.href);
    newURL.searchParams.set("page", value);
    navigate(newURL.search);
    // navigate(`?${newURL.search}`);
  }

  useEffect(() => {
    getUsers(page.toString());
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (openEditUser) {
  //       setEditUserDrawer(true);
  //     }
  //   }, 200);
  // }, [openEditUser]);

  if (usersData.length > 0) {
    return (
      <>
        <div className="h-[50px]"></div>
        <Box pos="relative" className="mt-12">
          <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 3 }}
          />
          <div className="p-8">
            <TableBox
              data={usersData}
              openDeleteModal={openDeleteModal}
              editUserDrawer={() => setOpenEditUser(!openEditUser)}
            />
            <Box className="w-full border-t border-borderPrimary mt-8">
              <Pagination
                total={total}
                value={page}
                onChange={(value: number) => getUsers(value.toString())}
                mt="xs"
              />
            </Box>
          </div>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full grid grid-cols-12 gap-2 mt-12">
          <Skeleton height={50} radius="md" className="col-span-3" />
          <Skeleton height={50} radius="md" className="col-span4" />
          <Skeleton height={50} radius="md" className="col-span-4" />
        </div>
      </>
    );
  }
}

export default Users;
