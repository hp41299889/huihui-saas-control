import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return <Box minHeight={"100vh"}>{children}</Box>;
};

export default Layout;
