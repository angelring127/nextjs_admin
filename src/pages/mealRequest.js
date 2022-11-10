import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";

const Page = () => (
  <>
    <Head>
      <title>AgeAge | 食事箋管理</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          食事箋管理
        </Typography>
        <Grid container spacing={3}></Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
