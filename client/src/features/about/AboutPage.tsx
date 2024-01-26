import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const AboutPage = () => {
  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        About Re-Store
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              alt="Re-Store Logo"
              src='https://i.pinimg.com/736x/b2/7b/cb/b27bcb31c8dfc764da561147c3784b83.jpg'
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Welcome to Re-Store!
              </Typography>
              <Typography variant="body1" paragraph>
                Re-Store is your one-stop destination for all your shopping needs. We pride ourselves on offering a wide range of high-quality products, from electronics to fashion, at competitive prices.
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to provide a seamless and enjoyable shopping experience for our customers. With a user-friendly website and a secure checkout process, we strive to make your online shopping experience hassle-free.
              </Typography>
              <Typography variant="body1" paragraph>
                Thank you for choosing Re-Store. We look forward to serving you and making your shopping experience exceptional.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
