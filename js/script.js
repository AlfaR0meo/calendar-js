const dateInput = document.getElementById('birthday-date-input');
const datePicker = document.querySelector('.date-picker');

const monthSelectElement = datePicker.querySelector('#month-select');
const yearSelectElement = datePicker.querySelector('#year-select');

const MONTHS = ['Январь','Февраль','Март','Апрель','Май', 'Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const fromYear = 1918;
const currentYear = new Date().getFullYear();
const defaultSelectedYear = 2000;

const values = {
    day: '01',
    month: '01',
    year: defaultSelectedYear,
};

dateInput.value = `${values.day}/${values.month}/${values.year}`;

function updateValue(key, value) {
    values[key] = value;
    dateInput.value = `${values.day}/${values.month}/${values.year}`;
}

dateInput.addEventListener('click', () => {
    dateInput.classList.toggle('active');
    datePicker.classList.toggle('active');
});

for (let i = 0; i < MONTHS.length; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = i + 1;
    optionElement.textContent = MONTHS[i];
    monthSelectElement.appendChild(optionElement);
}

for (let i = fromYear; i <= currentYear; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = optionElement.textContent = i;
    if (i === defaultSelectedYear) optionElement.selected = true;
    yearSelectElement.appendChild(optionElement);
}

monthSelectElement.addEventListener('change', () => {
    let month = monthSelectElement.value.length === 1
            ? monthSelectElement.value.padStart(2, '0')
            : monthSelectElement.value;
    updateValue('month', month);
    updateValue('day', '01');

    // ?.....
});

yearSelectElement.addEventListener('change', () => {
    let year = yearSelectElement.value;
    updateValue('year', year);

    // ?.....
});



const tds = document.querySelectorAll('td');

tds.forEach(td => {
    td.addEventListener('click', () => {
        tds.forEach(td => {
            td.classList.remove('active');
        })
        td.classList.add('active');

        let day = td.textContent.length === 1 
                ? td.textContent.padStart(2, '0')
                : td.textContent;
        updateValue('day', day);
    })
});



const DAYS_NORMAL_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP_YEAR   = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];













