import { editUserApi } from "@/services/user";
import { editUser, schemaValidator } from "@/types/user";
import {
  Drawer,
  Button,
  Box,
  TextInput,
  LoadingOverlay,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { zodResolver } from "mantine-form-zod-resolver";
import { useEffect, useState } from "react";

function EditUser({
  opened,
  onClose,
  userId,
  firstName,
  lastName,
}: {
  opened: boolean;
  onClose: () => void;
  userId: number;
  firstName: string;
  lastName: string;
}) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
    },
  });

  useEffect(() => {
    form.setValues({
      firstName,
      lastName
    })
  }, [firstName, lastName])

  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: typeof form.values) {
    try {
      console.log(values);
      setLoading(true);
      const response = await editUserApi({
        userId,
        firstName: values.firstName,
        lastName: values.lastName,
      });
      setLoading(false);
      notifications.show({
        title: "User Edited",
        message: `User ${response.first_name} edited successfully`,
        color: "green",
      });
      onClose();
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Edit User"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Box pos="relative" className="h-full bg-[#fff] rounded-lg">
          <div>
            <LoadingOverlay
              visible={loading}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 3 }}
            />

            <form
              onSubmit={form.onSubmit(handleSubmit)}
              className="w-[350px] lg:w-[400px] flex flex-col justify-start items-start gap-6 shadow-custom p-10 rounded-xl bg-white"
            >
              <TextInput
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                {...form.getInputProps("firstName")}
                className="w-full"
              />

              <TextInput
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                {...form.getInputProps("lastName")}
                className="w-full"
              />
              <Group mt="md" className="w-full">
                <Button type="submit" fullWidth variant="filled">
                  Edit User
                </Button>
              </Group>
            </form>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

export default EditUser;
