export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, phone, message } = body

  const text = `
🚀 *Новая заявка с сайта BS Group*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
💬 *Сообщение:* ${message || 'Без сообщения'}
  `

  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`

  try {
    const response = await $fetch(url, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: text,
        parse_mode: 'Markdown'
      }
    })
    return { success: true, response }
  } catch (error) {
    console.error('Telegram API error:', error)
    return { success: false, error: 'Failed to send message' }
  }
})
