/* style */
import './products.css'

/* Icons */
import { AddToCartIcon } from '../icons/Icons'

const Products = ({ products }) => {

    return (
        <main className='products'>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                            />
                            <div>
                                <strong>{product.title}</strong> - $ {product.price}
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon></AddToCartIcon>
                                </button>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default Products;
