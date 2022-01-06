const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__form-save-button');
const popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name').innerText;
let profileDescription = document.querySelector('.profile__description').innerText;
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__contact-name');
let jobInput = document.querySelector('.popup__contact-job');

document.querySelector('.popup__contact-name').value = profileName;
document.querySelector('.popup__contact-job'). value = profileDescription;

function togglePopup() {
  popup.classList.toggle('popup_opened')
}

popupOpenButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup)

function saveProfile() {
  document.querySelector('.popup__contact-name').value = profileName;
  document.querySelector('.popup__contact-job'). value = profileDescription;  
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = jobInput.value;
  
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', togglePopup);
