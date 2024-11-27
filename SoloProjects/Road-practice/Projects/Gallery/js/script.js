document.addEventListener("DOMContentLoaded", function() {
    // Выбираем все элементы с классом "city-name" для добавления обработчиков событий
    const cityNames = document.querySelectorAll(".city-name");
    // Получаем элемент, где будет отображаться изображение выбранного города
    const cityImage = document.getElementById("city-image");
    // Контейнер для изображения, скрытый по умолчанию
    const imageContainer = document.querySelector(".image-container");

    // Объект, содержащий пути к изображениям для каждого города
    const cityImages = {
        paris: "images/paris.jpg",
        london: "images/london.jpg",
        berlin: "images/berlin.jpg",
        madrid: "images/madrid.jpg",
        vienna: "images/vienna.jpg"
    };

    // Проходим по каждому элементу с классом "city-name"
    cityNames.forEach(city => {
        city.addEventListener("click", () => {
            const cityKey = city.dataset.city; // Получаем ключ города из атрибута data-city

            // Устанавливаем соответствующее изображение и alt-текст для выбранного города
            cityImage.src = cityImages[cityKey];
            cityImage.alt = `Изображение города ${cityKey}`;

            // Показываем контейнер с изображением, делая его видимым
            imageContainer.style.display = 'block';
            imageContainer.style.opacity = 1;
        });
    });

    // Добавляем обработчик событий на изображение для открытия его в увеличенном виде
    cityImage.addEventListener("click", () => {
        // Создаем элемент для модального окна
        const modal = document.createElement("div");
        modal.classList.add("modal");

        // Добавляем большое изображение в модальное окно
        const enlargedImg = document.createElement("img");
        enlargedImg.src = cityImage.src;
        enlargedImg.alt = cityImage.alt;
        enlargedImg.classList.add("enlarged-image");

        modal.appendChild(enlargedImg);

        // Добавляем кнопку закрытия модального окна
        const closeButton = document.createElement("button");
        closeButton.textContent = "Закрыть";
        closeButton.classList.add("close-button");
        modal.appendChild(closeButton);

        // Добавляем модальное окно в тело документа
        document.body.appendChild(modal);

        // Добавляем обработчик для кнопки закрытия, чтобы убрать модальное окно
        closeButton.addEventListener("click", () => {
            modal.remove();
        });

        // Закрываем модальное окно при клике на сам фон (если пользователь кликнет вне изображения)
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});
