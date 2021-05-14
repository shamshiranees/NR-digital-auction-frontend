import apiAction from "./index"
import { GET_SETTINGS, SET_SETTINGS, DATA_FETCH_ERROR } from "./types"

export function getSettings(id) {
  return apiAction({
    url: `/settings`,
    method: "GET",
    onSuccess: setSettings,
    onFailure: setOnError,
    label: GET_SETTINGS,
  })
}

export function setSettings(data) {
  var allBids = data.data
  const item = JSON.parse(allBids)
  return {
    type: GET_SETTINGS,
    payload: item,
  }
}

export function updateSettings(data) {
  return apiAction({
    url: `/settings`,
    method: "POST",
    data: data,
    onSuccess: () => setSettings(data),
    onFailure: setOnError,
    label: GET_SETTINGS,
  })
}

function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: "error",
  }
}
