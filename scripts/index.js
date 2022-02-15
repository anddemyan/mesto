import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { popupImage, openPopup, closePopup } from './utils.js'

const initialCards = [
  {
    name: 'Ижевск',
    link: './images/izhevsk.jpeg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  errorSelector: '.error-message',
  inputErrorClass: 'popup__field_type_error',
  errorVisibleClass: 'error-message_visible',
  inactiveButtonClass: 'popup__form-save_disabled',
  submitButtonSelector: '.popup__form-save'
}

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');
const profilePopupForm = popupEdit.querySelector('.popup__form');
const addPopupForm = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__field_contact_name');
const jobInput = document.querySelector('.popup__field_contact_job');
const cardList = document.querySelector('.elements__list');
const inputName = document.querySelector('.popup__field_name');
const inputLink = document.querySelector('.popup__field_link');
const errorMessage = profilePopupForm.querySelectorAll('.popup__error-message, .popup__field');

const editFormValidator = new FormValidator(config, profilePopupForm)
const addCardForm = new FormValidator(config, addPopupForm)
editFormValidator.enableValidation()
addCardForm.enableValidation()

const cardTemplateSelector = document.querySelector('.card-template')


function renderCard(initialCards) {
  const card = new Card(initialCards, cardTemplateSelector)
  const cardElement = card.createCard()
  cardList.prepend(cardElement);
}

initialCards.forEach(renderCard);



function hideErrors (errorMessage) {
   errorMessage.classList.remove('error-message_visible');
   errorMessage.textContent = '';
   errorMessage.classList.remove('popup__field_type_error');
}


//Функция открытия попапа с записью значений со страницы в поля формы
function openPopupEdit() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  editFormValidator.toggleButton();
  errorMessage.forEach(hideErrors);
}

//Функция отправки формы
function submitProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupEdit);
}

function addCard (evt) {
  evt.preventDefault();
    renderCard({
    name: inputName.value,
    link: inputLink.value
  })
  closePopup(popupAdd);
  cardAdd.reset();
  addCardForm.toggleButton();
}

function closePopupOverlay() {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}


popupEdit.addEventListener('mousedown', closePopupOverlay);
popupAdd.addEventListener('mousedown', closePopupOverlay);
popupImage.addEventListener('mousedown', closePopupOverlay);
profilePopupForm.addEventListener('submit', submitProfileForm); 
addPopupForm.addEventListener('submit', addCard);
popupEditOpenButton.addEventListener('click', openPopupEdit);
popupAddOpenButton.addEventListener('click', () => openPopup(popupAdd));
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));