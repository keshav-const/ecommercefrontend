// import { Grid, Link, Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
//       <Grid  item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Company
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           About
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Blog
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Jobs
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Press
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Partners
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Solutions
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Marketing
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Analytics
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Commerce
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Insights
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Support
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Documentation
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Guides
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           API Status
//         </Typography>
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <Typography className='pb-5' variant="h6" gutterBottom>
//           Legal
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Claim
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Privacy
//         </Typography>
//         <Typography variant="body2" component="p" gutterBottom>
//           Terms
//         </Typography>
//       </Grid>
//       <Grid className='pt-20' item xs={12} >
//         <Typography variant="body2" component="p" align="center">
//           &copy; 2025 My Company. All rights reserved.
//         </Typography>
//         <Typography variant="body2" component="p" align="center">
//           Made with love by Us.
//         </Typography>
        
//       </Grid>
//     </Grid>
//   );
// };

// export default Footer;
// import { Grid, Typography, Box, Container } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: 'black', color: 'white', pt: 6, pb: 4, width: '100%' }}>
//       {/* Direct Grid without Container to allow full stretch */}
//       <Grid container spacing={4} sx={{ px: { xs: 4, md: 10 } }}>
//         {/* Company */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom color="white">Company</Typography>
//           {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((text) => (
//             <Typography variant="body2" gutterBottom key={text} color="white">
//               {text}
//             </Typography>
//           ))}
//         </Grid>

//         {/* Solutions */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom color="white">Solutions</Typography>
//           {['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'].map((text) => (
//             <Typography variant="body2" gutterBottom key={text} color="white">
//               {text}
//             </Typography>
//           ))}
//         </Grid>

//         {/* Documentation */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom color="white">Documentation</Typography>
//           {['Guides', 'API Status'].map((text) => (
//             <Typography variant="body2" gutterBottom key={text} color="white">
//               {text}
//             </Typography>
//           ))}
//         </Grid>

//         {/* Legal */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom color="white">Legal</Typography>
//           {['Claim', 'Privacy', 'Terms'].map((text) => (
//             <Typography variant="body2" gutterBottom key={text} color="white">
//               {text}
//             </Typography>
//           ))}
//         </Grid>
//       </Grid>

//       {/* Copyright */}
//       <Box sx={{ mt: 6, textAlign: 'center' }}>
//         <Typography variant="body2" color="white" gutterBottom>
//           &copy; 2025 My Company. All rights reserved.
//         </Typography>
//         <Typography variant="body2" color="white" gutterBottom>
//           Made with love by Me.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
import { Grid, Typography, Box, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">Company</Typography>
            {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((text) => (
              <Typography variant="body2" gutterBottom key={text} color="white">
                {text}
              </Typography>
            ))}
          </Grid>

          {/* Solutions */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">Solutions</Typography>
            {['Marketing', 'Analytics', 'Commerce', 'Insights', 'Support'].map((text) => (
              <Typography variant="body2" gutterBottom key={text} color="white">
                {text}
              </Typography>
            ))}
          </Grid>

          {/* Documentation */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">Documentation</Typography>
            {['Guides', 'API Status'].map((text) => (
              <Typography variant="body2" gutterBottom key={text} color="white">
                {text}
              </Typography>
            ))}
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="white">Legal</Typography>
            {['Claim', 'Privacy', 'Terms'].map((text) => (
              <Typography variant="body2" gutterBottom key={text} color="white">
                {text}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ mt: 6, borderTop: '1px solid gray', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" gutterBottom color="white">
            &copy; 2025 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" color="white">
            Made with love by Us.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
