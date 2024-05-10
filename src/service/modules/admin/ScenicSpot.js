import hyRequest from '../../request'

export function getScenicSpot() {
  return hyRequest.get({
    url: "/ScenicSpot/"
  })
}

export function postScenicSpot(data) {
  return hyRequest.post({
      url: "/ScenicSpot/",
      data: data
  })
}

export function updataScenicSpot(pk, data) {
  return hyRequest.put({
    url: `/ScenicSpot/${pk}/`,
    data: data
  })
}

export function delScenicSpot(pk) {
  return hyRequest.delete({
    url: `/ScenicSpot/${pk}/`
  })
}

export function searchScenicSpot(searchData) {
  return hyRequest.get({
    url: `/ScenicSpot/search/?name=${searchData}`
  })
}

