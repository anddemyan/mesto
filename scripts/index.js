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
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_contact_name');
let jobInput = document.querySelector('.popup__field_contact_job');
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.card-template').content;

//Функция открытия попапа с записью значений со страницы в поля формы
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

//открытие попапа add
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

//функция закрытия попапа
function closeEditPopup() {
  popupEdit.classList.remove('popup_opened');
}

function closeAddPopup() {
  popupAdd.classList.remove('popup_opened');
}

//Функция отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

//Функция создания карточек из template
initialCards.forEach(function(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');

  cardTitle.textContent = cardData.name;
  cardImage.alt = cardData.name;
  cardImage.src = cardData.link;
  
  cardList.prepend(cardElement);
});

formElement.addEventListener('submit', formSubmitHandler); 
popupEditOpenButton.addEventListener('click', openPopupEdit);
popupAddOpenButton.addEventListener('click', openPopupAdd);
popupEditCloseButton.addEventListener('click', closeEditPopup);
popupAddCloseButton.addEventListener('click', closeAddPopup);