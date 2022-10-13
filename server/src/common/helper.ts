export function ResponseObj(data: any, success: boolean, status: number) {
  this.data = data;
  this.success = success;
  this.status = status;
}


export type IProduct = {
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
};

export function Product(product: IProduct) {
  this.title = product.title;
  this.body_html = product.body_html;
  this.vendor = product.vendor;
  this.product_type = product.product_type;
  this.tags = product.tags;
}

export type IError = {
  msg: string
}