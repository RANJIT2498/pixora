function removeBackground() {
  const fileInput = document.getElementById('fileInput');
  const outputImage = document.getElementById('outputImage');

  if (fileInput.files.length === 0) {
    alert('Please select an image first!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    outputImage.src = e.target.result;
  };
  reader.readAsDataURL(fileInput.files[0]);
}

function changeClothes() {
  alert('AI Clothes Change feature will be coming soon!');
}

function downloadImage() {
  const outputImage = document.getElementById('outputImage');
  if (!outputImage.src) {
    alert('No image to download!');
    return;
  }

  const a = document.createElement('a');
  a.href = outputImage.src;
  a.download = 'Pixora-Edited-Image.png';
  a.click();
}
