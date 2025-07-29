"use client";

import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Submitted data:", data);
    // Your submission logic here (e.g., fetch to an API)
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{ required: "Message is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Message"
            multiline
            rows={4}
            error={!!errors.message}
            helperText={errors.message?.message}
            fullWidth
          />
        )}
      />

      <Button type="submit" variant="contained" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </Box>
  );
}