import React from "react";

const GetEarnings=() =>{
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      async function fetchData() {
        try {
          await fetch('http://dummyjson.com/products/1')
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Fetch error with status code: "+res.status);
                }
                console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log("I tried"+data.id);
                return setData(data.id);
            })
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return data;
  }

export default GetEarnings;