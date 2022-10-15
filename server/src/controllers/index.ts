import axios from 'axios'
import { Request, Response } from 'express';

const { HOST, ACCESS_TOKEN } = process.env
import { ResponseObj, Product, IProduct, IError } from '../common/helper';

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Shopify-Access-Token": ACCESS_TOKEN ?? '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',
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const request = await axios({
      url: `${HOST}/admin/api/2022-10/products.json`,
      method: "GET",
      headers,
    });
    if(request.statusText != 'OK') {
      return res.json(new (ResponseObj as any)(request.data.errors, false, request.status))
    }
    res.json(new (ResponseObj as any)(request.data, true, 200))
  } catch (error) {
    console.error("Some Error: ", error);
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const { title, body_html, vendor, product_type, tags }: IProduct = req.body;

  const errors: IError[] = []
  Object.keys(req.body).forEach((key: string, index: number) => {
    if(!req.body[key]) {
      errors.push({msg: `please fill this field ${Object.keys(req.body)[index]}`})
    }
  })

  if(errors.length > 0) {
    return res.json(new (ResponseObj as any)(errors, false, 400))
  }

  const product = new (Product as any)({
    title,
    body_html,
    vendor,
    product_type,
    tags,
  });

  try {
     let bodyContent = JSON.stringify({product});

     let reqOptions = {
       url: `${HOST}/admin/api/2022-10/products.json`,
       method: "POST",
       headers,
       data: bodyContent,
     }
     let response = await axios.request(reqOptions);
     console.log('response.data: ', response.status, response.statusText)

     if(!String(response.status).startsWith('2')) {
      return res.json(new (ResponseObj as any)(response.data.errors, false, response.status))
    }

    res.json(new (ResponseObj as any)('Product Created...', true, 201))
  } catch (error) {
    console.error("Some Errors occured: ", error.message);
  }
}

export const deleteProduct = async (req: Request, res: Response) => {

   let reqOptions = {
     url: `${HOST}/admin/api/2022-10/products/${req.params.id}.json`,
     method: "DELETE",
     headers,
   }

   try {
     let response = await axios.request(reqOptions);
     if(response.statusText != 'OK') {
      return res.json(new (ResponseObj as any)(response.data.errors, false, response.status))
    }
    res.json(new (ResponseObj as any)('Product Deleted...', true, 204))
   } catch (error) {
    console.error('Some Errors: ', error)
   }
}