import hyRequest from '../../request'

export function getUserAll() {
  return hyRequest.get({
    url: `/User/`
  })
}

export function postUserAddInput(data) {
  return hyRequest.post({
    url: "/User/",
    data: data,
  })
}

export function updataUser(pk, newData) {
  return hyRequest.put({
    url: `/User/${pk}/`, // 在 URL 中包含要更新的资源的 ID
    data: newData, // 将要更新的数据传递给 data 字段
  })
}

export function deleteUser(pk) {
  return hyRequest.delete({
    url: `/User/${pk}/`
  })
}

export function searchUser(searchData) {
  return hyRequest.get({
    url: `/User/search/?username=${searchData}`
  })
}

export function LoginUser(loginData) {
  return hyRequest.post({
    url: `User/login/`,
    data: loginData,
  })
}

export function registerUser(registerData) {
  return hyRequest.post({
    url: `User/register/`,
    data: registerData,
  })
}
