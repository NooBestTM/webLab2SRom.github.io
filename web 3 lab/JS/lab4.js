var finish = new Date(2020, 6);
function NewTime() {
  var now = new Date ();

  var year = new Date();
  document.getElementById('year').innerHTML = year.getFullYear();

  var milli = finish - now;
  out = Math.trunc(milli/8.64e+7);
  document.getElementById('days').innerHTML = out;
  milli = milli - out*8.64e+7;

  out = Math.trunc(milli/3.6e+6);
  document.getElementById('hours').innerHTML = out;
  milli=milli-out*3.6e+6;

  out = Math.trunc(milli/60000)
  document.getElementById('minutes').innerHTML = out;
  milli= milli-out*60000; 

  out=Math.trunc(milli/1000);
  document.getElementById('seconds').innerHTML = out;
}
setInterval(NewTime,1000);

var about = ["Государство", "Столица", "Континент", "Часть света", "Разница во времени",
  "Денежная единица", "Географические объекты", "Литературные произведения",
  "Исторические события"];



function outArrayData(currentValue, index) {
  if (Array.isArray(currentValue)) {
    currentValue = currentValue[0] + ' "' + currentValue[1] + '" (' + currentValue[2] + ')';
  }
  index = index + 2;
  symvol = "&#1012" + index + ";" + currentValue;
  currentValue = "<td>" + symvol + "</td>";
  return currentValue;
}


function makeTable(country) {
  var table = '<table width="100%"  border="1">';
  var AddData = '<tr><th bgcolor="#97A2FF"><h1>' + country[1] + " - " + country[2] + '</h1></th></tr>';//главный заголовок
  table += AddData;
  AddData = null;
  var AddData = '<tr><td><table width="75%">';
  for (var i = 0; i < 4; i++) { 
    AddData += "<tr><td>" + about[i + 2] + "</td><td>" + country[i + 3] + "</td></tr>";
  }
  AddData += "</table></td></tr>";
  table += AddData;
  AddData = '<tr><td><table width="75%">';
  var Geographic__Objects = country[7].map(outArrayData);
  for (var i = 0; i < Geographic__Objects.length; i++) {
    if (i == 0) {
      AddData += "<tr><td>" + about[6] + "</td>" + Geographic__Objects[i] + "</tr>";
    }
    else {
      AddData += "<tr><td></td>" + Geographic__Objects[i] + "</tr>";
    }
  }
  AddData += "</table></td></tr>";
  table += AddData;
  AddData = '<tr><td><table width="75%">';
  var Geographic__Objects = country[8].map(outArrayData);
  for (var i = 0; i < Geographic__Objects.length; i++) {
    if (i == 0) {
      AddData += "<tr><td>" + about[7] + "</td>" + Geographic__Objects[i] + "</tr>";
    }
    else {
      AddData += "<tr><td></td>" + Geographic__Objects[i] + "</tr>";
    }
  }
  AddData += "</table></td></tr>";
  table += AddData;
  AddData = '<tr><td><table width="100%"><th colspan="3" align="center">Исторические события</th></tr>';
  for (var j in country[9]) {
    var value = country[9][j];
    AddData += "<td>" + j + " - " + value + "</td>";
  }
  AddData += "</table></td></tr>";
  table += AddData;
  AddData = null;
  table += '</table>';
  return table;
}

