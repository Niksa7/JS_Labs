// Задание 1
function setDate() {
  const dateEl = document.getElementById("data_label");

  const today = new Date();
  const day = today.getDate().toLocaleString("ru-RU").padStart(2, "0");
  const month = (today.getMonth() + 1).toLocaleString("ru-RU").padStart(2, "0");
  const year = today.getFullYear().toLocaleString("ru-RU").replace(/\s/g, "");

  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const weekday = weekdays[today.getDay()];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Определяем, AM или PM
  const amOrPm = hours < 12 ? 'AM' : 'PM';

  // Конвертируем часы в 12-часовой формат
  hours = hours % 12 || 12;

  // Добавляем нуль перед минутами и секундами, если значение меньше 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Составляем строку времени в 12-часовом формате
  const timeString = hours + '/' + minutes + '/' + seconds + ' ' + amOrPm;

  dateEl.innerHTML = weekday + ", " + year + "-" + day + "-" + month + ", " + timeString;
}
setInterval(setDate, 1000);

// Задание 2
function calendar(){
  // Получаем элемент, в котором будет располагаться календарь
  const calendar = document.getElementById('calendar');

  // Создаем таблицу
  const table = document.createElement('table');

  // Добавляем название месяца
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const monthName = monthNames[currentMonth] + ' ' + currentYear;

  const caption = table.createCaption();
  caption.textContent = monthName;
  caption.style.fontWeight = 'bold';

  // Создаем заголовок таблицы с днями недели
  const head = table.createTHead();
  const row = head.insertRow();
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  for (let day of weekDays) {
    const cell = row.insertCell();
    cell.textContent = day;
    cell.style.fontWeight = 'bold';
  }

  // Создаем тело таблицы
  const body = table.createTBody();
      let date = new Date(currentYear, currentMonth, 1);
      while (date.getMonth() === currentMonth) {
        const row = body.insertRow();
        for (let i = 0; i < 7; i++) {
          const cell = row.insertCell();
          const day = date.getDate();
          cell.textContent = day;
          if (i === 5 || i === 6) {
            cell.classList.add('weekend'); // выделяем выходные дни
          }
          if (date.getDay() === i) {
            date.setDate(day + 1);
          }
          if (date.getFullYear() === currentDate.getFullYear() && 
              date.getMonth() === currentDate.getMonth() && 
              date.getDate() - 1 === currentDate.getDate()) {
            cell.classList.add('today'); // выделяем сегодняшний день
          }
        }
      }

  if (calendar.firstChild) {
    calendar.removeChild(calendar.firstChild);
  }

  // Добавляем таблицу календаря на страницу
  calendar.appendChild(table);
}

// Задание 3
function num_of_forms() {
  const forms = document.querySelectorAll("form");
  const numberOfForms = forms.length;
  document.getElementById("number-of-forms").textContent = `Количество форм на странице: ${numberOfForms}`; // Выводим количество форм в элемент с id "number-of-forms"
}

// Задание 4
function animateBlock() {
  const block = document.querySelector('.block');

  block.addEventListener('click', () => {
    setInterval(() => {
      block.style.transform = `scale(1.5) rotate(180deg)`;
    }, 50);
  });
}

// Задание 5
function addRow() {
  const cell1 = prompt("Введите содержимое для первой ячейки:");
  if (cell1 === null) {
    return;
  }
  const cell2 = prompt("Введите содержимое для второй ячейки:");
  if (cell2 === null) {
    return;
  }

  // Новую строку и добавить ячейки с введенным содержимым
  const newRow = document.createElement("tr");
  const cell1Elem = document.createElement("td");
  cell1Elem.textContent = cell1;
  newRow.appendChild(cell1Elem);
  const cell2Elem = document.createElement("td");
  cell2Elem.textContent = cell2;
  newRow.appendChild(cell2Elem);

  // Новую строку в таблицу
  const table = document.getElementById("Table");
  table.tBodies[0].appendChild(newRow);
}

function deleteRow() {
  // Получить последнюю строку таблицы
  const table = document.getElementById("Table");
  const lastRow = table.tBodies[0].lastChild;
  if (!lastRow) {
    return;
  }

  // Подтверждение удаления
  const cell1 = lastRow.firstChild.textContent;
  const cell2 = lastRow.lastChild.textContent;
  const confirmMsg = `Вы действительно хотите удалить строку: "${cell1} ${cell2}"?`;
  if (!confirm(confirmMsg)) {
    return;
  }
  table.tBodies[0].removeChild(lastRow);
}

