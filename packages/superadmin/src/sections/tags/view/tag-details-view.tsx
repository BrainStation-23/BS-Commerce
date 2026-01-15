import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BackButton from 'src/components/back-button';
import { paths } from 'src/routes/paths';
import { Tag } from 'src/types/tags';
import Label from 'src/components/label';

type Props = {
  tag: Tag;
};

export default function TagView({ tag }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Grid xs={12}>
          <CustomBreadcrumbs
            heading="Tag Details"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Tag List', href: paths.tags.root },
              { name: 'Tag Details', href: '#' },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
            convertToTitleCase={false}
          />
        </Grid>
        <Card sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <BackButton />
            <Stack direction="row" spacing={2}>
              {tag.isHomePageProductsTag && (
                <Label variant="soft" color="info">Home Page Products Tag</Label>
              )}
            </Stack>
          </Box>

          {/* Basic Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Basic Information
            </Typography>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
              sx={{ mb: 3 }}
            >
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Tag Name
                </Typography>
                <Typography variant="body1">{tag.name || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Is Home Page Products Tag
                </Typography>
                <Typography variant="body1">{tag.isHomePageProductsTag ? 'Yes' : 'No'}</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
