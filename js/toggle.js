document.getElementById('donation-button').addEventListener('click', function() {
    document.getElementById('donation-button').style.backgroundColor = '#B4F461'
    document.getElementById('history-button').style.backgroundColor = 'white'
    document.getElementById('donation-part').classList.remove('hidden');
    document.getElementById('history-part').classList.add('hidden');
})

document.getElementById('history-button').addEventListener('click', function() {
    document.getElementById('history-button').style.backgroundColor = '#B4F461'
    document.getElementById('donation-button').style.backgroundColor = 'white'
    document.getElementById('history-part').classList.remove('hidden');
    document.getElementById('donation-part').classList.add('hidden');
})