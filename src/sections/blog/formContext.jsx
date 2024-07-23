import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import Grid from '@mui/material/Unstable_Grid2';
import {Box,  Step, Button,  Select, Stepper, MenuItem,  StepLabel, TextField, InputLabel ,     Typography /* FormControl */} from '@mui/material';

import { users } from 'src/_mock/user';
import { products } from 'src/_mock/products';

import ShopProductCard from "../accueil/product-card";




const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Inserer des images',
    'Informations 1',
   'Informations 2',
    "Vue d'ensemble",
  ];
}
const BasicForm = () => {
  const { control, /* handleSubmit,  */setValue } = useForm();

  /* const onSubmit = (data) => {
    console.log(data);
  }; */

  const handleFileChange = (e) => {
    const file = e.target.files;
    setValue('fileInput', file); 
    console.log(file) // Update the form value with the selected file
  };

  return (
    <>
   
      <Box my={5}>
        <Controller
          control={control}
          name="fileInput"
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <input
              type="file"
              name={name}
              ref={ref}
              onChange={(e) => {
                handleFileChange(e);
                onChange(e);  // This ensures react-hook-form is aware of the change
              }}
              onBlur={onBlur}
              multiple
            />
          )}
        />
      </Box>
      
      
   
  

     {/*  <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}

      {/* <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="prixProduit"
        render={({ field }) => (
          <TextField
            id="prixArticle"
            label="Prix de l'article"
            variant="outlined"
            placeholder="Donner le prix de votre article"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
            control={control}
            name="nomArticle"
            render={({ field }) => (
              <TextField
                id="nomArticle"
                label="Nom de l'article"
                variant="outlined"
                placeholder="Donner le prix de votre article"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
        />

        
              <Box my={2}>
                 
                  <InputLabel id="categorie-label">Catégorie</InputLabel>
                  <Controller control={control} 
                  /* defaultValue={[]} */
                  name="categorie"
                   render={({ field }) => (
                      <Select labelId="categorie-label"  fullWidth
                      
                      margin="normal" id="categorie" label="Catégorie" 
                        {...field}
                      >
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </Select>
                    )}
                  />
              
              </Box>


         
            {/* <Controller
              control={control}
              name="categorie"
              render={({ field }) => (
                <Select
                  labelId="categorie-label"
                  id="categorie"
                  label="Catégorie"
                  multiple
                  {...field}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>

            
              
              )}
            /> */}
     

      

      {/* <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Box my={2}>
                 
                 <InputLabel id="ville-label">Ville</InputLabel>
                 <Controller control={control} 
                 /* defaultValue={[]} */
                 name="ville"
                  render={({ field }) => (
                     <Select labelId="ville-label"  fullWidth
                     
                     margin="normal" id="ville" label="ville" 
                       {...field}
                     >
                       <MenuItem value="option1">Abidjan</MenuItem>
                       <MenuItem value="option2">Bouake</MenuItem>
                       <MenuItem value="option3">Yamoussoukro</MenuItem>
                     </Select>
                   )}
                 />
             
             </Box>

             <Box my={2}>
                 
                 <InputLabel id="commune-label">Commune</InputLabel>
                 <Controller control={control} 
                 /* defaultValue={[]} */
                 name="commune"
                  render={({ field }) => (
                     <Select labelId="commune-label"  fullWidth
                     
                     margin="normal" id="commune" label="commune" 
                       {...field}
                     >
                       <MenuItem value="option1">Cocody</MenuItem>
                       <MenuItem value="option2">Treichville</MenuItem>
                       <MenuItem value="option3">Abobo</MenuItem>
                       <MenuItem value="option3">Koumassi</MenuItem>
                     </Select>
                   )}
                 />
             
             </Box>

             <Box my={2}>
            
                 <InputLabel id="etat-label">L&apos;etat de l&apos;article</InputLabel>
                 <Controller control={control} 
                 /* defaultValue={[]} */
                 name="etat"
                  render={({ field }) => (
                     <Select labelId="etat-label"  fullWidth
                     
                     margin="normal" id="etat" label="Etat" 
                       {...field}
                     >
                       <MenuItem value="option1">Neuf</MenuItem>
                       <MenuItem value="option2">Bon</MenuItem>
                       <MenuItem value="option3">Casi neuf</MenuItem>
                       <MenuItem value="option3">Deuxieme main</MenuItem>
                     </Select>
                   )}
                 />
             
             </Box>



    <Controller
          control={control}
          name="description"
         /*  defaultValue={[]}  */
          render={({ field }) => (
            <TextField
              id="description"
              label="Donner la description de votre article"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
    </>
  );
};
const PaymentForm = () => {
  /* const { control } = useFormContext(); */
  const [isFav, setFav] = useState(false);

  const handleFav = () => {
    setFav(true);
  };

  
  return (
    <>

  <Box my={2}>
                  
    <Grid key={products[0].id} xs={12} sm={6} md={3}>
          <ShopProductCard product={products[0]} user={users[0]} isFav={isFav} setFav={handleFav} />
     </Grid>
      
              
  </Box>

     

      {/* <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => step === 1 || step === 2;
 

  const isStepSkipped = (step) => skippedSteps.includes(step);
 

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((datas) => datas.json())
        .then((res) => {
          /* console.log(res); */
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Merci...!!!
        </Typography>
      ) : (
        
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Retour
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Sauter cette etape
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                /* onClick={handleNext} */
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
      
      )}
    </div>
  );
};

export default LinaerStepper;