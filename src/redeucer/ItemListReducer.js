import { TYPES } from "../accion/ItemListAction";

export const shoppingInitialState = {
  productos: [
    {
      id: 1,
      nombre: "Jean",
      img:  'https://th.bing.com/th/id/OIP.kpb5O6SqMHAVSFWxpr4NdgHaKO?pid=ImgDet&rs=1',
      precio: 70.0,
      color: "Azul oscuro",
      codigo: 102030,
      category: 'deportivo'
    },
    {
      id: 2,
      nombre: "Chaqueta",
      img: 'https://static.dafiti.com.co/p/adidas-originals-3661-904219-1-zoom.jpg',
      precio: 90.0,
      color: "Amarilla",
      codigo: 104050,
      category: 'elegante'
    },
    {
      id: 3,
      nombre: "Vestido ",
      img: 'https://th.bing.com/th/id/OIP.YhttSNhPe7iSYg95V2t85AHaLH?pid=ImgDet&rs=1',
      precio: 65.0,
      color: "Rosado",
      codigo: 106070,
      category: 'elegante'
    },
    {
       id: 4, 
       nombre: "Chaleco ", 
       img: 'https://th.bing.com/th/id/OIP.IAbRDilm1UnMvpc_b6NeEAHaHa?pid=ImgDet&rs=1',
       precio: 80.0, 
       color: "Azul Oscuro", 
       codigo: 108090 ,
       category: 'deportivo'
    },
    { 
      id: 5, 
      nombre: "Buzo", 
      img: 'https://th.bing.com/th/id/OIP.vqX8JG3KPsV0V31zIE2FHAHaJk?pid=ImgDet&rs=1',
      precio: 110.0, 
      color: "Rojo", 
      codigo: 101001,
      category: 'deportivo'
    },
    { 
      id: 6,
      nombre: "Abrigo",
      img: 'https://http2.mlstatic.com/abrigo-cafe-abrigos-mujer-chamarras-mujer-ropa-mujer-blusas-D_NQ_NP_923905-MLM29252547067_012019-F.jpg',
      precio: 100.0, 
      color: "Cafe", 
      codigo: 101002,
      category: 'elegante'
    },
    {
      id: 7,
      nombre: "Zapatillas",
      img: 'https://th.bing.com/th/id/OIP.xs4gU_cQyFqOYy0zUbzduAHaI-?pid=ImgDet&rs=1',
      precio: 170.0,
      color: "Azul",
      codigo: 101003,
      category: 'deportivo'
    },
    { 
      id: 8,
       nombre: "Blusa",
       img: 'https://th.bing.com/th/id/OIP.D36nyqIrEnA-hjcERSb1_QHaKX?pid=ImgDet&rs=1',
       precio: 65.0, 
       color: "Blanca", 
       codigo: 101004,
       category: 'elegante'
    },
    {
      id: 9,
      nombre: "Crop tops",
      img: 'https://i.pinimg.com/originals/6b/eb/94/6beb94fd52e1bf72626259dc579fdb45.jpg',
      precio: 50.0,
      color: "Negro",
      codigo: 101005,
      category: 'elegante'
    },
    { 
      id: 10, 
      nombre: "Gabanes",
      img: 'https://th.bing.com/th/id/R.39b18373b42fd55cb289c2768f23c3ee?rik=j%2fMtl75Kh01%2f8w&pid=ImgRaw&r=0',
      precio: 130.0, 
      color: "Gris", 
      codigo: 101006,
      category: 'elegante'
    },
    {
      id: 11,
      nombre: "Camiseta",
      img: 'https://ozonee-shop.es/spa_pl_OZONEE-B-181392-Camiseta-de-hombre-verde-25818_3.jpg',
      precio: 45.0,
      color: "Verde pasto",
      codigo: 101007,
      category: 'deportivo'
    },
    {
      id: 12,
      nombre: "Enterizo",
      img: 'https://th.bing.com/th/id/R.2e218fca822a8837d903fc5fd81cc76a?rik=lI%2fRI9BRYZLmbQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oXbyV21fmqM%2fVS8fKvVLYwI%2fAAAAAAAALmc%2fiHJPwGnJCaU%2fs1600%2fIMG_0540.jpg&ehk=X0PmRGV9KDib%2fPLI5FT3hL37hqUX7prP3U%2fiGxWxD%2bA%3d&risl=&pid=ImgRaw&r=0',
      precio: 70.0,
      color: "Azul cielo",
      codigo: 101008,
      category: 'elegante'
    },
  ],
  cart: [],
};

export function ItemListReducer(state, accion) {
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
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: 
    return shoppingInitialState;
    
    default:
      return state;
  }
}
