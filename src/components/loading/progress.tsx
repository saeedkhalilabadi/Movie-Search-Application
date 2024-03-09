import { LinearProgress,  Stack } from "@mui/material";

export default function Progress() {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
    <LinearProgress color="secondary" />
    </Stack>
  );
}
