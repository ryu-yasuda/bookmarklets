javascript:(async () => {
  const title = document.title.trim();
  const url   = window.location.href;
  const html  = `<a href="${url}">${title}</a>`;
  const plain = url;

  try {
    const data = new ClipboardItem({
      'text/html' : new Blob([html],  { type: 'text/html'  }),
      'text/plain': new Blob([plain], { type: 'text/plain' })
    });
    setTimeout(() => navigator.clipboard.write([data]),100);
    alert('リンクをコピーしました');
    return;
  } catch (e) {
    console.error(e.name, e.message);
    alert('エラー');
    return;
  }
})();
