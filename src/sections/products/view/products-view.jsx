import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { users } from 'src/_mock/user';
import { products } from 'src/_mock/products';

import ProductDetailCard from 'src/sections/product-detail/product-detail';

import './style.css'; 
import ProductCard from '../product-card';
/* import ProductSort from '../product-sort'; */
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';



// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isFav, setFav] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleFav = () => {
    setFav(true);
  };

  // Methond permettant de gerer l'affichage du produit 
  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    setSelectedProduct(product);
    setOverlayVisible(true);
    console.log(overlayVisible);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setSelectedProduct(null);
  };

  const handleWhatsAppClick = () => {
    console.log('whatsApp open')
  };
  
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Favoris 
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

         {/*  <ProductSort /> */}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard  
            product={product} 
            user={users[0]} 
            isFav={isFav} 
            setFav={handleFav}
            onProductClick={() => handleProductClick(product)}  
            />
          </Grid>
        ))}
      </Grid>

      {overlayVisible && (
        <div
        className="overlay"
       /*  onClick={closeOverlay}
        onKeyDown={ closeOverlay} */
        tabIndex="0"
        role="button"
        aria-label="Close overlay"
        >
          <div
            className="overlay-content"
            /* onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()} */
            /* tabIndex="0" */
            role="dialog"
          >
          
            <h2>{selectedProduct.name}</h2>
              <ProductDetailCard 
               selectedProduct={selectedProduct}
               sellerUser={selectedProduct.user}
               overlayVisible={overlayVisible}
               handleCloseOverlay={closeOverlay}
               handleFav={handleFav}
               handleWhatOnclik={handleWhatsAppClick}
               />
            <button type="button" onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}

      <ProductCartWidget />
    </Container>
  );
}
