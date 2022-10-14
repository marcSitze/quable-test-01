import config from "../common/config";

export const getProducts = async () => {
  try {
    const response = await fetch(`${config.API}/api/products`)
    const result = await response.json()
    // console.log('result: ', result.data)
    return result;
  } catch (error) {
    console.error('errService: ', error)
  }
}

export const createProduct = async (product) => {
  try {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }

    let response = await fetch(`${config.API}/api/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: headersList
    });
    const result = await response.json()
    // console.log('result: ', result)
    return result;
  } catch (error) {
    console.error('errService: ', error)
  }
}

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${config.API}/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    const result = await response.json()
    // console.log('result: ', result)
    return result;
  } catch (error) {
    console.error('errService: ', error)
  }
}