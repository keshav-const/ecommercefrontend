// import { Button, Grid, Typography } from '@mui/material'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <Grid className="bg-black text-white text-center mt-10"
//         container
//         sx={{bgcolor:"black",color:"white",py:5,px:3,
//             //display: "flex",
//            justifyContent: "space-between",
//            //flexWrap: "wrap",
//            //rowGap: 4,
//         }}>
//             <Grid item xs={12} sm={6} md={3}>
//                 <Typography className='pb-5' variant='h6'> Company </Typography>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> About </Button>

//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Blog </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Press </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Jobs </Button>
//                 </div>   
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//                 <Typography className='pb-5' variant='h6'> Company </Typography>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> About </Button>

//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Blog </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Press </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Jobs </Button>
//                 </div>   
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//                 <Typography className='pb-5' variant='h6'> Company </Typography>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> About </Button>

//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Blog </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Press </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Jobs </Button>
//                 </div>   
//             </Grid>

//             <Grid item xs={12} sm={6} md={3}>
//                 <Typography className='pb-5' variant='h6'> Company </Typography>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> About </Button>

//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Blog </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Press </Button>
//                 </div>
//                 <div>
//                 <Button className='pb-5 cursor-pointer' variant='h6' gutterBottom> Jobs </Button>
//                 </div>   
//             </Grid>
//             <Grid className="pt-20" item xs={12}>
//                 <Typography variant='body2' component="p" align="center">
//                     &copy;2025 My Company. All rights reserved.
//                 </Typography>
//                 <Typography variant='body2' component="p" align="center">
//                     Made with love by us.
//                 </Typography>
//             </Grid>
//         </Grid>
//     </div>
//   )
// }

// export default Footer


import { Button, Grid, Typography, Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', pt: 8, px: { xs: 3, md: 10 } }}>
      
      {/* Top 4 Columns */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Column 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Company</Typography>
          {["About", "Blog", "Jobs", "Press", "Partners"].map((text, idx) => (
            <Button
              key={idx}
              sx={{ color: 'white', display: 'block', textTransform: 'none', px: 0 }}
              disableRipple
            >
              {text}
            </Button>
          ))}
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Solutions</Typography>
          {["Marketing", "Analytics", "Commerce", "Insights", "Support"].map((text, idx) => (
            <Button
              key={idx}
              sx={{ color: 'white', display: 'block', textTransform: 'none', px: 0 }}
              disableRipple
            >
              {text}
            </Button>
          ))}
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Documentation</Typography>
          {["Guides", "API Status"].map((text, idx) => (
            <Button
              key={idx}
              sx={{ color: 'white', display: 'block', textTransform: 'none', px: 0 }}
              disableRipple
            >
              {text}
            </Button>
          ))}
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Legal</Typography>
          {["Claim", "Privacy", "Terms"].map((text, idx) => (
            <Button
              key={idx}
              sx={{ color: 'white', display: 'block', textTransform: 'none', px: 0 }}
              disableRipple
            >
              {text}
            </Button>
          ))}
        </Grid>
      </Grid>

      {/* Separated Bottom Section */}
      <Box sx={{ pt: 8, textAlign: 'center' }}>
        <Typography variant='body2'>&copy; 2025 My Company. All rights reserved.</Typography>
        <Typography variant='body2'>Made with love by us.</Typography>
      </Box>
    </Box>
  )
}

export default Footer


// import { Button, Grid, Typography } from "@mui/material";
// import React from "react";

// const footerData = [
//   {
//     title: "Company",
//     links: ["About", "Blog", "Jobs", "Press", "Partners"],
//   },
//   {
//     title: "Solutions",
//     links: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
//   },
//   {
//     title: "Documentation",
//     links: ["Guides", "API Status"],
//   },
//   {
//     title: "Legal",
//     links: ["Claim", "Privacy", "Terms"],
//   },
// ];

// const Footer = () => {
//   return (
//     <div>
//       <Grid
//         container
//         sx={{
//           bgcolor: "black",
//           color: "white",
//           py: 6,
//           px: { xs: 2, md: 10 },
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           rowGap: 4,
//         }}
//       >
//         {footerData.map((section, index) => (
//           <Grid item xs={12} sm={6} md="auto" key={index}>
//             <Typography variant="h6" sx={{ pb: 2 }}>
//               {section.title}
//             </Typography>
//             {section.links.map((link, i) => (
//               <div key={i}>
//                 <Button
//                   sx={{
//                     color: "white",
//                     textTransform: "none",
//                     py: 0.5,
//                     minWidth: 0,
//                   }}
//                   disableRipple
//                 >
//                   {link}
//                 </Button>
//               </div>
//             ))}
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Footer;

