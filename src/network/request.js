import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res
  }, err => {
    console.log(err);
  })
  //发送的网络请求本身就是一个promise实列
  return  instance(config)
}
