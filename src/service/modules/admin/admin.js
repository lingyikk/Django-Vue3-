import hyRequest from '../../request'

export function getadminAll() {
  return hyRequest.get({
    url: `/admin/`
  })
}

export function postadminAddInput(data) {
  return hyRequest.post({
    url: "/admin/",
    data: data,
  })
}

export function updataadmin(pk, newData) {
  return hyRequest.put({
    url: `/admin/${pk}/`,
    data: newData,
  })
}

export function deleteadmin(pk) {
  return hyRequest.delete({
    url: `/admin/${pk}/`
  })
}

export function searchadmin(searchData) {
  return hyRequest.get({
    url: `/admin/search/?username=${searchData}`
  })
}

export function Loginadmin(loginData) {
  return hyRequest.post({
    url: `admin/login/`,
    data: loginData,
  })
}

export function registeradmin(registerData) {
  return hyRequest.post({
    url: `admin/register/`,
    data: registerData,
  })
}
