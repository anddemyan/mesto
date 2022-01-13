const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_contact_name');
let jobInput = document.querySelector('.popup__field_contact_job');

//Функция открытия попапа с записью значений со страницы в поля формы
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

//Функция отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


