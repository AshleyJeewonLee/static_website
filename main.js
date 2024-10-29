
const options = [
  { title: "Red Dress", optionImgUrl: 'assets/redone.png', alt: 'Image 1', leftPanelImg: 'assets/mainimage.jpg', productUrl: "https://www2.hm.com/en_us/productpage.1246586002.html" },
  { title: "Grey Dress", optionImgUrl: 'assets/greyone.png', alt: 'Image 2', leftPanelImg: 'assets/mainImage2.jpg', productUrl: "https://www2.hm.com/en_us/productpage.1246586003.html" },
];
const optionTargets = document.getElementById('optionTargets');
renderOptions(options, optionTargets)

let activeOption = null;
handleImageClick(0, document.getElementById('0::option'))
function renderOptions(images, target) {
  images.forEach((image, i) => {
    const img = document.createElement('img');
    img.id = `${i}::option`
    img.src = image.optionImgUrl;
    img.alt = image.alt;
    img.addEventListener('click', () => handleImageClick(i, img));
    img.classList.add("imgOption")
    target.appendChild(img);
  });
}

function handleImageClick(i, item) {
  const mainImageTarget = document.getElementById('mainImage')
  mainImageTarget.src = options[i].leftPanelImg

  if (activeOption) {
    activeOption.classList.remove("activeImgOption")
  }
  // Activate the clicked menu item
  item.classList.add('activeImgOption');
  activeOption = item;

  const btnTarget = document.getElementById("productLink")
  btnTarget.href = options[i].productUrl
}
