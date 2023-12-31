const products = [
  {
    id: 1,
    image: 'https://cdna.artstation.com/p/assets/images/images/055/901/706/large/andy-concept-art-51beb918-00ed-4dd7-8180-c0e41cf90483-1-105-c.jpg?1668001657',
    name: 'Hand painted 1',
    description: 'Vintage oil painting portrait of Anne Hathaway',
    price: 690,
    rating: 1
  },
  {
    id: 2,
    image: 'https://i.ebayimg.com/images/g/dl0AAOSworpjxn0a/s-l1200.webp',
    name: 'Hand painted Old Master',
    description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
    price: 459,
    rating: 1
  },
  {
      id: 3,
      image: 'https://i.etsystatic.com/16465191/r/il/7c6ec6/2619896665/il_fullxfull.2619896665_91wr.jpg',
      name: 'Hand painted Landscape',
      description: 'Fall Landscape Oil Painting Autumn Original Art Forest Lake',
      price: 499,
      rating: 3
  },
  {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CHaCF_K3tt1gpEAz0gBo1mTLGgWwtLi3DA&usqp=CAU',
      name: 'Watercolor Hand painted Original',
      description: 'Essential Watercolor Landscape with Frame',
      price: 399,
      rating: 5
  },
  {
      id: 5,
      image: 'https://i.ytimg.com/vi/NnbfBRxlA-4/maxresdefault.jpg',
      name: 'Watercolor Potrait',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 599,
      rating: 2
  },
  {
      id: 6,
      image: 'https://images.meesho.com/images/products/270675330/boale_512.webp',
      name: 'Beautiful Hand Made Scenery',
      description: 'Beautiful Hand Made Scenery Wall Acrylic Painting For Home, Office & Gift Purpose (with out Frame)',
      price: 299,
      rating: 5
  },
  {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/81HhwdphO1L._AC_UF1000,1000_QL80_.jpg',
      name: 'Watercolor Painting Banaras Riverside Scenery',
      description: 'ArtsIndia Ganga Serenity Watercolor Painting',
      price: 399,
      rating: 5
  },
  {
      id: 8,
      image: 'https://www.mayfairgallery.com/media/wysiwyg/a-royal-palace-in-morocco-benjamin-jean-joseph-constant.jpg',
      name: 'Cultural and Historical Themes',
      description: 'Orientalist Paintings: 19th Century Fantasies of the East',
      price: 999,
      rating: 2
  },
  {
      id: 9,
      image: 'https://cdn.dribbble.com/userupload/5788966/file/original-1b92664c937ec82a5c6039c1fe63f7d9.png?resize=400x300&vertical=center',
      name: 'Warercolor Paintings-bird',
      description: 'Handmade painting of gribble graphic elements',
      price: 1299,
      rating: 5
  },
  {
      id: 10,
      image: 'https://5.imimg.com/data5/ANDROID/Default/2020/10/ZH/QL/HP/87662716/product-jpeg-500x500.jpg',
      name: 'Hand painted-religious-god',
      description: 'Religious Painting, Size: 15 X 22 Inches',
      price: 899,
      rating: 2
  },
  {
      id: 11,
      image: 'https://m.media-amazon.com/images/I/814WBFjrMFL._AC_UF1000,1000_QL80_.jpg',
      name: 'Hand painted acrylic paintings-religious-god-sri Krishna',
      description: 'Tamatina Religious Art Canvas Painting | Jai Sri Krishna| God Unframed Painting for Home décor',
      price: 3999,
      rating: 4
  },
  {
      id: 12,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/302654636/AK/TS/SI/71812060/shiv-500x500.jpg',
      name: 'Hand painted Watercolor-shiva',
      description: 'Canvas Paintings Ardhanarishwar Without Frame Modern Art Paintings for Home',
      price: 1299,
      rating: 5
  },
  {
      id: 13,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEfOsqDnueBjCoW3RuidoXf2qH179KoEsrQ&usqp=CAU',
      name: 'acrylic paintings',
      description: 'Christianity Lord Jesus Christ Religious Framed Painting 13 X 19 inches',
      price: 678,
      rating: 4
  },
  {
      id: 14,
      image: 'https://img.freepik.com/premium-photo/beautiful-watercolor-flowers-painting-pastel-mood_710157-506.jpg?w=2000',
      name: 'watercolor flowers painting',
      description: 'Beautiful watercolor flowers painting ',
      price: 2345,
      rating: 5
  },
  {
      id: 15,
      image: 'https://www.erikalancaster.com/uploads/4/4/3/3/4433786/editor/watercolor-dog-by-erika-lancaster.png?1609117676',
      name: 'Hand painted watercolor-dog ',
      description: 'Art Dog cute Oil Painting Portrait on canvas',
      price: 1299,
      rating: 5
  },
  {
      id: 16,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtl_FL8TUvTtiA89rtuIx7RMCVIuOgr7oxQ&usqp=CAU',
      name: 'Hand paint-buddha-acrylic painting',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 1299,
      rating: 5
  },
  {
      id: 17,
      image: 'https://w0.peakpx.com/wallpaper/232/299/HD-wallpaper-buddha-3d-painting-work-lord-buddha-god-meditate-art-work.jpg',
      name: 'Hand painted buddha artwork',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 1299,
      rating: 5
  },
  {
      id: 18,
      image: 'https://i.pinimg.com/736x/99/7d/4f/997d4f727e5e57da919af288d212c65a.jpg',
      name: 'Hand painted girafee with kid-animal-watercolor',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 1299,
      rating: 5
  },
  {
      id: 19,
      image: 'https://www.worldhistory.org/img/c/p/1200x900/12026.jpg',
      name: 'Hand painted Madhubani paintings-cultural',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 1299,
      rating: 5
  },
  {
      id: 20,
      image: 'https://previews.123rf.com/images/kho/kho1208/kho120800117/14795532-beautiful-young-woman-with-long-hair-creative-watercolor-art.jpg',
      name: 'Creative watercolor paintings',
      description: 'Art Antique Oil Painting Portrait Noblewoman on canvas',
      price: 1299,
      rating: 5
  }
];

export default products;
