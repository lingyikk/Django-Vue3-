import hyRequest from '../../request'

export function getScenicSpotOrder() {
  return hyRequest.get({
    url: "/ScenicSpotOrder/"
  })
}

export function postScenicSpotOrder(data) {
  return hyRequest.post({
    url: "/ScenicSpotOrder/",
    data: data
  })
}

export function updataScenicSpotOrder(pk, data) {
  return hyRequest.put({
    url: `/ScenicSpotOrder/${pk}/`,
    data: data
  })
}

export function delScenicSpotOrder(pk) {
  return hyRequest.delete({
    url: `/ScenicSpotOrder/${pk}/`
  })
}

export function searchScenicSpotOrder(searchData) {
  return hyRequest.get({
    url: `/ScenicSpotOrder/search/?username=${searchData}`
  })
}

