document.querySelectorAll('.price').forEach(node => {
    node.textContext = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(+node.textContent)
})