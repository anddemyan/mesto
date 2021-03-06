import { popupImage, openPopup, imagePopupSrc, imagePopupCaption} from './utils.js'

export class Card {
  constructor(data, cardTemplateSelector) {
    this._data = data
    this._cardTemplateSelector = cardTemplateSelector
  }

  _getTemplate () {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .cloneNode(true)
    return cardElement;    
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._imagePopup);
    this._deleteButton.addEventListener('click', this._deleteCard);
    this._likeButton.addEventListener('click', this._addLike);
    }

   //заполнение попапа с картинкой данными и открытие попапа
  _imagePopup = () => {
    imagePopupSrc.src = this._data.link;
    imagePopupSrc.alt = this._data.name;
    imagePopupCaption.textContent = this._data.name;
    openPopup(popupImage);
  }

  //удаление карточки
  _deleteCard = (evt) => {
    this._cardItem.remove();
  }

  //кнопка лайк
  _addLike = () => {
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  //Функция создания карточек из template
  createCard () {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__image');
    const cardTitle = this._element.querySelector('.elements__title');
    this._deleteButton = this._element.querySelector('.elements__delete-button');
    this._cardItem = this._element.querySelector('.elements__item')
    this._likeButton = this._element.querySelector('.elements__like-button');
    cardTitle.textContent = this._data.name;
    this._cardImage.alt = this._data.name;
    this._cardImage.src = this._data.link;

    this._setEventListeners()
    return this._element;
  }
}