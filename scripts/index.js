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
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description');
const profilePopupForm = popupEdit.querySelector('.popup__form');
const addPopupForm = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__field_contact_name');
const jobInput = document.querySelector('.popup__field_contact_job');
const cardList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.card-template').content;
const inputName = document.querySelector('.popup__field_name');
const inputLink = document.querySelector('.popup__field_link');
const imagePopupSrc = document.querySelector('.popup-image__photo');
const imagePopupCaption = document.querySelector('.popup-image__caption');

//открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//закрытие попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Функция открытия попапа с записью значений со страницы в поля формы
function openPopupEdit() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
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
    openPopup(popupImage);
  }

  //удаление карточки
  function deleteCard(evt) {
    cardItem.remove();
  }

  //кнопка лайк
  function addLike() {
    likeButton.classList.toggle('elements__like-button_active');
  }

  cardImage.addEventListener('click', imagePopup);
  deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', addLike);
  return cardElement;
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardList.prepend(cardElement);
}

initialCards.forEach(renderCard);


profilePopupForm.addEventListener('submit', submitProfileForm); 
addPopupForm.addEventListener('submit', addCard); 
popupEditOpenButton.addEventListener('click', openPopupEdit);
popupAddOpenButton.addEventListener('click', () => openPopup(popupAdd));
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));