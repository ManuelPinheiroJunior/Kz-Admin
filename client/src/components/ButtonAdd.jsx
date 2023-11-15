import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import { DownloadOutlined } from '@mui/icons-material';

export default function ButtonAdd({ addButton, reportButton }) {
    const theme = useTheme();

  return (
    <Stack spacing={2} direction="row">
      { addButton && (<Button variant="contained" startIcon={<AddIcon />} sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
      }}>to Add</Button> )}
     { reportButton && (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            startIcon={ <DownloadOutlined  />}
          >
            Download Reports
          </Button>
        )}
    </Stack>
  );
}

