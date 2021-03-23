const toggleLoading = (state) => {
    let loadingModal = document.getElementById('loading-modal');
    let loadingSpinner = document.getElementById('loading-spinner');
    if(state){
        loadingModal.style.display = 'inherit';
        loadingSpinner.style.display = 'inherit';
    }
    else{
        loadingModal.style.display = 'none';
        loadingSpinner.style.display = 'none';
    }
}

export { toggleLoading }