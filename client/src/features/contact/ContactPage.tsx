import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';


export default function ContactPage() {
    return (
        <>
            <div>
            <Typography variant="h3">Reach Us At</Typography>
            <List sx={{ marginLeft: 10 }}>
                <ListItem>
                <ListItemText primary="+91-8601042544" />
                </ListItem>
                <ListItem>
                <ListItemText
                    primary={
                    <Link href="mailto:ekramahmad560@gmail.com">
                        Email: ekramahmad560@gmail.com
                    </Link>
                    }
                />
                </ListItem>
                <ListItem>
                <ListItemText
                    primary="Address: A-143, 9th Floor, Sector-136, Noida, Uttar Pradesh"
                />
                </ListItem>
            </List>
            </div>
            <form>
      <p>Feedback and Queries</p>
      <div>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Select Issue*</InputLabel>
          <Select>
            <MenuItem value="">
              -- Select Your Query --
            </MenuItem>
            <MenuItem value="Feedback">Feedback</MenuItem>
            <MenuItem value="Product Related Queries">Product Related Queries</MenuItem>
            <MenuItem value="Payment Related Issue">Payment Related Issue</MenuItem>
            <MenuItem value="Delivery Related Queries">Delivery Related Queries</MenuItem>
            <MenuItem value="Advertise With Us">Advertise With Us</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Email Address*"
          type="email"
          placeholder="ekramahmad560@gmail.com"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Contact No."
          type="text"
          placeholder="1324567890"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Drop Your Query"
          placeholder="Max Allowed Characters: 300"
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="button">
          Submit
        </Button>
      </div>
    </form>
        </>

    )
}