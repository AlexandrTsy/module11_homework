export function getMonth(n) {
  if (typeof +n == "number" && !isNaN(+n)) {
    n = +n;
    if (n >= 0) {
      if (n === 1) return "январь";
      else if (n === 2) return "февраль";
      else if (n === 3) return "март";
      else if (n === 4) return "апрель";
      else if (n === 5) return "май";
      else if (n === 6) return "июнь";
      else if (n === 7) return "июль";
      else if (n === 8) return "август";
      else if (n === 9) return "сентябрь";
      else if (n === 10) return "октябрь";
      else if (n === 11) return "ноябрь";
      else if (n === 12) return "декабрь";
      else if (n > 12) return "Всего 12 месяцев";
      else return "ОШИБКА";
    } else return "Число должно быть положительным";
  } else return "Должно быть введено число";
}