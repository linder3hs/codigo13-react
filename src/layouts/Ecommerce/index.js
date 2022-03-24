import { Grid, TextField } from "@mui/material";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import logo from "../../assets/logo.svg";
import "./index.css";

const Ecommerce = () => {
  return (
    <div>
      <nav className="nav-ecommerce">
        <Grid container alignItems="center" ml={5} mr={5}>
          <Grid item md={4}>
            <img src={logo} alt="" />
          </Grid>
          <Grid item md={4}>
            <TextField
              variant="standard"
              sx={{
                width: 250,
              }}
              label="Search for an item..."
            />
          </Grid>
          <Grid item md={4}>
            <ul className="ul-ecommerce">
              <li>
                <a href="/">Store</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Wish List</a>
              </li>
              <li className="li-basket">
                <a href="/">
                  Basket &nbsp;
                  <ShoppingBasketRoundedIcon />
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
