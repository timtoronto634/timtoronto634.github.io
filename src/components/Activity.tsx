import { Stack, Typography, Paper, ListItem, ListItemText, Divider } from '@mui/material';
import blogData from '../data/blog.yml';

interface BlogPost {
  title: string;
  url: string;
  date?: string;
  language: string;
}

interface CommunityInvolvement {
  title: string;
  description: string;
  period: string;
}

interface EventAttendance {
  title: string;
  date: string;
  location: string;
}

interface BlogData {
  community_involvement: CommunityInvolvement[];
  event_attendance: EventAttendance[];
  personal_blogs: BlogPost[];
  company_blogs: BlogPost[];
}

interface CommunityInvolvementSectionProps {
  items: CommunityInvolvement[];
}

const CommunityInvolvementSection: React.FC<CommunityInvolvementSectionProps> = ({ items }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant='h6' sx={{ color: '#333', mb: 2, fontWeight: 'bold' }}>
      Community Involvement
    </Typography>
    <Stack divider={<Divider />} spacing={2}>
      {items.map((item, index) => (
        <Stack key={index} spacing={1}>
          <Typography variant='subtitle1' sx={{ color: '#333', fontWeight: 500 }}>
            {item.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'grey.600' }}>
            {item.description}
          </Typography>
          <Typography variant='body2' sx={{ color: 'grey.600' }}>
            {item.period}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Paper>
);

interface EventAttendanceSectionProps {
  items: EventAttendance[];
}

const EventAttendanceSection: React.FC<EventAttendanceSectionProps> = ({ items }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant='h6' sx={{ color: '#333', mb: 2, fontWeight: 'bold' }}>
      Event Attendance
    </Typography>
    <Stack divider={<Divider />} spacing={2}>
      {items.map((item, index) => (
        <Stack key={index} spacing={1}>
          <Typography variant='subtitle1' sx={{ color: '#333', fontWeight: 500 }}>
            {item.title}
          </Typography>
          <Stack direction='row' spacing={2}>
            <Typography variant='body2' sx={{ color: 'grey.600' }}>
              {item.date}
            </Typography>
            <Typography variant='body2' sx={{ color: 'grey.600' }}>
              {item.location}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  </Paper>
);

const Title: React.FC = () => (
  <Typography variant='h5' sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Activity
  </Typography>
);

interface BlogSectionProps {
  title: string;
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, posts }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant='h6' sx={{ color: '#333', mb: 2, fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Stack divider={<Divider />} spacing={2}>
      {posts.map((post, index) => (
        <ListItem
          key={index}
          component='a'
          href={post.url}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            display: 'block',
            '&:hover': {
              backgroundColor: 'rgba(74, 144, 226, 0.1)',
              cursor: 'pointer',
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
  const data = blogData as BlogData;

  return (
    <Stack spacing={4}>
      <Title />
      {data.community_involvement && data.community_involvement.length > 0 && (
        <CommunityInvolvementSection items={data.community_involvement} />
      )}
      {data.event_attendance && data.event_attendance.length > 0 && (
        <EventAttendanceSection items={data.event_attendance} />
      )}
      {data.personal_blogs && data.personal_blogs.length > 0 && (
        <BlogSection title='Personal Blog Sites' posts={data.personal_blogs} />
      )}
      {data.company_blogs && data.company_blogs.length > 0 && (
        <BlogSection title='Company Blog Posts' posts={data.company_blogs} />
      )}
      {!data.community_involvement?.length &&
        !data.event_attendance?.length &&
        !data.personal_blogs?.length &&
        !data.company_blogs?.length && (
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant='body1' sx={{ color: 'grey.600', textAlign: 'center' }}>
              No activity data found
            </Typography>
          </Paper>
        )}
    </Stack>
  );
};
