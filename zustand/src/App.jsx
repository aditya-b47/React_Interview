import React, { useEffect } from "react";
import useCounterStore from "./components/useStore";
import useFetchStore from "./components/useFetchStore";

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const product = useFetchStore((state) => state.product);
  const loading = useFetchStore((state) => state.loading);
  const err = useFetchStore((state) => state.err);
  const fetchProducts = useFetchStore((state) => state.fetchProducts);

  useEffect(()=>{
    fetchProducts('https://dummyjson.com/products')
  },[])

  return (
    <>
      <div>
        {loading ? (
          <div>loading....</div>
        ) : (
          <div>
            {product.map((ele) => (
              <div key={ele?.id}>
                <p>ID: {ele?.id}</p>
                <p>Title: {ele?.title}</p>
                <p>Price: ${ele?.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div> {count} </div>
      <button onClick={increment}> + </button>
    </>
  );
};

export default App;
