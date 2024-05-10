import hyRequest from '../../request'

export function getHotel() {
  return hyRequest.get({
    url: "/Hotel/"
  })
}

export function postHotel(data) {
  return hyRequest.post({
    url: "/Hotel/",
    data: data
  })
}

export function updataHotel(pk, data) {
  return hyRequest.put({
    url: `/Hotel/${pk}/`,
    data: data
  })
}

export function delHotel(pk) {
  return hyRequest.delete({
    url: `/Hotel/${pk}/`
  })
}

export function searchHotel(hotel_name) {
  return hyRequest.get({
    url: `/Hotel/search/`,
    params: {
      hotel_name: hotel_name
    }
  })
}


