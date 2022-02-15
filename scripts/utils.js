export const imagePopupSrc = document.querySelector('.popup-image__photo');
export const imagePopupCaption = document.querySelector('.popup-image__caption');
export const popupImage = document.querySelector('.popup_type_image');

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

export function closePopupEsc () {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}