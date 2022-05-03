import { TYPES } from "../accion/ItemListAction";

export const shoppingInitialState = {
  productos: [
    {
      id: "cLzz2G0pI2XsuoVPl8W8",
      nombre: "Jean",
      img: "https://asthenia.com.ar/wp-content/uploads/2020/11/clasico-negro-jean.jpg",
      precio: 70.0,
      color: "Negro",
      codigo: 102030,
      category: "Elegante"
    },
    {
      id: "4srh7fRkIXcqbTbAb7Hg",
      nombre: "Chaqueta",
      img: "https://static.dafiti.com.co/p/adidas-originals-3661-904219-1-zoom.jpg",
      precio: 90.0,
      color: "Amarilla",
      codigo: 104050,
      category: "Deportivo"
    },
    {
      id: "JfyuHxkmA541anTzthWc",
      nombre: "Vestido ",
      img: "https://th.bing.com/th/id/OIP.YhttSNhPe7iSYg95V2t85AHaLH?pid=ImgDet&rs=1",
      precio: 65.0,
      color: "Rosado",
      codigo: 106070,
      category: "Elegante"
    },
    {
      id: "ETSMnTGzWu2dLzz2mNQk",
      nombre: "Chaleco ",
      img: "https://th.bing.com/th/id/R.23788c83de0be5c259afe4921919ec47?rik=q2Hz%2brBXBdoZ5A&pid=ImgRaw&r=0",
      precio: 80.0,
      color: "Azul y negro",
      codigo: 108090,
      category: "Elegante"
    },
    {
      id: "w39e2t6dV29SWSYfnUa1",
      nombre: "Buzo",
      img: "https://static.dafiti.com.co/p/levis-2117-2398911-1-product.jpg",
      precio: 80.0,
      color: "Rojo, negro, amarillo y azul",
      codigo: 101001,
      category: "Deportivo"
    },
    {
      id: "WjclsYnIFEasfro1munG",
      nombre: "Abrigo",
      img: "https://th.bing.com/th/id/R.4f3a9d68505584e3e0ea1e922603f63e?rik=RHUlnAflbVd93Q&riu=http%3a%2f%2fwww.lavidadeserendipity.com%2fwp-content%2fuploads%2f2012%2f09%2fcamuflage-2.jpeg&ehk=Y8sTSvKxJYYpLZRs6%2fpN3V9ZsZL413y3RLmuW4N6xpw%3d&risl=&pid=ImgRaw&r=0",
      precio: 100.0,
      color: "Cafe",
      codigo: 101002,
      category: "Elegante"
    },
    {
      id: "Jvow7rdShRQk15xRm7IJ",
      nombre: "Chaqueta de cuero ",
      img: "https://th.bing.com/th/id/OIP.oUfCgY_HJ2bPRTnf8zM5-QAAAA?pid=ImgDet&rs=1",
      precio: 170.0,
      color: "Negra",
      codigo: 101003,
      category: "Deportivo"
    },
    {
      id: "Sx5oUyOFWXmo5jnJwTlO",
      nombre: "Blusa",
      img: "https://i.pinimg.com/736x/57/3b/b0/573bb0931e2007d3b9140bddb04cfdcc.jpg",
      precio: 65.0,
      color: "Blanca",
      codigo: 101004,
      category: "Elegante"
    },
    {
      id: "Psfmo5MNRKcy1h2LZzD9",
      nombre: "Croptop encaje",
      img: "https://i.pinimg.com/originals/7e/d3/10/7ed3100d88212c12192a30e86c5d643c.jpg",
      precio: 50.0,
      color: "Negro, rojo, azul y verde",
      codigo: 101005,
      category: "Deportivo"
    },
    {
      id: "GOJmhGOK7O50aLVAhjMW",
      nombre: "Gaban ",
      img: "https://th.bing.com/th/id/R.39b18373b42fd55cb289c2768f23c3ee?rik=j%2fMtl75Kh01%2f8w&pid=ImgRaw&r=0",
      precio: 130.0,
      color: "Gris",
      codigo: 101006,
      category: "Elegante"
      
    },
    {
      id: "j5T6fJJXhIioqUWRaRV4",
      nombre: "Saco en lana",
      img: "https://i.pinimg.com/originals/11/7e/0b/117e0be3012ef59a2a5efa7997069b43.jpg",
      precio: 45.0,
      color: "Rosa, verde oscuro y café",
      codigo: 101007,
      category: "Deportivo"
    },
    {
      id: "kmNUBxU7PuArr3Zf1N6V",
      nombre: "Enterizo",
      img: "https://th.bing.com/th/id/R.2e218fca822a8837d903fc5fd81cc76a?rik=lI%2fRI9BRYZLmbQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oXbyV21fmqM%2fVS8fKvVLYwI%2fAAAAAAAALmc%2fiHJPwGnJCaU%2fs1600%2fIMG_0540.jpg&ehk=X0PmRGV9KDib%2fPLI5FT3hL37hqUX7prP3U%2fiGxWxD%2bA%3d&risl=&pid=ImgRaw&r=0",
      precio: 70.0,
      color: "Azul",
      codigo: 101008,
      category: "Elegante"
    },
  ],
  cart: [],
};

export function ItemListReduce(state, accion) {

  switch (accion.type) {
    
    case TYPES.ADD_TO_CART: {
    
      let newItem = state.productos.find(
        (producto) => producto.id === accion.payload

      );
      
      let iteminCart = state.cart.find((item) => item.id === newItem.id);
      
      
      return iteminCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
          
            ...state,
            
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            
          };
    }

    
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === accion.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === accion.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== accion.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== accion.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
} 

      }


