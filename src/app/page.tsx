"use client";

import { Stack, Typography, Container } from "@mui/material";
import React, { useState } from "react";
import ItemCart from "./item-cart";

export default function Home() {
  const [total, setTotal] = useState(0);

  const handleIncremental = (itemPrice:number) => {
    setTotal((prevTotal) => prevTotal + itemPrice);
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString("en-US") + " บาท";
  };

  const myItems = [
    {
      itemname: "iPhone 15 Pro",
      price: 42900,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpSmxYQjVYZHNNY2VTR1JzeGdDU0p5NDBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0NpaDU1ZGJEVWtLTUtjeDlDZWZmZ1lmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1",
    },
    {
      itemname: "iPhone 15",
      price: 32900,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L2RJbmltQWhGZkQyVGNjT3IyemNOZWd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkc5RGRYNnhoUFdnYk5iSlJkSmMrbGk=&traceId=1",
    },
    {
      itemname: "iPad Pro",
      price: 32900,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsN2dzSmpObkZCM3MrNmJ5SkhESlNDanBrYXdkcis1Uk0vQlpCanJ0UlArSUpFd0xhWDVibStLdGRYRmxkNGI4VTdpMGJRT0ppMjh4RlRZQkc0Q3FZZENZSGV2NXg0cW1qV09yVTZHRnVkUFQ=&traceId=1",
    },
    {
      itemname: "iPad Air",
      price: 24900,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-13inch-space-gray?wid=5120&hei=2880&fmt=webp&qlt=70&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5VE52YTlHWkltOWpNQVF4Y3VwTzdmWDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXNJaUU3bjFPek1wQzI4QWtZRmJaUUZjcG9YMXdzaldwenU3RERvTWxsU1BBPT0=&traceId=1",
    },
    {
      itemname: "iPad",
      price: 17900,
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-storage-select-202212-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=K0VQT3FFaHFhTWU0ME1DRnlHMFM3bEIvTXY5NjBUQVhVcnFORUt4SFI2QXVydldlTjVqQnhYWVhaM3FCVnF1VE9UVDVQbVhkcDIxQlRzeDZXVVpQSzF6enlSazFhbGkvR0NiVTdBeWRQTnlZZ2lWdVRBc0YzbEJkM3NURkZpSy8=&traceId=1",
    },
    {
      itemname: "MacBook Air",
      price: 39900,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
    },
    {
      itemname: "MacBook Pro",
      price: 49900,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200",
    },
    {
      itemname: "iMac",
      price: 47900,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-silver-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618",
    },
    {
      itemname: "Mac mini",
      price: 22900,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708",
    },
    {
      itemname: "Mac Studio",
      price: 69900,
      img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143",
    },
  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Shopping Cart
      </Typography>
      {myItems.map((item) => (
        <ItemCart
          key={item.itemname}
          itemname={item.itemname}
          itemPrice={item.price}
          img={item.img}
          handleIncremantal={handleIncremental}
        />
      ))}
      <Stack direction="row" spacing={2} mt={4}>
        <Typography variant="h4">Total</Typography>
        <Typography variant="h4">{formatPrice(total)}</Typography>
      </Stack>
    </Container>
  );
}
