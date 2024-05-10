import hyRequest from '../../request'

export function getAllOrder(username) {
  return hyRequest.get({
    url: `/allOrder/?username=${username}`
  })
}


