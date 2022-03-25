import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD4O5g7loVbjNvJKw0KRb1eH9N_aTca5Tw",
  authDomain: "codigo13-34b65.firebaseapp.com",
  projectId: "codigo13-34b65",
  storageBucket: "codigo13-34b65.appspot.com",
  messagingSenderId: "436776363555",
  appId: "1:436776363555:web:129d19c2cbe95e9ca4f396",
  measurementId: "G-9H7HFQ7NS0",
};

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};
