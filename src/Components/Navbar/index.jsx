import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Link, IconButton, Typography, Box } from '@mui/material';



export const Navbar = () => {
  
  const urlList = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/JHDEZ1108',
      icon: <TwitterIcon sx={{ fontSize: '2rem', color: "#2563eb" }} />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jhdez1108/',
      icon: <InstagramIcon sx={{ fontSize: '2rem', color: "#dc2626" }} />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/JHDEZ1108/pokeRedux',
      icon: <GitHubIcon sx={{ fontSize: '2rem', color: "#3cab91"}} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jhdez1108/',
      icon: <LinkedInIcon sx={{ fontSize: '2rem', color: "#2563eb" }} />
    }
  ];
  
  return (
    <Box  sx={{
      backgroundColor: "#343541",
      width: "100%",
      marginBottom: "1rem",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ p: 2 }} >
        {urlList.map((url) => (
          <Grid item key={url.name}>
            <Link href={url.href} target="_blank" rel="noreferrer" underline="none">
              <IconButton sx={{ transition: 'transform 250ms', '&:hover': { transform: 'scale(1.5)' } }}>
                {url.icon}
              </IconButton>
            </Link>
          </Grid>
        ))}
        <Grid item>
          <Typography variant="body1" sx={{ fontSize: '0.8rem', transition: 'color 500ms', color: '#ffffff' }}>
            Made by{' '}
            <Link href="https://github.com/JHDEZ1108" target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: 'blue.600', textDecorationOffset: '2px', transition: 'color 500ms', '&:hover': { color: '#c5a102' } }}>
              Josué Hernández
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
