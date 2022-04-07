import { TYPES } from "../accion/ItemListAction";

export const shoppingInitialState = {
  productos: [
    {
      id: 1,
      nombre: "Jean",
      img:  'https://th.bing.com/th/id/OIP.kpb5O6SqMHAVSFWxpr4NdgHaKO?pid=ImgDet&rs=1',
      precio: 70.0,
      color: "Negro",
      codigo: 102030,
     
    },
    {
      id: 2,
      nombre: "Chaqueta",
      img: 'https://static.dafiti.com.co/p/adidas-originals-3661-904219-1-zoom.jpg',
      precio: 90.0,
      color: "Amarilla",
      codigo: 104050,
     
    },
    {
      id: 3,
      nombre: "Vestido ",
      img: 'https://th.bing.com/th/id/OIP.YhttSNhPe7iSYg95V2t85AHaLH?pid=ImgDet&rs=1',
      precio: 65.0,
      color: "Rosado",
      codigo: 106070,
      
    },
    {
       id: 4, 
       nombre: "Chaleco ", 
       img: 'https://th.bing.com/th/id/OIP.IAbRDilm1UnMvpc_b6NeEAHaHa?pid=ImgDet&rs=1',
       precio: 80.0, 
       color: "Azul Oscuro", 
       codigo: 108090 ,
      
    },
    { 
      id: 5, 
      nombre: "Buzo", 
      img: 'https://th.bing.com/th/id/OIP.vqX8JG3KPsV0V31zIE2FHAHaJk?pid=ImgDet&rs=1',
      precio: 110.0, 
      color: "Rojo", 
      codigo: 101001,
      
    },
    { 
      id: 6,
      nombre: "Abrigo",
      img: 'https://http2.mlstatic.com/abrigo-cafe-abrigos-mujer-chamarras-mujer-ropa-mujer-blusas-D_NQ_NP_923905-MLM29252547067_012019-F.jpg',
      precio: 100.0, 
      color: "Cafe", 
      codigo: 101002,
     
    },
    {
      id: 7,
      nombre: "Buzo",
      img: 'https://static.dafiti.com.br/p/Nike-Sportswear-Moletom-Nike-Sportswear-Club-Crew-Swoosh-Azul-2130-4429361-4-zoom.jpg',
      precio: 170.0,
      color: "Azul",
      codigo: 101003,
      
    },
    { 
      id: 8,
       nombre: "Blusa",
       img: 'https://ae01.alicdn.com/kf/He4c9dff2ae6a4be090338623c9cc8c23L.jpg',
       precio: 65.0, 
       color: "Blanca", 
       codigo: 101004,
       
    },
    {
      id: 9,
      nombre: "Crop tops",
      img: 'https://th.bing.com/th/id/R.2568f44d097ac6646ff6b6afd738f1f9?rik=c2O35tLy65WnlQ&riu=http%3a%2f%2fwww.larevista.com.ec%2fsites%2fdefault%2ffiles%2fimagecache%2fimagengaleriagrande%2fmo2_17.jpg&ehk=5OiO8dCx8JEcWeBu247zxp%2bKkgr0Ya9gvWVK55GSeZg%3d&risl=&pid=ImgRaw&r=0',
      precio: 50.0,
      color: "Dorado",
      codigo: 101005,
      
    },
    { 
      id: 10, 
      nombre: "Gabanes",
      img: 'https://th.bing.com/th/id/R.39b18373b42fd55cb289c2768f23c3ee?rik=j%2fMtl75Kh01%2f8w&pid=ImgRaw&r=0',
      precio: 130.0, 
      color: "Gris", 
      codigo: 101006,
      categoria: 'elegante'
    },
    {
      id: 11,
      nombre: "Camiseta",
      img: 'https://ozonee-shop.es/spa_pl_OZONEE-B-181392-Camiseta-de-hombre-verde-25818_3.jpg',
      precio: 45.0,
      color: "Verde pasto",
      codigo: 101007,
      
    },
    {
      id: 12,
      nombre: "Enterizo",
      img: 'https://th.bing.com/th/id/R.2e218fca822a8837d903fc5fd81cc76a?rik=lI%2fRI9BRYZLmbQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oXbyV21fmqM%2fVS8fKvVLYwI%2fAAAAAAAALmc%2fiHJPwGnJCaU%2fs1600%2fIMG_0540.jpg&ehk=X0PmRGV9KDib%2fPLI5FT3hL37hqUX7prP3U%2fiGxWxD%2bA%3d&risl=&pid=ImgRaw&r=0',
      precio: 70.0,
      color: "Azul cielo",
      codigo: 101008,
      
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
