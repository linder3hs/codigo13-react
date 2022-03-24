import { Grid, TextField } from "@mui/material";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import logo from "../../assets/logo.svg";

const Ecommerce = () => {
  return (
    <div>
      <nav>
        <Grid container>
          <Grid item md={4}>
            <img src={logo} alt="" />
          </Grid>
          <Grid item md={4}>
            <TextField label="Search for an item..." />
          </Grid>
          <Grid item md={4}>
            <ul>
              <li>
                <a href="/">Store</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Wish List</a>
              </li>
              <li>
                <a href="/">
                  Basket <ShoppingBasketRoundedIcon />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
    </div>
  );
};

export default Ecommerce;
