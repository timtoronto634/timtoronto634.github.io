import { Stack, Typography, Paper, ListItem, ListItemText, Divider } from '@mui/material';

interface BlogPost {
  title: string;
  date?: string;
  link?: string;
}

const Title: React.FC = () => (
  <Typography variant='h5' sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Activity
  </Typography>
);

interface BlogSectionProps {
  language: string;
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ language, posts }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant='h6' sx={{ color: '#333', mb: 2 }}>
      {language}
    </Typography>
    <Stack divider={<Divider />} spacing={2}>
      {posts.map((post, index) => (
        <ListItem
          key={index}
          component='a'
          href={post.link}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            display: 'block',
            '&:hover': {
              backgroundColor: 'rgba(74, 144, 226, 0.1)',
              cursor: post.link ? 'pointer' : 'default',
            },
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <ListItemText
            primary={
              <Typography variant='subtitle1' sx={{ color: '#333', fontWeight: 500 }}>
                {post.title}
              </Typography>
            }
            secondary={
              post.date && (
                <Typography variant='body2' sx={{ color: 'grey.600' }}>
                  {post.date}
                </Typography>
              )
            }
          />
        </ListItem>
      ))}
    </Stack>
  </Paper>
);

export const Activity: React.FC = () => {
  const japanesePosts: BlogPost[] = [
    {
      title: '【AWS re:Invent 2024】',
      date: '2024-01',
      // Add link when available
    },
    // Add more Japanese posts here
  ];

  const englishPosts: BlogPost[] = [
    // Add English posts when available
  ];

  return (
    <Stack spacing={4}>
      <Title />
      {japanesePosts.length > 0 && <BlogSection language='Japanese' posts={japanesePosts} />}
      {englishPosts.length > 0 && <BlogSection language='English' posts={englishPosts} />}
      {japanesePosts.length === 0 && englishPosts.length === 0 && (
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant='body1' sx={{ color: 'grey.600', textAlign: 'center' }}>
            Activity posts coming soon...
          </Typography>
        </Paper>
      )}
    </Stack>
  );
};
