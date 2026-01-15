// import { ApexOptions } from 'apexcharts';
import type { ApexOptions } from 'apexcharts';

import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Stack, { StackProps } from '@mui/material/Stack';

import { fNumber } from 'src/utils/format-number';

import { ColorSchema } from 'src/theme/palette';

import Iconify from 'src/components/iconify';
import Chart from 'src/components/chart';
import useChart from 'src/components/chart/use-chart';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  icon: string;
  title: string;
  total: number;
  color?: ColorSchema;
  chart: {
    color?: string[];
    series: number;
    options?: ApexOptions;
  };
}

export default function AppWidget({
  title,
  total,
  icon,
  color = 'primary',
  chart,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const { series, options } = chart;

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: theme.palette[color].light, opacity: 1 },
          { offset: 100, color: theme.palette[color].main, opacity: 1 },
        ],
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '78%',
        },
        track: {
          margin: 0,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 6,
            color: theme.palette.common.white,
            fontSize: theme.typography.subtitle2.fontSize as string,
          },
        },
      },
    },
    ...options,
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        p: 3,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        color: 'common.white',
        bgcolor: `${color}.dark`,
        ...sx,
      }}
      {...other}
    >
      <Chart
        dir="ltr"
        type="radialBar"
        series={[series]}
        options={chartOptions}
        width={86}
        height={86}
      />

      <ListItemText
        sx={{ ml: 3 }}
        primary={fNumber(total)}
        secondary={title}
        primaryTypographyProps={{
          typography: 'h4',
          component: 'span',
        }}
        secondaryTypographyProps={{
          color: 'inherit',
          component: 'span',
          sx: { opacity: 0.64 },
          typography: 'subtitle2',
        }}
      />
      <Iconify
        icon={icon}
        sx={{
          width: 112,
          right: -32,
          height: 112,
          opacity: 0.08,
          position: 'absolute',
        }}
      />
    </Stack>
  );
}

