"use client";

import ServiceForm from "@/component/form/service";
import ServiceTable from "@/component/table/service";
import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

const Page = () => {
  const [formModalOpen, setFormModalOpen] = useState<boolean>(false);

  const onCloseModal = () => {
    setFormModalOpen(false);
  };

  const onNewService = () => {
    setFormModalOpen(true);
  };

  return (
    <Box>
      <Button onClick={onNewService}>new service</Button>
      <Dialog open={formModalOpen} onClose={onCloseModal}>
        <DialogTitle>service</DialogTitle>
        <DialogContent>
          <ServiceForm setOpen={setFormModalOpen} />
        </DialogContent>
      </Dialog>
      <ServiceTable />
    </Box>
  );
};

export default Page;
