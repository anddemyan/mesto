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
const popupImage = document.querySelector('.popup_type_image');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description');
let popupEditSaveButton = popupEdit.querySelector('.popup__form');
let popupAddSaveButton = popupAdd.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_contact_name');
let jobInput = document.querySelector('.popup__field_contact_job');
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.card-template').content;
const inputName = document.querySelector('.popup__field_name');
const inputLink = document.querySelector('.popup__field_link');
const imagePopupSrc = document.querySelector('.popup-image__photo');
const imagePopupCaption = document.querySelector('.popup-image__caption');

//Функция открытия попапа с записью значений со страницы в поля формы
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

//закрытие попапа edit
function closeEditPopup() {
  popupEdit.classList.remove('popup_opened');
}

//открытие, закрытие попапа add
function togglePopupAdd() {
  popupAdd.classList.toggle('popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('popup_opened');
}

//Функция отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeEditPopup();
}

function addCard (evt) {
  evt.preventDefault();
    createCard({
    name: inputName.value,
    link: inputLink.value
  })
  togglePopupAdd();
}

//Функция создания карточек из template
function createCard (cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const deleteButton = cardElement.querySelector('.elements__delete-button');
  const cardItem = cardElement.querySelector('.elements__item')
  const likeButton = cardElement.querySelector('.elements__like-button');
  cardTitle.textContent = cardData.name;
  cardImage.alt = cardData.name;
  cardImage.src = cardData.link;

  //заполнение попапа с картинкой данными и открытие попапа
  function imagePopup() {
    imagePopupSrc.src = cardData.link;
    imagePopupSrc.alt = cardData.name;
    imagePopupCaption.textContent = cardData.name;
    popupImage.classList.add('popup_opened');
  }

  //удаление карточки
  function deleteCard(evt) {
    cardItem.remove();
  }

  // кнопка лайк
  function addLike() {
    likeButton.classList.toggle('elements__like-button_active');
  }

  cardImage.addEventListener('click', imagePopup);
  deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', addLike);
  
  cardList.prepend(cardElement);
}

initialCards.forEach(createCard);

popupEditSaveButton.addEventListener('submit', formSubmitHandler); 
popupAddSaveButton.addEventListener('submit', addCard); 
popupEditOpenButton.addEventListener('click', openPopupEdit);
popupAddOpenButton.addEventListener('click', togglePopupAdd);
popupEditCloseButton.addEventListener('click', closeEditPopup);
popupAddCloseButton.addEventListener('click', togglePopupAdd);
popupImageCloseButton.addEventListener('click', closeImagePopup);