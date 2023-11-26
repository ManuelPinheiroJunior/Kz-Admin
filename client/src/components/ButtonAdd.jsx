import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';
import { DownloadOutlined } from '@mui/icons-material';
import { usePostProductMutation } from 'state/api';

const data = {
  _id: "63701d24f03239c72c00118e",
  name: "Port Beckley",
  price: 311.71,
  description: "MyProduct",
  category: "clothing",
  rating: 1.15,
  supply: 1320,
};

export default function ButtonAdd({ addButton, reportButton }) {
    const theme = useTheme();
    const [postProduct, { isLoading }] = usePostProductMutation();


    const handleAdd = async (e) => {
        e.preventDefault();
       if(e.type === "click"){
         await postProduct(data);
       }
    }


  return (
    <Stack spacing={2} direction="row">
      { addButton && (<Button variant="contained" startIcon={<AddIcon />} sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
      }} onClick={(e) => handleAdd(e)}>to Add</Button> )}
     { reportButton && (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                cursor: "pointer",
                color: theme.palette.secondary.main,
              },

            }}
            startIcon={ <DownloadOutlined  />}
          >
            Download Reports
          </Button>
        )}
    </Stack>
  );
}

