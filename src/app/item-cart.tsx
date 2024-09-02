import {
  IconButton,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid2,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";
import{ Grid}from "@mui/material";

export default function ItemCart({
  itemname,
  itemPrice,
  img,
  handleIncremantal,
}: {
    itemname: string;
    itemPrice: number;
    img:string;
    handleIncremantal: (itemPrice:number) => void;
  })
{
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("en-US") + " บาท";
  };

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremantal(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleIncremantal(-itemPrice);
    }
  };

  return (
    <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={itemname}
            sx={{ objectFit: 'cover', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {itemname}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton onClick={handleRemoveItemClick}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{count}</Typography>
                <IconButton onClick={handleAddItemClick}>
                  <AddIcon />
                </IconButton>
              </Stack>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {formatPrice(totalPrice)}
              </Typography>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
