
/* components */
import Products from "../Products/Products"
/* mocks */
import { products } from '../../mocks/products.json';

function App() {
    console.log(products)
    return (
        <>
            <p>Carrito with react</p>
            <Products products={products}></Products>
        </>
    )
}

export default App
