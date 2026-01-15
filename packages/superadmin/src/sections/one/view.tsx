import { Container, Grid, Typography } from '@mui/material';

import { useSettingsContext } from 'src/components/settings';
import AppWidget from 'src/components/overview/AppWidgets';
import AppAreaInstalled from 'src/components/overview/app-area-installed';
import EcommerceYearlySales from 'src/components/overview/ecommerce-yearly-sales';
import LatestProducts from 'src/components/overview/latest-products';
import LatestOrders from 'src/components/overview/latest-orders';

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <AppWidget
            title="Users"
            total={38566}
            icon="solar:user-rounded-bold"
            chart={{
              series: 48,
            }}
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <AppWidget
            title="Products"
            total={555}
            icon="fluent:mail-24-filled"
            color="info"
            chart={{
              series: 75,
            }}
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <AppWidget
            title="Orders"
            total={1234}
            icon="solar:cart-large-2-bold"
            color="success"
            chart={{
              series: 64,
            }}
          />
        </Grid>

        <Grid item xs={12} lg={3}>
          <AppWidget
            title="Pending Payments"
            total={876}
            icon="solar:wallet-bold"
            color="warning"
            chart={{
              series: 32,
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Left Component */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EcommerceYearlySales
            title="Yearly Sales"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Total Income',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Total Income',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        {/* Right Component */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <AppAreaInstalled
            title="User Growth"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Users',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Left Component */}
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <LatestOrders />
        </Grid>

        {/* Right Component */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <LatestProducts />
        </Grid>
      </Grid>
    </Container >
  );
}
