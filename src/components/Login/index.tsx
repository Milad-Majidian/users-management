import React, { useEffect } from "react";
import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Group, Box, LoadingOverlay } from "@mantine/core";
import { LoginProps, schema } from "@/types/login";
import { login } from "@/services/login";
import { useUserStore } from "@/store/user";



export default function Login() {
  const [visible, setVisible] = React.useState(false);
  let navigate = useNavigate();

  const { getToken, setToken } = useUserStore()

  useEffect(() => {
    if (typeof getToken() == 'string') {
      navigate("/users");
    }
  }, [getToken, navigate])

  if (typeof getToken() == 'string') {
    navigate("/users");
  }

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  async function handleSubmit(values: LoginProps) {
    setVisible(true);
    console.log(values);
    const { email, password } = values;
    try {
      const response = await login({ email, password });
      setVisible(false);
      setToken(response.token);
      navigate("/users");
    } catch (error) {
      setVisible(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-200">
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 3 }}
        />
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="w-[350px] lg:w-[400px] flex flex-col justify-start items-start gap-6 shadow-custom p-10 rounded-xl bg-white"
        >
          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps("email")}
            className="w-full"
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...form.getInputProps("password")}
            className="w-full"
          />
          <Group mt="md" className="w-full">
            <Button type="submit" fullWidth variant="filled">
              Login
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}

