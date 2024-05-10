import hyRequest from '../../request'

export function getProductOrder() {
  return hyRequest.get({
    url: "/ProductOrder/"
  })
}

export function postProductOrder(data) {
  return hyRequest.post({
    url: "/ProductOrder/",
    data: data
  })
}

export function updataProductOrder(pk, data) {
  return hyRequest.put({
    url: `/ProductOrder/${pk}/`,
    data: data
  })
}

export function delProductOrder(pk) {
  return hyRequest.delete({
    url: `/ProductOrder/${pk}/`
  })
}

export function searchProductOrder(username) {
  return hyRequest.get({
    url: `/ProductOrder/search/?username=${username}`
  })
}