var obj1 = {
  countries: [
                ['italy', //country[0];
                  "Италия",
                  "Рим",
                  "Евразия",//country[3];
                  "Европа",
                  -2,   //country[5];
                  "итальянская лира",
                  [ //country[7];
                    "Альпы",//country[7][0];
                    "Пальмария",
                    "Апеннинский полуостров",
                    "Комо",
                    "Тальяменто"//country[7][4];
                  ]
                  ,
                  [//country[8]
                    [//country[8][0]
                      "Джованни Верга",//countries[0][8][0][0]
                      "Жизнь среди полей",
                      1880//countries[0][8][0][2]
                    ],
                    ["Анна Виванти", "Цирцея", 1912],
                    ["Джузеппе Понтиджа", "Рождённые дважды", 2000]
                  ],
                  {//country[9]
                    "1882": "избирательная реформа", "1945": "антифашистское восстание, 18-28 апреля"
                  }
                ],
    ['france', "Франция", "Париж", "Евразия", "Европа", -1, "евро",
      ["Эндр", "Пиренеи", "Луара", "Альпы", "Бискайский залив"],
      [["Александр Дюма", "Граф Монте-Кристо", 1845], ["Жюль Габриэль Верн", "Завещание чудака", 1900], ["Луи Анри Буссенар", "Капитан Сорви-голова", 2001], ["Морис Самюэль Роже Шарль Дрюон", "Тисту — мальчик с зелеными пальцами", 1957]],
      { "1572": "Варфоломеевская ночь", "1648": "Вестфальский мир", "1914": "Марнское сражение, 5-12 сентября" }
    ],
    ['switzerland', "Швейцария", "отсутствует", "Евразия", "Европа", -1, "Швейцарский франк",
      ["Бильское озеро", "Рейхенбахский водопад", "Альпы", "Алечский ледник"],
      [["Иоханна Спири", "Хайди: годы странствий и учёбы", 1880], ["Герман Гессе", "Игра в бисер", 1942], ["Макс Фриш", "Homo Фабер", 1957], ["Мелинда Надь Абонджи", "Голуби взлетают", 2010]],
      { "1291": "основание Швейцарии", "1844": "начало работы первой железнодорожной линией" }
    ],
    ['hungary', "Венгрия", "Будапешт", "Евразия", "Европа", -1, "Венгерский форинт",
      ["Геллерт", "Карпаты", "Веленце", "Мезёфёльд"],
      [["Янош Бачаньи", "Мужество венгров", 1785], ["Аттила Бартиш", "Спокойствие", 2001], ["Ийеш Дьюла", "Двое мужчин", 1950]],
      { "1222": "подписание Эндре II «Золотой буллы»", "1867": "Коронование Франца-Иосифа в Будапеште по старым обычаям, 8 июня" }
    ],
    ['romania', "Румыния", "Бухарест", "Евразия", "Европа", 0, "Румынский лей",
      ["Олт", "Трансильванское плато", "Карпаты", "Медвежья пещера", "Бабеле"],
      [["Михаил Садовяну", "Золотая ветвь", 1933], ["Мирча Элиаде", "Изабель и воды дьявола", 1930]],
      { "1881": "Румыния была провозглашена королевством", "1990": "первые свободные президентские и парламентские выборы", "2004": "Румыния стала членом НАТО" }
    ],
    ['japan', "Япония", "Токио", "Евразия", "Азия", 6, "японская иена",
      ["Фудзияма", "Сакурадзима", "Абукума"],
      [["Сюсаку Эндо", "Море и яд", 1958], ["Юдзо Ямамото", "Профессор Цумура", 1919], ["Марико Хасиока", "Аут", 1997]],
      { "1872": " отменена сложного и строгого сословного деления", "1904": "японский флот атаковал русскую эскадру в Порт-Артуре", "1941": "атака на Пёрл-Харбор" }
    ],
    ['afghanistan', "Афганистан", "Кабул", "Евразия", "Азия", 1.5, "афгани",
      ["Намакзар", "Дашти-Марго", "Фарахруд", "Гиндукуш"],
      [["Гуль Пача Ульфат", "Голос сердца", 1962], ["Абдуррауф Бенава", "Горестные размышления", 1957], ["Махмуд-бек Тарзи", "Путешествия через три континента за 29 дней", 1914]],
      { "1973": "провозглашение Республики, 17 июля", "2004": "новая Конституция и проведены первые президентские выборы" }
    ],
    ['india', "Индия", "Нью-Дели", "Евразия", "Азия", 2.5, "Индийская рупия",
      ["Ганг", "Гуру-Сикар", "Дудхсагар", "Цо-Морари", "Деканские траппы"],
      [["Арундати Рой", "Бог мелочей", 1997], ["Хушвант Сингх", "Поезд в Пакистан", 1956]],
      { "1857": "Восстание Сипаев", "1617": "Британская Ост-Индская компания получила право торговать с Индией", "1948": "Операция «Поло»", "1986": "архитектурное наследие Хампи включено в список Всемирного наследия" }
    ],
    ['brazilia', "Бразилия", "Бразилиа", "Южная Америка", "Америка", -6, "риал",
      ["Тапажос", "Пантанал", "пампа", "Сейшас", "Параноа"],
      [["Лима Баррето", "Жалкий конец Поликарпо Кваресма", 1911], ["Эрику Верисиму", "Происшествие в Антаресе", 1971], ["Шику Буарки", "Будапешт ", 2003], ["Жоаким Мануэл ди Маседу", "Смуглянка", 1844]],
      { "1888": "Золотой закон об отмене рабства в Бразилии, 13 мая", "1935": "вооружённое выступление бразильских коммунистов и тенентистов" }
    ],
    ['canada', "Канада", "Оттава", "Северная Америка", "Америка", -7, "канадский доллар",
      ["Фанди", "Подкова", "Элсмир", "Невольничье озеро", "Оттава"],
      [["Филип Майкл Ондатже", "Английский пациент", 1992], ["Маргарет Этвуд", "Up In The Tree", 1978]],
      { "1608": "основание города Квебек", "1838": "Битва за ветряную мельницу", "1867": "Канада получила право формировать собственное правительство" }
    ],
    ['argentina', "Аргентина", "Буэнос-Айрес", "Южная Америка", "Америка", -6, "аргентинское песо",
      ["Охос-дель-Саладо", "Огненная земля", "Пампа", "Лагунас-де-Гуанакаче"],
      [["Хорхе Луис Борхес", "Фунес памятливый", 1942]],
      { "1912": "закон о всеобщем избирательном праве", "1871": "Завоевание пустыни", "1810": "Аргентинская война за независимость" }
    ],
    ['kolumbia', "Колумбия", "Богота", "Южная Америка", "Америка", -8, "колумбийское песо",
      ["Кристобаль-Колон", "Магдалена", "Каука", "Анды", "Льянос"],
      [["Рафаэль Помбо", "Флибустьеры", 1856], ["Хосе Эустасио Ривера", "Вихрь", 1924], ["Лаура Рестрепо", "Леопард на солнце", 1993]],
      { "1916": "обнаружены богатейшие запасы нефти", "1549": "образование королевской аудиенсии и канцелярии Санта-Фе де Боготы", "1886": "принята консервативная конституция" }
    ],
    ['england', "Англия", "Лондон", "", "", -3, "фунт стерлингов",
      ["Тис", "Белые клифы Дувра", "Саут-Даунс", "Скофелл-Пайк"],
      [["Майн Рида", "Огненная земля", 1883], ["Уильям Шекспир", "Ромео и Джульетта", 1595], ["Оскар Уайльд", "Портрет Дориана Грея", 1891], ["Джонатан Свифт", "Путешествия в некоторые удалённые страны мира в четырёх частях: сочинение Лемюэля Гулливера, сначала хирурга, а затем капитана нескольких кораблей", 1726]],
      { "1701": "Акт о престолонаследии", "1455": "начало войны Алой и Белой розы", "1215": "Великая хартия вольностей" }
    ],
    ['mexico', "Мексика", "Мехико", "Южная Америка", "Америка", -9, "мексиканское песо",
      ["Попокатепетль", "Калифорния", "Эль-Вискаино", "Сонора", "Чапала", "Гуадалупе", "Пещера Ласточек"],
      [["Октавио Пас", "Salamandra", 1962], ["Амадо Нерво", "Недвижная возлюбленная", 1922], ["Карлос Фуэнтес", "Смерть Артемио Круса", 1962], ["Хуан Рульфо", "Педро Парамо", 1955]],
      { "1810": "Мексиканская война за независимость", "1536": "открытие коллегиума Санта-Крус де Тлателолько", "2006": "Революция кактусов" }
    ]
  ],
  outCountries:
    function () {
      this.countries.forEach(function (element) {
        document.body.innerHTML += makeTable(element);
      })
    }
}


