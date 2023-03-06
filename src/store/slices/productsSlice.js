import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Snake King",
    price: 100,
    color: "brown",
    pictureSrc:
      "https://kartinkof.club/uploads/posts/2022-03/1648658613_5-kartinkof-club-p-smeshnaya-obuv-kartinki-5.jpg",
  },
  {
    id: 2,
    name: "Crocodiloes",
    price: 200,
    color: "grey",
    pictureSrc:
      "https://avatars.mds.yandex.net/i?id=0399a7166e928d9a14ff3b08a02e95ff06f826a4-8350343-images-thumbs&n=13",
  },
  {
    id: 3,
    name: "Abidas",
    price: 300,
    color: "black",
    pictureSrc:
      "https://krot.info/uploads/posts/2022-03/1646711688_9-krot-info-p-smeshnie-krossovki-smeshnie-foto-10.jpg",
  },
  {
    id: 4,
    name: "Molewalkers",
    price: 400,
    color: "brown",
    pictureSrc: "https://flo.com.ua/download/file.php?id=58957",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, products) {
      state = products;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
