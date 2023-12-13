const fileDownloadForm = document.querySelector(".file-form");
const fileName = document.querySelector(".file-name");
const fileSendBtn = document.querySelector(".file-send");
const file = [];

fileDownloadForm.addEventListener("dragenter", (e) => {
  e.preventDefault();
  fileDownloadForm.classList.add("file-form--active");
});

fileDownloadForm.addEventListener("dragleave", (e) => {
  e.preventDefault();
  fileDownloadForm.classList.remove("file-form--active");
});

fileDownloadForm.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileDownloadForm.classList.add("file-form--active");
});

fileDownloadForm.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer.files[0].type.startsWith("image/")) {
    fileDownloadForm.classList.remove("file-form--active");
    fileName.innerHTML = e.dataTransfer.files[0].name;
    fileSendBtn.classList.remove("btn--hide");
    file.pop();
    file.push(e.dataTransfer.files[0]);
    console.log(file);
  } else {
    // The dropped file is not an image, you can handle this case accordingly
    alert("Пожалуйста, загрузите изображение!");
    fileDownloadForm.classList.remove("file-form--active");
  }
});

fileSendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (file.length > 0) {
    const formData = new FormData();
    formData.append("file", file[0]);
    fetch("php/upload.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result == "Файл загружен!") {
          alert(result);
          fileName.innerHTML = "";
          fileSendBtn.classList.add("btn--hide");
        } else {
          alert(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Вы ещё не загрузили файл!");
  }
});
