import { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import "./index.css";
import { getProductClothes } from "../../service/firestore";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const PopularWeek = () => {
  const { basket, storeBasket, deleteElementFromBasket } =
    useContext(UserContext);

  const [clothes, setClothes] = useState([]);

  const fetchClothes = async () => {
    const data = await getProductClothes();
    setClothes(data);
  };

  // Vamos a crear un componente que reciba el id del producto y verifique si
  // este existe en basket
  // props es un objeto
  // clothe es un elemento del objeto
  // props.clothe
  // que dice destructurcion
  // {clothe} = props
  const ButtonForProduct = ({ clothe }) => {
    const findProduct = basket.find((bas) => bas.id === clothe.id);

    return (
      <>
        {findProduct ? (
          <Button
            color="error"
            onClick={() => deleteElementFromBasket(clothe.id)}
          >
            <DeleteForeverRoundedIcon />
          </Button>
        ) : (
          <Button onClick={() => storeBasket(clothe)} className="button-basket">
            + Add to Basket
          </Button>
        )}
      </>
    );
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} sm={12} xs={12}>
          <h2 className="center">POPULAR WEEK</h2>
        </Grid>
        {clothes.length > 0 &&
          clothes.map((clothe) => (
            <Grid item md={3} sm={6} xs={12}>
              <img className="product-photo" src={clothe.photo} alt="" />
              <div className="description">
                <p>{clothe.name}</p>
                <p className="container-buttons">
                  <span className="price">$ {clothe.price_sale}</span>
                  <span className="price-tacched">$ {clothe.price}</span>
                  <ButtonForProduct clothe={clothe} />
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularWeek;
