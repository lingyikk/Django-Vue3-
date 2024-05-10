import hyRequest from '../../request'

export function getProduct() {
  return hyRequest.get({
    url: "/product/"
  })
}

export function postProduct(data) {
  return hyRequest.post({
    url: "/product/",
    data: data
  })
}

export function updataProduct(pk, data) {
  return hyRequest.put({
    url: `/product/${pk}/`,
    data: data
  })
}

export function delProduct(pk) {
  return hyRequest.delete({
    url: `/product/${pk}/`
  })
}

export function searchProduct(Product_name) {
  return hyRequest.get({
    url: `/product/search/`,
    params: {
      Product_name: Product_name
    }
  })
}


