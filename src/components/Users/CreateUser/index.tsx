import { createUserApi, editUserApi } from "@/services/user";
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
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";

function CreateUser({
  status,
  changeStatus,
}: {
  status: boolean;
  changeStatus: () => void;
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
      const { data } = await createUserApi(values);
      console.log("data", data);
      setLoading(false);
      changeStatus();
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <>
      <Drawer
        opened={status}
        onClose={changeStatus}
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
