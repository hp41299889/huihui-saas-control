"use client";
import { Box, Button, TextField } from "@mui/material";
import { Prisma } from "@prisma/client";
import { useForm } from "react-hook-form";

interface Props {
  setOpen: (o: boolean) => void;
}
const ServiceForm = (props: Props) => {
  const { setOpen } = props;
  const { register, handleSubmit } = useForm<Prisma.ServiceCreateInput>();

  const onClose = () => setOpen(false);
  const onSubmit = async (p: Prisma.ServiceCreateInput) => {
    try {
      console.log("submit service form");
      const res = await ;
      onClose();
    } catch (error) {}
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name")}
        label="name"
        variant="standard"
        margin="dense"
      />
      <TextField
        {...register("description")}
        label="description"
        variant="standard"
        margin="dense"
        fullWidth
      />
      <TextField
        {...register("url")}
        label="url"
        variant="standard"
        margin="dense"
        fullWidth
      />
      <Button onClick={onClose}>Cancel</Button>
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default ServiceForm;