function Changes() {
  this.countries = [
                ['italy', //country[0];
                  "Италия",
                  "Рим",
                  "Евразия",//country[3];
                  "Европа",
                  -2,   //country[5];
                  "итальянская лира",
                  [ //country[7];
                    "Альпы",//country[7][0];
                    "Пальмария",
                    "Апеннинский полуостров",
                    "Комо",
                    "Тальяменто"//country[7][4];
                  ]
                  ,
                  [//country[8]
                    [//country[8][0]
                      "Джованни Верга",//countries[0][8][0][0]
                      "Жизнь среди полей",
                      1880//countries[0][8][0][2]
                    ],
                    ["Анна Виванти", "Цирцея", 1912],
                    ["Джузеппе Понтиджа", "Рождённые дважды", 2000]
                  ],
                  {//country[9]
                    "1882": "избирательная реформа", "1945": "антифашистское восстание, 18-28 апреля"
                  }
                ],
    ['france', "Франция", "Париж", "Евразия", "Европа", -1, "евро",
      ["Эндр", "Пиренеи", "Луара", "Альпы", "Бискайский залив"],
      [["Александр Дюма", "Граф Монте-Кристо", 1845], ["Жюль Габриэль Верн", "Завещание чудака", 1900], ["Луи Анри Буссенар", "Капитан Сорви-голова", 2001], ["Морис Самюэль Роже Шарль Дрюон", "Тисту — мальчик с зелеными пальцами", 1957]],
      { "1572": "Варфоломеевская ночь", "1648": "Вестфальский мир", "1914": "Марнское сражение, 5-12 сентября" }
    ],
    ['switzerland', "Швейцария", "отсутствует", "Евразия", "Европа", -1, "Швейцарский франк",
      ["Бильское озеро", "Рейхенбахский водопад", "Альпы", "Алечский ледник"],
      [["Иоханна Спири", "Хайди: годы странствий и учёбы", 1880], ["Герман Гессе", "Игра в бисер", 1942], ["Макс Фриш", "Homo Фабер", 1957], ["Мелинда Надь Абонджи", "Голуби взлетают", 2010]],
      { "1291": "основание Швейцарии", "1844": "начало работы первой железнодорожной линией" }
    ],
    ['hungary', "Венгрия", "Будапешт", "Евразия", "Европа", -1, "Венгерский форинт",
      ["Геллерт", "Карпаты", "Веленце", "Мезёфёльд"],
      [["Янош Бачаньи", "Мужество венгров", 1785], ["Аттила Бартиш", "Спокойствие", 2001], ["Ийеш Дьюла", "Двое мужчин", 1950]],
      { "1222": "подписание Эндре II «Золотой буллы»", "1867": "Коронование Франца-Иосифа в Будапеште по старым обычаям, 8 июня" }
    ],
    ['romania', "Румыния", "Бухарест", "Евразия", "Европа", 0, "Румынский лей",
      ["Олт", "Трансильванское плато", "Карпаты", "Медвежья пещера", "Бабеле"],
      [["Михаил Садовяну", "Золотая ветвь", 1933], ["Мирча Элиаде", "Изабель и воды дьявола", 1930]],
      { "1881": "Румыния была провозглашена королевством", "1990": "первые свободные президентские и парламентские выборы", "2004": "Румыния стала членом НАТО" }
    ],
    ['japan', "Япония", "Токио", "Евразия", "Азия", 6, "японская иена",
      ["Фудзияма", "Сакурадзима", "Абукума"],
      [["Сюсаку Эндо", "Море и яд", 1958], ["Юдзо Ямамото", "Профессор Цумура", 1919], ["Марико Хасиока", "Аут", 1997]],
      { "1872": " отменена сложного и строгого сословного деления", "1904": "японский флот атаковал русскую эскадру в Порт-Артуре", "1941": "атака на Пёрл-Харбор" }
    ],
    ['afghanistan', "Афганистан", "Кабул", "Евразия", "Азия", 1.5, "афгани",
      ["Намакзар", "Дашти-Марго", "Фарахруд", "Гиндукуш"],
      [["Гуль Пача Ульфат", "Голос сердца", 1962], ["Абдуррауф Бенава", "Горестные размышления", 1957], ["Махмуд-бек Тарзи", "Путешествия через три континента за 29 дней", 1914]],
      { "1973": "провозглашение Республики, 17 июля", "2004": "новая Конституция и проведены первые президентские выборы" }
    ],
    ['india', "Индия", "Нью-Дели", "Евразия", "Азия", 2.5, "Индийская рупия",
      ["Ганг", "Гуру-Сикар", "Дудхсагар", "Цо-Морари", "Деканские траппы"],
      [["Арундати Рой", "Бог мелочей", 1997], ["Хушвант Сингх", "Поезд в Пакистан", 1956]],
      { "1857": "Восстание Сипаев", "1617": "Британская Ост-Индская компания получила право торговать с Индией", "1948": "Операция «Поло»", "1986": "архитектурное наследие Хампи включено в список Всемирного наследия" }
    ],
    ['brazilia', "Бразилия", "Бразилиа", "Южная Америка", "Америка", -6, "риал",
      ["Тапажос", "Пантанал", "пампа", "Сейшас", "Параноа"],
      [["Лима Баррето", "Жалкий конец Поликарпо Кваресма", 1911], ["Эрику Верисиму", "Происшествие в Антаресе", 1971], ["Шику Буарки", "Будапешт ", 2003], ["Жоаким Мануэл ди Маседу", "Смуглянка", 1844]],
      { "1888": "Золотой закон об отмене рабства в Бразилии, 13 мая", "1935": "вооружённое выступление бразильских коммунистов и тенентистов" }
    ],
    ['canada', "Канада", "Оттава", "Северная Америка", "Америка", -7, "канадский доллар",
      ["Фанди", "Подкова", "Элсмир", "Невольничье озеро", "Оттава"],
      [["Филип Майкл Ондатже", "Английский пациент", 1992], ["Маргарет Этвуд", "Up In The Tree", 1978]],
      { "1608": "основание города Квебек", "1838": "Битва за ветряную мельницу", "1867": "Канада получила право формировать собственное правительство" }
    ],
    ['argentina', "Аргентина", "Буэнос-Айрес", "Южная Америка", "Америка", -6, "аргентинское песо",
      ["Охос-дель-Саладо", "Огненная земля", "Пампа", "Лагунас-де-Гуанакаче"],
      [["Хорхе Луис Борхес", "Фунес памятливый", 1942]],
      { "1912": "закон о всеобщем избирательном праве", "1871": "Завоевание пустыни", "1810": "Аргентинская война за независимость" }
    ],
    ['kolumbia', "Колумбия", "Богота", "Южная Америка", "Америка", -8, "колумбийское песо",
      ["Кристобаль-Колон", "Магдалена", "Каука", "Анды", "Льянос"],
      [["Рафаэль Помбо", "Флибустьеры", 1856], ["Хосе Эустасио Ривера", "Вихрь", 1924], ["Лаура Рестрепо", "Леопард на солнце", 1993]],
      { "1916": "обнаружены богатейшие запасы нефти", "1549": "образование королевской аудиенсии и канцелярии Санта-Фе де Боготы", "1886": "принята консервативная конституция" }
    ],
    ['england', "Англия", "Лондон", "", "", -3, "фунт стерлингов",
      ["Тис", "Белые клифы Дувра", "Саут-Даунс", "Скофелл-Пайк"],
      [["Майн Рида", "Огненная земля", 1883], ["Уильям Шекспир", "Ромео и Джульетта", 1595], ["Оскар Уайльд", "Портрет Дориана Грея", 1891], ["Джонатан Свифт", "Путешествия в некоторые удалённые страны мира в четырёх частях: сочинение Лемюэля Гулливера, сначала хирурга, а затем капитана нескольких кораблей", 1726]],
      { "1701": "Акт о престолонаследии", "1455": "начало войны Алой и Белой розы", "1215": "Великая хартия вольностей" }
    ],
    ['mexico', "Мексика", "Мехико", "Южная Америка", "Америка", -9, "мексиканское песо",
      ["Попокатепетль", "Калифорния", "Эль-Вискаино", "Сонора", "Чапала", "Гуадалупе", "Пещера Ласточек"],
      [["Октавио Пас", "Salamandra", 1962], ["Амадо Нерво", "Недвижная возлюбленная", 1922], ["Карлос Фуэнтес", "Смерть Артемио Круса", 1962], ["Хуан Рульфо", "Педро Парамо", 1955]],
      { "1810": "Мексиканская война за независимость", "1536": "открытие коллегиума Санта-Крус де Тлателолько", "2006": "Революция кактусов" }
    ]
  ];
  this.changeCountries = function Changes(data) {
      this.countries.forEach(function (element) {
        if (data == 0) {
          for (var j in element[9]) {
          element[9][j] = element[9][j].toUpperCase();
        }}
        if (data == 1) {
          for (var j in element[9]) {
          element[9][j] = element[9][j].toLowerCase();
        }}
      })
    }
}

var obj2 = new Changes();


document.body.innerHTML += '<h1> Задание а)</h1>';
//а)вывести информацию о государствах объекта obj1 с помощью метода outCountries;
obj1.outCountries();


document.body.innerHTML += '<h1> Задание б)</h1>';
//б)вывести имеющуюся информацию о государствах объекта obj2 с помощью метода outCountries объекта obj1;
obj1.outCountries.call(obj2)

//в)изменить данные obj1.countries с помощью метода changeCountries объекта obj2;
obj2.changeCountries.call(obj1, 0)

document.body.innerHTML += '<h1> Задание г)</h1>';
//г)отобразить изменения в браузере с помощью метода outCountries объекта obj1;
obj1.outCountries()

document.body.innerHTML += '<h1> Задание д)</h1>';
//д)показать как (не)изменились данные поля countries объекта obj2.
obj1.outCountries.call(obj2)







