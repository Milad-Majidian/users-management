import React from "react";

import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

import { TextInput, Button, Group, Box, LoadingOverlay } from "@mantine/core";
import { LoginProps, schema } from "@/types/login";
import { login } from "@/services/login";

function Login() {
  const [visible, setVisible] = React.useState(false);
  let navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
    // validationRules: {
    //   email: (value: string) => /^\S+@\S+\.\S+$/.test(value),
    //   password: (value: string) => value.length >= 6,
    // },
  });
  // form.validate();
  // form.errors;

  async function handleSubmit(values: LoginProps) {
    setVisible(true);
    console.log(values);
    const { email, password } = values;
    try {
      const response = await login({ email, password });
      setVisible(false);
      console.log(response);
      localStorage.setItem("dashboard_token", response.token);
      navigate("/users");
      // localStorage.getItem("lastname");
    } catch (error) {
      setVisible(false);
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
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

export default Login;

// <TextInput
//   label="Email"
//   placeholder="Enter your email"
//   value={form.values.email}
//   onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
//   error={form.errors.email && "Invalid email"}
//   required
//   className="w-full"
// />;
