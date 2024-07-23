
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import heartOutlined from '@iconify-icons/ant-design/heart-outlined';
import { CRow,CCol,  CImage, CAvatar, CCarousel, CContainer, CCarouselItem} from '@coreui/react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';




export default function ProductDetailCard({ selectedProduct, sellerUser, overlayVisible, handleCloseOverlay, handleFav,handleWhatOnclik} ) {

  const renderInformation = (
    <Stack spacing={1}>
      <CContainer>
        <CRow>
          <CCol>
            <Typography variant="h2" sx={{ ml: 1 }}>
              {selectedProduct.name}
          </Typography>
          </CCol>
          <CCol>{selectedProduct.price}</CCol>
        </CRow>
        <CRow>
          <CCol>
          <Typography variant="h2" sx={{ ml: 1 }}>
              Etat de l&apos;article :
          </Typography>
          </CCol>
          <CCol>
          <Typography variant="h2" sx={{ ml: 1 }}>
            {selectedProduct.state}
          </Typography>
          </CCol>
          <CCol><CAvatar src={sellerUser.image} /></CCol>
        </CRow>
        <CRow>
          <CCol>
          <Typography variant="h2" sx={{ ml: 1 }}>
              Categorie : 
          </Typography>
          </CCol>
          <CCol> 
            <Typography variant="h2" sx={{ ml: 1 }}>
          {selectedProduct.categorie} 
          </Typography>
          </CCol>
          <CCol>
          <Typography variant="h2" sx={{ ml: 1 }}>
          Par {sellerUser.name} 
          </Typography>           
            </CCol>
        </CRow>
        <CRow>
          <CCol>
          <Typography variant="h2" sx={{ ml: 1 }}>
             Description : 
          </Typography>
          </CCol>
  
        </CRow>
        <CRow>
          <CCol>
          <Typography variant="h6" sx={{ ml: 1 }}>
          {selectedProduct.description}
          </Typography>
          </CCol>
  
        </CRow>
        <Box>
        <IconButton onClick={handleWhatOnclik}>
          <WhatsAppIcon />
        </IconButton>
       
        </Box>
       
       

      </CContainer>

    </Stack>
  );

  const renderSlider = (
    <Stack spacing={1}>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" /* src={VueImg} */ alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" /* src={VueImg} */ alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" /* src={VueImg} */ alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      
    </Stack>
  );
 

  return (
    
    
    <Drawer
      anchor="top"
      open={overlayVisible}
      onClose={handleCloseOverlay}
      PaperProps={{
        sx: { width: 350, border: 'none', overflow: 'hidden' },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 1, py: 2 }}
      >
        <Typography variant="h6" sx={{ ml: 1 }}>
         Detail de l&apos;article
        </Typography>
        
        <IconButton onClick={handleCloseOverlay}>
          <Iconify icon="eva:close-fill" />
        </IconButton>
      </Stack>

      <Box>
      <IconButton onClick={handleFav}>
        {selectedProduct.isFav ? <Icon icon="eva:heart-fill" /> : <Icon icon={heartOutlined} />}
        </IconButton>
      </Box>

      <Divider />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          {renderSlider}

          {renderInformation}

    
        </Stack>
      </Scrollbar>

     
    </Drawer>
  
  );
};    

ProductDetailCard.propTypes = {
  sellerUser: PropTypes.object,
  selectedProduct: PropTypes.object,
  handleCloseOverlay: PropTypes.func,
  handleFav: PropTypes.func,
  handleWhatOnclik: PropTypes.func,
  overlayVisible: PropTypes.bool,
 
};
