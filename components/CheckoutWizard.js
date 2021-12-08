//CHECKOUT WIZARD COMPONENT

//IMPORTING
//MATERIAL UI
import { Step, StepLabel, Stepper } from '@material-ui/core';
//REACT
import React from 'react';
//STYLES
import useStyles from '../utils/styles';

//CHECKOUT WIZARDS
export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  //RETURN
  return (
    <Stepper
      className={classes.transparentBackgroud}
      activeStep={activeStep}
      alternativeLabel
    >
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
