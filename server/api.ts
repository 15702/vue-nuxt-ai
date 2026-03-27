// API封装文件
const { $axios } = useNuxtApp()


// 单独导出的API函数
export const apiMessage = (
  message: string,
): Promise<any> => {
  return $axios.post('/api/chat', {
    message: message,
  })
}