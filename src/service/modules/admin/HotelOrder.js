import hyRequest from '../../request'

export function getHotelOrder() {
  return hyRequest.get({
    url: "/HotelOrder/"
  })
}

export function postHotelOrder(data) {
  return hyRequest.post({
    url: "/HotelOrder/",
    data: data
  })
}

export function updataHotelOrder(pk, data) {
  return hyRequest.put({
    url: `/HotelOrder/${pk}/`,
    data: data
  })
}

export function delHotelOrder(pk) {
  return hyRequest.delete({
    url: `/HotelOrder/${pk}/`
  })
}

export function searchHotelOrder(searchData) {
  return hyRequest.get({
    url: `/HotelOrder/search/?username=${searchData}`,
  })
}



