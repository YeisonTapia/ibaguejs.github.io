import fetchJsonp from 'fetch-jsonp'

const baseURL = process.env.VUE_APP_MEETUP_URL

export default {
  getEvents(page, status) {
    return fetchJsonp(
      `${baseURL}/events?&sign=true&photo-host=public&page=${page}&desc=true&status=${status}`
    ).then(response => response.json())
  },
  getOrganizers(page) {
    return fetchJsonp(
      `${baseURL}/members?&sign=true&photo-host=public&role=leads&page=${page}`
    ).then(response => response.json())
  }
}
