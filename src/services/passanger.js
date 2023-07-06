import axiosClient from './axios-clinet'

export const getPassangerList = () => {
  return axiosClient.get('passenger?page=0&size=10')
}

export const deletePassangerList = (passangerId) => {
  return axiosClient.delete(`passenger/${passangerId}`)
}

export const passangerListUpdate = (passangerDetail) => {
  console.log(passangerDetail.trips)
  return axiosClient.patch(`passenger/${passangerDetail.id}`, {
    name: passangerDetail.name,
  })
}
