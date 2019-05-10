function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    // const msg = successful ? 'successful' : 'unsuccessful'
    // console.log('[clipboard] Fallback: Copying text command was ' + msg)
  } catch (err) {
    // console.error('[clipboard] Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}
function copyTextToClipboard(text: string) {
  if (!text) return console.error('[clipboard] no value: ', {text})

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text)
    return
  }
  navigator.clipboard.writeText(text)
  // .then(function() {
    // console.log('[clipboard] Async: Copying to clipboard was successful!')
  // },                                       function(err) {
    // console.error('[clipboard] Async: Could not copy text: ', err)
  // })
}

export default copyTextToClipboard
