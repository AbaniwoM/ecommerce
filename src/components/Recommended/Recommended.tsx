/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import "./Recommended.scss";

// const Recommended = () => {
//   return (
//     <div>
//         <div>
//         <input placeholder="Enter your Search Items" className="search__input" />
//         </div>
//         All Items
        

//     </div>
//   )
// }

// export default Recommended;


// import { useEffect, useState } from 'react';
//         import axios from 'axios';
        
//         function App(){
//             const [loading, setLoading] = useState(false);
//             const [data, setData] = useState(null);
        
//             useEffect(() => {
//                 setLoading(true)
//                 // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//                 axios({
//                     method: 'GET',
//                     baseURL: 'https://product-api-v104.onrender.com/',
//                     url: '/data',
//                   })
//                     .then(({ data }) => {
//                       setData(data.products);
//                     })
//                     .catch(err => console.dir(err))
//                     .finally(() => setLoading(false))
//             }, []);
        
//             return (  
//               <section>
//                 <h2>Our Available Products:</h2>
//                 {loading && "Loading..."}
//                 {!!data && data.length > 0 ? data.map((product) => {
//                     return(
//                       <article key={product.id}>
//                         <h2>name: {product.name}</h2>
//                         <p>id: {product.id}</p>
//                         <p>image: {product.image}</p>
//                         <p>name: {product.name}</p>
//                         <p>description: {product.description}</p>
//                       </article>
//                     )   
//                   }):(<p>API did not provided any product, try again.</p>)
//                 }
//               </section>
//             )
//         }
        
//         export default App;

// import { useEffect, useState } from 'react';

// const Recommended = () => {
//   const [products, setProducts] = useState([]);

//   // const fetchProducts = async() => {
//   //   const responseProducts = await axios.get('https://product-api-v104.onrender.com/data');
//   //   setProducts(responseProducts.data);
//   // }

//   const fetchProducts = async() => {
//     await fetch(`https://product-api-v104.onrender.com/data`).then(response => response.json()).then((json) => setProducts(json));
//   }

//   console.log(products);

//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-floating-promises
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {
//         products.map((data, index) => 
//           <div key={index}>
//             {data}
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Recommended;


// import data from "../../../../data.json";
// import { Component } from "react";
// import "./Recommended.scss";

// export default class DefaultPost extends Component {

// 	render() {
// 		return (
// 			<>
// 				<div>
// 					<div>
// 						<div className='no-gutters'>
// 							{data.map((postData) => {
// 								console.log(postData);
// 								return (
// 									<div key={postData.id} className="boxes">
// 										<div>{postData.image}</div>
// 										<div>
// 											<div>
// 												{postData.title}
// 											</div>
// 											<div>
// 												{postData.tag + " "}
// 											</div>

// 											<div>
// 												{postData.body}
// 											</div>
// 										</div>
// 									</div>
// 								);
// 							})}
// 						</div>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }


import { useState, useEffect } from 'react';

const Recommended = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch('https://product-api-v104.onrender.com/data', {
      method: 'GET',
    }) 
    .then((response) => 
    response.json())
    .then((data) => {
      setImageData(data.imageURL);
    })
    .catch((error) => {
      console.log('Error fetching image data:', error);
    });
  }, []);

  return (
    <div>
      <h1>Image from API</h1>
      {imageData && (
        <img src={imageData} alt="API Image" />
      )}
    </div>
  )
}

export default Recommended;


