import { Skeleton as SkeletonMui, Stack } from "@mui/material";

export default function Skeleton() {
  return (
    <Stack spacing={1} className="w-[80%] mx-auto ">
      <SkeletonMui
        animation="pulse"
        sx={{ bgcolor: "#5c677d" }}
        height={5}
        variant="rounded"
        className="w-full"
      />
    </Stack>
  );
}
