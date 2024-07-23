
/* import Button from '@mui/material/Button'; */
/* import Grid from '@mui/material/Unstable_Grid2'; */
/* s */
import {Box, Stack,  Container,  Typography } from '@mui/material';

/* 
import { posts } from 'src/_mock/blog'; */

/* import HorizontalLinearAlternativeLabelStepper from '../stepper'; */
import LinaerStepper from '../formContext';



/* import Iconify from 'src/components/iconify'; */

/* import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search'; */

// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Publier une annonce </Typography>

        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button> */}
      </Stack>
      <Box display="flex" justifyContent="center" alignItems="center">
        <LinaerStepper/> 
        
      </Box>
      {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid> */}
    </Container>
  );
}