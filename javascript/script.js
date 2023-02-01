function showTab(tabIdToShow){
    document.querySelectorAll('.tab-container [tab-id]').forEach(tab=>{
        let tabId = tab.getAttribute('tab-id')
        if(tabId == tabIdToShow){
            tab.classList.add('show')
            return
        }
        tab.classList.remove('show')
    })
}

document.querySelectorAll('button[show-tab]').forEach(elemento => {
    elemento.addEventListener('click', event=>showTab(event.target.getAttribute('show-tab')))
})