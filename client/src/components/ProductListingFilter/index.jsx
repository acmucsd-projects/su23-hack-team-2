import "./style.css";
import React from 'react';
import Typography from '../../../node_modules/@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
            <div class="filter">
                <h2 class="filter-label">Filter</h2>
                <div class="cat-names">
                    <a href="/">Sub-category 1</a>
                    <a href="/">Sub-category 2</a>
                    <a href="/">Sub-category 3</a>
                    <a href="/">Sub-category 4</a>
                </div>
            </div>
            <div class="slider">
            <h2 class="slider-label">Price Range Slider</h2>
                <div class="price-content">
                        <p>$0</p>
                        <p>$100</p>
                </div>
                <Typography gutterBottom>
                </Typography>
                <div class="actual-slider">
                <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                />
                </div>
                <p class="price-range">Price Range: {value[0]} to {value[1]}</p>
            </div>
        </main>
    );
  };
  
  export default ProductListingFilter;