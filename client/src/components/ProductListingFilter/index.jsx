import "./style.css";
import React from 'react';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Collapsible from 'react-collapsible';

const ProductListingFilter = () => {
  
    // Our States
    const [value, setValue] =  React.useState([2,10]);
    
    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
      setValue(newValue);
      console.log(newValue)
    };
    return (
        <main>
            <Collapsible trigger="Filter" transitionTime = {100} transitionCloseTime = {100}>
                <div class="cat-names">
                    <a href="/">Sub-category 1</a>
                    <a href="/">Sub-category 2</a>
                    <a href="/">Sub-category 3</a>
                    <a href="/">Sub-category 4</a>
                </div>
            </Collapsible>  
            <br></br>
            <Collapsible trigger="Price Range" transitionTime = {100} transitionCloseTime = {100}>
                <div class="price-content">
                        <p>$0</p>
                        <p>$100</p>
                </div>
                <Typography gutterBottom></Typography>
                <div class="actual-slider">
                <Slider
                    value={value}
                    onChange={rangeSelector}
                    valueLabelDisplay="auto"
                />
                </div>
                <p class="price-range">Price Range: {value[0]} to {value[1]}</p>
            </Collapsible>              
        </main>
    );
  };
  
  export default ProductListingFilter;