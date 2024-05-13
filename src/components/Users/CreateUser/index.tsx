import { createUserApi, editUserApi } from "@/services/user";
import { editUser, schemaValidator } from "@/types/user";
import {
  Drawer,
  Button,
  Box,
  TextInput,
  LoadingOverlay,
  Group,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications, showNotification } from "@mantine/notifications";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";

function CreateUser({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const form = useForm({
    initialValues: {
      name: "",
      job: "",
    },
    validate: zodResolver(schemaValidator),
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: editUser) {
    try {
      setLoading(true);
      const { name, job } = await createUserApi(values);
      setLoading(false);
      form.reset();
      notifications.show({
        title: "User Created",
        message: `User ${name} created successfully`,
        color: "green",
      });
      onClose();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      <Drawer
        opened={opened}
        onClose={onClose}
        title="Create User"
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
                label="Name"
                type="text"
                placeholder="Enter your Name"
                {...form.getInputProps("name")}
                className="w-full"
              />

              <TextInput
                label="job"
                type="text"
                placeholder="Enter your Job"
                {...form.getInputProps("job")}
                className="w-full"
              />
              <Group mt="md" className="w-full">
                <Button type="submit" fullWidth variant="filled">
                  Create User
                </Button>
              </Group>
            </form>
          </div>
        </Box>
      </Drawer>
    </>
  );
}

export default CreateUser;
