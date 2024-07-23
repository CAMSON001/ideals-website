import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import Label from 'src/components/label';
/* import { ColorPreview } from 'src/components/color-utils'; */

// ----------------------------------------------------------------------

export default function ShopProductCard({ product, user, isFav, setFav }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'premium' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        left: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  
  const renderFavorite = (
    <Box onClick={setFav}
      component="img"
      alt={product.name}
      src="dist/assets/icons/heart-svgrepo-com.svg"
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        width: 15,
        height: 15,
        /* objectFit: 'cover', */
        position: 'absolute',
      }}
    />
  );

  const renderUser = (
    <Stack direction="column" spacing={1}  
    sx={{ 
      zIndex: 9,
      bottom: 10,
      right: 14,
      position: 'absolute',
      
      alignItems: 'center',
      
      
       }}>
       <Box
      component="img"
      alt={user.name}
      src={user.avatarUrl}
      sx={{

        width: 30,
        height: 30,
        borderRadius: 10,
       /*  objectFit: 'cover', */
        
      }}
    />

    <Typography
        variant="body1"
        sx={{
          color: 'text',
          
        }}
      >
       { user.name}
      </Typography>

    </Stack>
   
    
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {/* {product.priceSale && fCurrency(product.priceSale)} */}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status && renderStatus}
        {renderFavorite && isFav}
        {renderImg}
      </Box>

      <Stack spacing={1} sx={{ p: 1 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
          
        </Link>
        {renderPrice}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={product.colors} /> */}
          A {product.cityOfSale}
        </Stack>
        {renderUser}

      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
  user: PropTypes.object,
  isFav: PropTypes.bool,
 setFav: PropTypes.func.isRequired,
};