// Задание 6

function textchanger(){

  const textFragments = [
    "Подкрадули",
    "да не умер он в конце драйва",
    "Я запрещаю вам запрещать",
  ];

  const textElements = document.querySelectorAll('#text');

  // Обработчик события для каждый элемента в блоке
  textElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
      const randomFragment = textFragments[Math.floor(Math.random() * textFragments.length)];
      element.innerText = randomFragment;
    });
  });
}

// Задание 7
function candies(){
  const menuButton = document.getElementById('menu-button');
  const menuList = document.getElementById('menu-list');
  const menuEmpty = document.getElementById('menu-empty');
  const menuItems = menuList.getElementsByTagName('li');

  function onMenuEmpty() {
    menuList.style.display = 'none'; 
    menuEmpty.style.display = 'block'; 
  }

  function onMenuItemClick(item) {
    // Анимация для исчезновения элемента
    const animation = item.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 200
      }
    );
    animation.onfinish = function() {
      item.style.display = 'none';
      const visibleItems = Array.from(menuItems).filter(item => item.style.display !== 'none');
      if (visibleItems.length === 0) {
        onMenuEmpty();
      }
    };
  }

  // Обработчик клика
  menuButton.addEventListener('click', function() {
    if (menuList.style.display === 'block') {
      menuList.style.display = 'none';
      return;
    }
    menuList.style.display = 'block';
    for (const item of menuItems) {
      item.style.display = 'block';
      item.addEventListener('click', () => onMenuItemClick(item));
    }
    menuEmpty.style.display = 'none';
  });
}

//Задание 8
function task8(){
  const image = document.getElementById("image");
    image.style.opacity = 1;
    let fadeTimeout;

    function fadeIn() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeIn, 30);
        }
    }

    function fadeOut() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity > 0.5) {
            opacity -= 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeOut, 30);
        }
    }

    image.addEventListener("mouseover", fadeOut);
    image.addEventListener("mouseout", fadeIn);
}

function task9(){
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('input', function() {
    if (!emailInput.validity.valid) {
      emailInput.classList.add('invalid');
    } else {
      emailInput.classList.remove('invalid');
    }
  });
}

function task10(){

  const form = document.querySelector('form');
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');
  const confirmPasswordField = document.querySelector('#confirm-password');
  const phoneField = document.querySelector('#phone');
  const dateField = document.querySelector('#date');
  const nameField = document.querySelector('#name');
  const facultyField = document.querySelector('#faculty');
  const departmentField = document.querySelector('#department');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Проверка email-адреса
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.classList.add('error');
      emailField.nextElementSibling.textContent = 'Введите корректный email-адрес';
    } else {
      emailField.classList.remove('error');
      emailField.nextElementSibling.textContent = '';
    }
    
    // Проверка пароля
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
      passwordField.classList.add('error');
      passwordField.nextElementSibling.textContent = 'Пароль должен содержать не менее 8 символов, включая цифры, заглавные и строчные буквы';
    } else {
      passwordField.classList.remove('error');
      passwordField.nextElementSibling.textContent = '';
    }
    
    // Проверка повтора пароля
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.classList.add('error');
      confirmPasswordField.nextElementSibling.textContent = 'Пароли не совпадают';
    } else {
      confirmPasswordField.classList.remove('error');
      confirmPasswordField.nextElementSibling.textContent = '';
    }
    
    // Проверка номера телефона
    const phoneRegex = /^\+?[0-9]{10,}$/;
    if (!phoneRegex.test(phoneField.value)) {
      phoneField.classList.add('error');
      phoneField.nextElementSibling.textContent = 'Введите корректный номер телефона';
    } else {
      phoneField.classList.remove('error');
      phoneField.nextElementSibling.textContent = '';
    }
    
    // Проверка даты
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.(19|20)\d{2}$/;
    if (!dateRegex.test(dateField.value)) {
      dateField.classList.add('error');
      dateField.nextElementSibling.textContent = 'Введите корректную дату в формате ДД.ММ.ГГГГ';
    } else {
      dateField.classList.remove('error');
      dateField.nextElementSibling.textContent = '';
    }
    
    // Проверка ФИО
    const nameRegex = /^[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+$/;
    if (!nameRegex.test(nameField.value)) {
      nameField.classList.add('error');
      nameField.nextElementSibling.textContent = 'Введите корректное ФИО';
    } else {
      nameField.classList.remove;
    }})

}