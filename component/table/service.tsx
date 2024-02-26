import { getService } from "@/util/client/api";
import { useFetchData } from "@/util/hook/useFetchData";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const head = [{ label: "名稱" }, { label: "描述" }, { label: "URL" }];

const ServiceTable = () => {
  const [data, mutate] = useFetchData("service", getService);

  return (
    <Box>
      {data && (
        <Table>
          <TableHead>
            <TableRow>
              {head.map((h) => (
                <TableCell>{h.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.description}</TableCell>
                <TableCell>{d.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default ServiceTable;
