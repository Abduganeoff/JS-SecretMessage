const {hash} = window.location;

const message = atob(hash.replace('#', ''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    const h1 = document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const inputMassage = document.querySelector('#message-input');
    const encrypted = btoa(inputMassage.value);

    const inputLink = document.querySelector('#link-input');
    inputLink.value = `${window.location}#${encrypted}`;
    inputLink.select();
});