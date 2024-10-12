const tests = {
    class4: {
     russian: {
    title: 'Русский язык',
    questions: [
        { question: 'Что такое имя существительное?', options: ['Предмет', 'Действие', 'Признак'], answer: 'Предмет' },
        { question: 'Какое слово является синонимом к слову "красивый"?', options: ['уродливый', 'привлекательный', 'необычный'], answer: 'привлекательный' },
        { question: 'Что такое прилагательное?', options: ['Слово, обозначающее предмет', 'Слово, описывающее предмет', 'Слово, обозначающее действие'], answer: 'Слово, описывающее предмет' },
        { question: 'Какой из этих глаголов в будущем времени?', options: ['пошел', 'пойдет', 'идти'], answer: 'пойдет' },
        { question: 'Что такое антоним?', options: ['Слово с противоположным значением', 'Слово с похожим значением', 'Слово, обозначающее действие'], answer: 'Слово с противоположным значением' },
        { question: 'Какой из этих слов - наречие?', options: ['бежать', 'быстро', 'красивый'], answer: 'быстро' },
        { question: 'Как правильно написать: "день рождения" или "день рождение"?', options: ['день рождения', 'день рождение'], answer: 'день рождения' },
        { question: 'Какое слово является предлогом?', options: ['в', 'бежать', 'синий'], answer: 'в' },
        { question: 'Сколько слогов в слове "медведь"?', options: ['2', '3', '4'], answer: '3' },
        { question: 'Какое слово пишется с большой буквы?', options: ['река', 'московский', 'зима'], answer: 'московский' },
        { question: 'Что такое вопросительное предложение?', options: ['Предложение, задающее вопрос', 'Предложение, сообщающее информацию', 'Предложение, выражающее команду'], answer: 'Предложение, задающее вопрос' },
        { question: 'Какое из этих слов - глагол?', options: ['мяч', 'играть', 'красивый'], answer: 'играть' },
        { question: 'Что такое тире в предложении?', options: ['Знак препинания', 'Слово', 'Часть речи'], answer: 'Знак препинания' },
        { question: 'Какой из этих вариантов правильный?', options: ['Он поехал в Москву', 'Он поехал в москву', 'Он поехал в москву.'], answer: 'Он поехал в Москву' },
        { question: 'Что такое составное именное сказуемое?', options: ['Глагол и существительное', 'Существительное и прилагательное', 'Два глагола'], answer: 'Глагол и существительное' },
        { question: 'Что такое прямой речи?', options: ['Речь, произнесенная другими', 'Цитата чьих-то слов', 'Мнение автора'], answer: 'Цитата чьих-то слов' },
        { question: 'Какое слово является однокоренным к слову "учитель"?', options: ['учиться', 'ученики', 'учёба'], answer: 'учёба' },
        { question: 'Что такое составное сказуемое?', options: ['Два подлежащих', 'Глагол и дополнение', 'Глагол с дополнением'], answer: 'Глагол с дополнением' },
        { question: 'Какой из этих вопросов правильный?', options: ['Кто ты?', 'Кто ты'], answer: 'Кто ты?' },
        { question: 'Какой знак препинания используется в конце вопроса?', options: ['.', '!', '?'], answer: '?' },
        { question: 'Какое слово является антонимом к слову "грустный"?', options: ['весёлый', 'радостный', 'печальный'], answer: 'весёлый' },
        { question: 'Что такое суффикс?', options: ['Часть слова', 'Отдельное слово', 'Синоним'], answer: 'Часть слова' },
        { question: 'Какое из этих слов - синоним к слову "начало"?', options: ['конец', 'старый', 'старт'], answer: 'старт' },
        { question: 'Какой из этих вариантов является сложным предложением?', options: ['Я читаю книгу, и ты смотришь фильм.', 'Я читаю книгу.', 'Ты смотришь фильм.'], answer: 'Я читаю книгу, и ты смотришь фильм.' },
        { question: 'Какое слово написано с ошибкой?', options: ['Собака', 'Кошка', 'Котка'], answer: 'Котка' },
        { question: 'Что такое вопросительное местоимение?', options: ['Кто, что, где', 'Как, почему', 'Да, нет'], answer: 'Кто, что, где' },
        { question: 'Какое из этих слов - союз?', options: ['и', 'потому', 'в'], answer: 'и' },
        { question: 'Что такое фразеологизм?', options: ['Сложное предложение', 'Словосочетание', 'Стихотворение'], answer: 'Словосочетание' },
        { question: 'Какое слово является наречием?', options: ['долго', 'долгий', 'долг'], answer: 'долго' },
        { question: 'Какой из этих предложений является восклицательным?', options: ['Как я тебя люблю!', 'Ты пришёл?', 'Он читает книгу.'], answer: 'Как я тебя люблю!' }
    ]
},
       math: {
    title: 'Математика',
    questions: [
        { question: 'Сколько будет 2 + 3?', options: ['4', '5', '6'], answer: '5' },
        { question: 'Сколько будет 7 - 4?', options: ['2', '3', '1'], answer: '3' },
        { question: 'Сколько будет 6 × 5?', options: ['30', '25', '35'], answer: '30' },
        { question: 'Какое число больше: 15 или 12?', options: ['15', '12'], answer: '15' },
        { question: 'Сколько будет 8 ÷ 2?', options: ['2', '4', '6'], answer: '4' },
        { question: 'Какой из этих углов является прямым?', options: ['90°', '45°', '60°'], answer: '90°' },
        { question: 'Сколько сантиметров в метре?', options: ['100', '1000', '10'], answer: '100' },
        { question: 'Что больше: 0,5 или 0,25?', options: ['0,5', '0,25'], answer: '0,5' },
        { question: 'Сколько будет 3 + 6 × 2?', options: ['9', '12', '15'], answer: '15' },
        { question: 'Какое число является четным?', options: ['3', '7', '8'], answer: '8' },
        { question: 'Сколько углов у треугольника?', options: ['3', '4', '5'], answer: '3' },
        { question: 'Сколько будет 12 - 7?', options: ['5', '4', '3'], answer: '5' },
        { question: 'Что такое периметр?', options: ['Сумма всех сторон фигуры', 'Площадь фигуры', 'Длина одной стороны'], answer: 'Сумма всех сторон фигуры' },
        { question: 'Какое число идет после 29?', options: ['28', '30', '31'], answer: '30' },
        { question: 'Сколько будет 15 ÷ 3?', options: ['3', '4', '5'], answer: '5' },
        { question: 'Сколько дней в неделе?', options: ['5', '6', '7'], answer: '7' },
        { question: 'Какой из этих дробей больше: 1/2 или 1/3?', options: ['1/2', '1/3'], answer: '1/2' },
        { question: 'Какой из этих чисел является простым?', options: ['4', '5', '6'], answer: '5' },
        { question: 'Сколько будет 5 + 5 + 5?', options: ['10', '15', '20'], answer: '15' },
        { question: 'Что такое площадь?', options: ['Мера поверхности', 'Мера длины', 'Мера объема'], answer: 'Мера поверхности' },
        { question: 'Какое из следующих чисел нечетное?', options: ['8', '9', '10'], answer: '9' },
        { question: 'Сколько минут в одном часе?', options: ['60', '30', '50'], answer: '60' },
        { question: 'Какое из следующих чисел является квадратом числа 4?', options: ['16', '8', '12'], answer: '16' },
        { question: 'Какое число будет следующим в последовательности 2, 4, 6, ...?', options: ['7', '8', '10'], answer: '8' },
        { question: 'Сколько будет 9 - 5?', options: ['3', '4', '5'], answer: '4' },
        { question: 'Сколько миллиметров в сантиметре?', options: ['10', '100', '1000'], answer: '10' },
        { question: 'Какой из этих углов является острым?', options: ['30°', '90°', '120°'], answer: '30°' },
        { question: 'Сколько будет 3 × 3?', options: ['6', '8', '9'], answer: '9' },
        { question: 'Какой из этих чисел делится на 3?', options: ['14', '15', '16'], answer: '15' },
        { question: 'Сколько будет 100 - 25?', options: ['75', '85', '65'], answer: '75' },
        { question: 'Какое из следующих чисел является квадратом числа 5?', options: ['25', '20', '30'], answer: '25' },
        { question: 'Сколько будет 7 + 8?', options: ['15', '14', '16'], answer: '15' },
        { question: 'Что такое степень числа?', options: ['Умножение числа само на себя', 'Сложение числа', 'Выражение числа в дробях'], answer: 'Умножение числа само на себя' },
        { question: 'Сколько будет 2 × 2 × 2?', options: ['4', '6', '8'], answer: '8' },
        { question: 'Сколько сантиметров в дюйме?', options: ['2,54', '3', '2'], answer: '2,54' }
    ]
},
        english: {
    title: 'Английский язык',
    questions: [
        { question: 'Как переводится слово "cat"?', options: ['кошка', 'собака', 'птица'], answer: 'кошка' },
        { question: 'Какое из этих слов является глаголом?', options: ['run', 'beautiful', 'happy'], answer: 'run' },
        { question: 'Что означает слово "hello"?', options: ['привет', 'пока', 'спасибо'], answer: 'привет' },
        { question: 'Какое из этих слов является прилагательным?', options: ['apple', 'red', 'eat'], answer: 'red' },
        { question: 'Как будет "стол" на английском?', options: ['table', 'chair', 'desk'], answer: 'table' },
        { question: 'Какое слово означает "дом"?', options: ['house', 'car', 'tree'], answer: 'house' },
        { question: 'Как будет "спасибо" на английском?', options: ['thank you', 'please', 'sorry'], answer: 'thank you' },
        { question: 'Какое из этих слов - местоимение?', options: ['he', 'book', 'table'], answer: 'he' },
        { question: 'Как переводится слово "книга"?', options: ['book', 'pen', 'pencil'], answer: 'book' },
        { question: 'Что означает слово "goodbye"?', options: ['до свидания', 'привет', 'спасибо'], answer: 'до свидания' },
        { question: 'Какое слово является антонимом к "big"?', options: ['small', 'large', 'tall'], answer: 'small' },
        { question: 'Как будет "я люблю тебя" на английском?', options: ['I love you', 'You love me', 'I like you'], answer: 'I love you' },
        { question: 'Какое из этих слов - существительное?', options: ['run', 'dog', 'happy'], answer: 'dog' },
        { question: 'Как переводится слово "молоко"?', options: ['milk', 'water', 'juice'], answer: 'milk' },
        { question: 'Какое из этих слов является вопросительным местомимением?', options: ['who', 'happy', 'red'], answer: 'who' },
        { question: 'Что означает слово "yes"?', options: ['да', 'нет', 'возможно'], answer: 'да' },
        { question: 'Какое слово переводится как "маленький"?', options: ['small', 'big', 'tall'], answer: 'small' },
        { question: 'Как будет "она" на английском?', options: ['she', 'he', 'it'], answer: 'she' },
        { question: 'Какое из этих слов - наречие?', options: ['quickly', 'quick', 'quickness'], answer: 'quickly' },
        { question: 'Что означает слово "happy"?', options: ['счастливый', 'грустный', 'разозленный'], answer: 'счастливый' },
        { question: 'Как будет "где" на английском?', options: ['where', 'when', 'who'], answer: 'where' },
        { question: 'Какое из этих слов является синонимом к слову "sad"?', options: ['happy', 'unhappy', 'excited'], answer: 'unhappy' },
        { question: 'Что означает слово "fast"?', options: ['быстрый', 'медленный', 'тихий'], answer: 'быстрый' },
        { question: 'Как будет "птица" на английском?', options: ['bird', 'fish', 'animal'], answer: 'bird' },
        { question: 'Какое из этих слов является глаголом действия?', options: ['jump', 'blue', 'beautiful'], answer: 'jump' },
        { question: 'Как переводится слово "студент"?', options: ['student', 'teacher', 'school'], answer: 'student' },
        { question: 'Что означает слово "no"?', options: ['нет', 'да', 'возможно'], answer: 'нет' },
        { question: 'Как будет "неделя" на английском?', options: ['week', 'month', 'year'], answer: 'week' },
        { question: 'Какое из этих слов - предлог?', options: ['on', 'happy', 'cat'], answer: 'on' },
        { question: 'Как переводится слово "красный"?', options: ['red', 'green', 'blue'], answer: 'red' },
        { question: 'Как будет "моя семья" на английском?', options: ['my family', 'my home', 'my house'], answer: 'my family' },
        { question: 'Какое из этих слов является частью тела?', options: ['hand', 'quick', 'happy'], answer: 'hand' },
        { question: 'Как переводится слово "день"?', options: ['day', 'night', 'morning'], answer: 'day' },
        { question: 'Как будет "мы" на английском?', options: ['we', 'us', 'our'], answer: 'we' },
        { question: 'Что означает слово "cold"?', options: ['холодный', 'горячий', 'теплый'], answer: 'холодный' }
    ]
},
       nature: {
    title: 'Познание мира',
    questions: [
        { question: 'Что нужно делать, если ты увидел огонь?', options: ['Подходить ближе', 'Сказать взрослым', 'Игнорировать'], answer: 'Сказать взрослым' },
        { question: 'Как правильно переходить дорогу?', options: ['Бегом', 'Смотрев по сторонам', 'С закрытыми глазами'], answer: 'Смотрев по сторонам' },
        { question: 'Что такое безопасное поведение?', options: ['Игнорировать правила', 'Соблюдать правила', 'Никого не слушать'], answer: 'Соблюдать правила' },
        { question: 'Что делать, если кто-то упал на улице?', options: ['Пройти мимо', 'Проверить, как он себя чувствует', 'Смеяться'], answer: 'Проверить, как он себя чувствует' },
        { question: 'Какой номер службы спасения?', options: ['555', '911', '101'], answer: '101' },
        { question: 'Что делать, если ты потерялся?', options: ['Сидеть и ждать', 'Спросить прохожего', 'Бежать в лес'], answer: 'Спросить прохожего' },
        { question: 'Как вести себя на уроке?', options: ['Разговаривать с соседями', 'Слушать учителя', 'Играть в телефон'], answer: 'Слушать учителя' },
        { question: 'Что делать, если идет дождь?', options: ['Не выходить на улицу', 'Носить зонт', 'Играть в лужах'], answer: 'Носить зонт' },
        { question: 'Как правильно мыть руки?', options: ['С мылом', 'С водой', 'Не мыть'], answer: 'С мылом' },
        { question: 'Какое фрукт полезно есть каждый день?', options: ['Чипсы', 'Яблоки', 'Кексы'], answer: 'Яблоки' },
        { question: 'Что нужно делать перед тем, как сесть за стол?', options: ['Мыть руки', 'Играть', 'Смотреть телевизор'], answer: 'Мыть руки' },
        { question: 'Что такое дружба?', options: ['Отношения между людьми', 'Конфликт', 'Непонимание'], answer: 'Отношения между людьми' },
        { question: 'Какой цвет означает опасность на светофоре?', options: ['Зеленый', 'Красный', 'Желтый'], answer: 'Красный' },
        { question: 'Что делать, если ты заболел?', options: ['Игнорировать', 'Сказать родителям', 'Играть на улице'], answer: 'Сказать родителям' },
        { question: 'Как нужно убирать за собой?', options: ['Бросать вещи', 'Складывать на место', 'Игнорировать'], answer: 'Складывать на место' },
        { question: 'Что делать, если ты не понимаешь задание?', options: ['Спросить учителя', 'Сказать, что все понятно', 'Игнорировать'], answer: 'Спросить учителя' },
        { question: 'Какой знак указывает на переход пешеходов?', options: ['Зеленый', 'Синий', 'Знак пешеходного перехода'], answer: 'Знак пешеходного перехода' },
        { question: 'Что делать, если ты увидел потерянного щенка?', options: ['Погладить его', 'Пойти дальше', 'Сказать взрослым'], answer: 'Сказать взрослым' },
        { question: 'Как правильно вести себя на празднике?', options: ['Шуметь и бегать', 'Соблюдать порядок', 'Игнорировать всех'], answer: 'Соблюдать порядок' },
        { question: 'Как нужно вести себя в общественном транспорте?', options: ['Шуметь', 'Сидеть тихо', 'Толкаться'], answer: 'Сидеть тихо' },
        { question: 'Что делать, если тебе плохо на улице?', options: ['Игнорировать', 'Попросить помощи', 'Сидеть на месте'], answer: 'Попросить помощи' },
        { question: 'Какой элемент важен для жизни?', options: ['Вода', 'Сахар', 'Соль'], answer: 'Вода' },
        { question: 'Что нужно делать, если ты хочешь пить?', options: ['Сказать родителям', 'Играть', 'Игнорировать'], answer: 'Сказать родителям' },
        { question: 'Какой номер у скорой помощи?', options: ['112', '103', '911'], answer: '103' },
        { question: 'Что делать, если кто-то просит о помощи?', options: ['Игнорировать', 'Помочь', 'Смеяться'], answer: 'Помочь' },
        { question: 'Как должен вести себя ребенок в магазине?', options: ['Бегать', 'Помогать родителям', 'Игнорировать'], answer: 'Помогать родителям' },
        { question: 'Что делать, если ты видишь, что кто-то потерялся?', options: ['Игнорировать', 'Попросить помощи у взрослых', 'Смеяться'], answer: 'Попросить помощи у взрослых' },
        { question: 'Какой цвет у сигнала "Стоп"?', options: ['Красный', 'Зеленый', 'Синий'], answer: 'Красный' },
        { question: 'Что нужно делать в случае несчастного случая?', options: ['Кричать', 'Вызывать помощь', 'Игнорировать'], answer: 'Вызывать помощь' }
    ]
},
        geo: {
            title: 'Azərbaycan dili',
    questions: [
        { question: 'Hansı söz böyük hərflə yazılır?', options: ['bağ', 'baku', 'ev'], answer: 'baku' },
        { question: 'Hansı söz isimdir?', options: ['gəlmək', 'gözəl', 'qələm'], answer: 'qələm' },
        { question: 'Hansı söz feil deyil?', options: ['oxumaq', 'şirin', 'yazmaq'], answer: 'şirin' },
        { question: 'Hansı söz təkdir?', options: ['kitablar', 'qələm', 'gözlər'], answer: 'qələm' },
        { question: 'Hansı söz cəmdir?', options: ['qələm', 'kitablar', 'masa'], answer: 'kitablar' },
        { question: 'Hansı söz antonimdir?', options: ['böyük', 'kiçik', 'gözəl'], answer: 'kiçik' },
        { question: 'Hansı söz sinonimdir?', options: ['gözəl', 'çirkin', 'sade'], answer: 'gözəl' },
        { question: 'Hansı cümlə doğrudur?', options: ['Mən kitab oxuyuram.', 'Mən kitab oxuyursan.', 'Mən kitab oxuyur.'], answer: 'Mən kitab oxuyuram.' },
        { question: 'Hansı söz zərfdir?', options: ['sürətlə', 'gözəl', 'yazı'], answer: 'sürətlə' },
        { question: 'Hansı söz cümlənin mübtədasıdır?', options: ['Mən', 'kitab', 'gözəl'], answer: 'Mən' },
        { question: 'Hansı söz sual cümləsidir?', options: ['Sən harada gedirsən?', 'Mən evdəyəm.', 'O, gəlir.'], answer: 'Sən harada gedirsən?' },
        { question: 'Hansı sözü düzgün yazmısınız?', options: ['kitab', 'qələm', 'ev'], answer: 'kitab' },
        { question: 'Hansı cümlə təsdiqedici cümlədir?', options: ['Sən gələcəksən.', 'Gələcək misir?', 'Gəlir.'], answer: 'Sən gələcəksən.' },
        { question: 'Hansı sözün əksi var?', options: ['qaranlıq', 'işıq', 'gözəl'], answer: 'qaranlıq' },
        { question: 'Hansı söz bu cümləyə uyğun gəlir: "Mən ___ gedirəm"?', options: ['evə', 'ev', 'evdə'], answer: 'evə' },
        { question: 'Hansı söz bura uyğun gəlir: "Mən kitab ___ oxuyuram"?', options: ['həmişə', 'həmişəlik', 'həmişəlikdə'], answer: 'həmişə' },
        { question: 'Hansı cümlədə səhv var?', options: ['Mən məktəbə gedirəm.', 'O, gəlir.', 'Sən evdədirsənmi?'], answer: 'Sən evdədirsənmi?' },
        { question: 'Hansı söz dondurmadır?', options: ['şirin', 'soyuq', 'qaynar'], answer: 'soyuq' },
        { question: 'Hansı cümlə əmr cümləsidir?', options: ['Mən gəlirəm.', 'Gəl buraya.', 'Sən oxuyursan.'], answer: 'Gəl buraya.' },
        { question: 'Hansı cümlə sual cümləsidir?', options: ['O, gələcəkmi?', 'Mən evdəyəm.', 'Mən məktəbə gedirəm.'], answer: 'O, gələcəkmi?' },
        { question: 'Hansı söz dırnaqlıdır?', options: ['kitab', 'qələm', 'ev'], answer: 'kitab' },
        { question: 'Hansı cümlədə mübtəda yoxdur?', options: ['Mən kitab oxuyuram.', 'O, gəlir.', 'Oxuyur.'], answer: 'Oxuyur.' },
        { question: 'Hansı cümlə tamamlanmışdır?', options: ['O, parkda oynayır.', 'Sən gəl.', 'Mən məktəb.'], answer: 'O, parkda oynayır.' },
        { question: 'Hansı söz uyğun deyil?', options: ['ağ', 'qara', 'şirin'], answer: 'şirin' },
        { question: 'Hansı söz saydadır?', options: ['bir', 'gözəl', 'sarı'], answer: 'bir' },
        { question: 'Hansı cümlə doğrudur?', options: ['Mən gəlirəm.', 'O gəlir.', 'Mən gəlməm.'], answer: 'O gəlir.' },
        { question: 'Hansı söz deyil? ', options: ['gedir', 'kitab', 'şirin'], answer: 'şirin' },
        { question: 'Hansı cümlə təsdiqlidir?', options: ['Mən evə gedirəm.', 'Gəlir?', 'Mən gəlir.'], answer: 'Mən evə gedirəm.' },
        { question: 'Hansı sözün sinonimi var?', options: ['qış', 'yay', 'yaz'], answer: 'yay' }

            ]
        }
    },
    class5: {
        russian: {
    title: 'Русский язык',
    questions: [
        { question: 'Что такое часть речи?', options: ['Слово', 'Предложение', 'Синтаксис'], answer: 'Слово' },
        { question: 'Какой из этих слов является существительным?', options: ['Бежать', 'Красивая', 'Книга'], answer: 'Книга' },
        { question: 'Что такое синоним?', options: ['Слово с противоположным значением', 'Слово с похожим значением', 'Слово с тем же значением'], answer: 'Слово с похожим значением' },
        { question: 'Какой из этих глаголов в прошедшем времени?', options: ['Шел', 'Иду', 'Пойду'], answer: 'Шел' },
        { question: 'Что обозначает слово "прилагательное"?', options: ['Имя предмета', 'Признак предмета', 'Действие предмета'], answer: 'Признак предмета' },
        { question: 'Какой из этих слов - антоним к слову "горячий"?', options: ['Теплый', 'Холодный', 'Жаркий'], answer: 'Холодный' },
        { question: 'Как правильно написать: "по утрам" или "по утро"?', options: ['по утрам', 'по утро'], answer: 'по утрам' },
        { question: 'Какой из этих слов - наречие?', options: ['Быстрый', 'Быстро', 'Бежать'], answer: 'Быстро' },
        { question: 'Что такое грамматика?', options: ['Наука о языке', 'Наука о литературе', 'Наука о культуре'], answer: 'Наука о языке' },
        { question: 'Какое из этих слов является предлогом?', options: ['На', 'Бежать', 'Синяя'], answer: 'На' },
        { question: 'Что такое предложение?', options: ['Группа слов', 'Слово', 'Часть речи'], answer: 'Группа слов' },
        { question: 'Какой из этих слов является местоимением?', options: ['Он', 'Книга', 'Бежать'], answer: 'Он' },
        { question: 'Какой из этих вопросов правильный?', options: ['Что ты делаешь?', 'Где ты делать?', 'Когда ты делаешь?'], answer: 'Что ты делаешь?' },
        { question: 'Какое слово является синонимом к слову "умный"?', options: ['Глупый', 'Разумный', 'Тупой'], answer: 'Разумный' },
        { question: 'Какой из этих предложений является сложносочиненным?', options: ['Я пришел, и ты пришел.', 'Когда я пришел, ты уже ушел.', 'Я пришел.'], answer: 'Я пришел, и ты пришел.' },
        { question: 'Какой из этих слов - уменьшительно-ласкательное?', options: ['Кошка', 'Кошечка', 'Кошак'], answer: 'Кошечка' },
        { question: 'Какое слово является антонимом к слову "мягкий"?', options: ['Жесткий', 'Легкий', 'Теплый'], answer: 'Жесткий' },
        { question: 'Какой из этих слов является причастием?', options: ['Смеющийся', 'Смеяться', 'Смех'], answer: 'Смеющийся' },
        { question: 'Как правильно написать: "недалеко" или "не далеко"?', options: ['недалеко', 'не далеко'], answer: 'недалеко' },
        { question: 'Что такое аллитерация?', options: ['Сходство звуков', 'Сходство значений', 'Сходство предложений'], answer: 'Сходство звуков' },
        { question: 'Какое из этих слов - существительное во множественном числе?', options: ['Стол', 'Столы', 'Столик'], answer: 'Столы' },
        { question: 'Что такое метафора?', options: ['Прямое сравнение', 'Переносное значение', 'Противоположное значение'], answer: 'Переносное значение' },
        { question: 'Какой из этих вопросов риторический?', options: ['Ты ведь знаешь?', 'Где ты был?', 'Что ты делаешь?'], answer: 'Ты ведь знаешь?' },
        { question: 'Какой из этих слов - союз?', options: ['И', 'Бежать', 'Красивая'], answer: 'И' },
        { question: 'Какое слово является антонимом к слову "длинный"?', options: ['Широкий', 'Короткий', 'Высокий'], answer: 'Короткий' },
        { question: 'Что такое синтаксис?', options: ['Строение предложения', 'Значение слов', 'Звуковая система'], answer: 'Строение предложения' },
        { question: 'Какое из этих слов - глагол?', options: ['Читать', 'Книга', 'Красивый'], answer: 'Читать' },
        { question: 'Какое из этих предложений является простым?', options: ['Я пришел и ты пришел.', 'Я пришел.', 'Я пришел, когда ты пришел.'], answer: 'Я пришел.' },
        { question: 'Какое слово является существительным?', options: ['Бегать', 'Бег', 'Бегу'], answer: 'Бег' },
        { question: 'Какое из этих слов - предлог?', options: ['На', 'Читать', 'Книга'], answer: 'На' },
        { question: 'Какой из этих вопросов правильный?', options: ['Где ты был?', 'Ты где был?', 'Ты был где?'], answer: 'Где ты был?' }
    ]
},
        math: {
    title: 'Математика',
    questions: [
        { question: 'Сколько будет 15 + 7?', options: ['22', '21', '23'], answer: '22' },
        { question: 'Чему равно 9 × 6?', options: ['54', '56', '52'], answer: '54' },
        { question: 'Какой результат вычитания 45 - 18?', options: ['27', '28', '29'], answer: '27' },
        { question: 'Сколько градусов в прямом угле?', options: ['90', '180', '360'], answer: '90' },
        { question: 'Что такое квадрат числа 4?', options: ['8', '16', '12'], answer: '16' },
        { question: 'Какой результат деления 64 ÷ 8?', options: ['6', '8', '7'], answer: '8' },
        { question: 'Сколько сантиметров в метре?', options: ['100', '50', '150'], answer: '100' },
        { question: 'Какой периметр квадрата со стороной 5 см?', options: ['20 см', '25 см', '15 см'], answer: '20 см' },
        { question: 'Сколько углов у треугольника?', options: ['3', '4', '5'], answer: '3' },
        { question: 'Какой результат 12 + 15 - 7?', options: ['20', '21', '19'], answer: '20' },
        { question: 'Чему равно 3/4 + 1/4?', options: ['1', '2/4', '3/4'], answer: '1' },
        { question: 'Сколько дней в неделе?', options: ['5', '6', '7'], answer: '7' },
        { question: 'Какое число является делителем числа 36?', options: ['5', '3', '7'], answer: '3' },
        { question: 'Чему равно 7²?', options: ['49', '56', '42'], answer: '49' },
        { question: 'Какой результат 18 - 3 × 2?', options: ['12', '9', '15'], answer: '12' },
        { question: 'Сколько минут в одном часу?', options: ['60', '70', '50'], answer: '60' },
        { question: 'Какой результат 5 + 3 × 4?', options: ['32', '20', '17'], answer: '17' },
        { question: 'Сколько граммов в килограмме?', options: ['1000', '100', '10'], answer: '1000' },
        { question: 'Какой объем куба со стороной 3 см?', options: ['9 см³', '27 см³', '12 см³'], answer: '27 см³' },
        { question: 'Что такое процент?', options: ['Часть от целого', 'Увеличение', 'Уменьшение'], answer: 'Часть от целого' },
        { question: 'Чему равно 50% от 200?', options: ['100', '50', '75'], answer: '100' },
        { question: 'Какой результат 8 + 12 ÷ 4?', options: ['10', '14', '12'], answer: '10' },
        { question: 'Сколько треугольников в квадрате?', options: ['4', '2', '3'], answer: '2' },
        { question: 'Какой результат 25 - (5 + 5)?', options: ['15', '20', '10'], answer: '15' },
        { question: 'Какой периметр прямоугольника с длиной 6 см и шириной 4 см?', options: ['20 см', '24 см', '18 см'], answer: '20 см' },
        { question: 'Какой результат 16 ÷ 4 × 2?', options: ['8', '6', '4'], answer: '8' },
        { question: 'Сколько восьмерок в числе 64?', options: ['8', '4', '2'], answer: '8' },
        { question: 'Какой результат (3 + 5) × 2?', options: ['16', '10', '14'], answer: '16' },
        { question: 'Сколько часов в сутках?', options: ['24', '12', '36'], answer: '24' },
        { question: 'Что такое дробь?', options: ['Число', 'Деление', 'Часть целого'], answer: 'Часть целого' },
        { question: 'Какой результат 100 - 25 × 3?', options: ['25', '75', '50'], answer: '25' },
        { question: 'Какой результат 15% от 200?', options: ['30', '20', '25'], answer: '30' }
    ]
},
        english: {
    title: 'Английский язык',
    questions: [
        { question: 'Как переводится слово "cat"?', options: ['Кошка', 'Собака', 'Птица'], answer: 'Кошка' },
        { question: 'Какое время года следует после лета?', options: ['Зима', 'Осень', 'Весна'], answer: 'Осень' },
        { question: 'Какой из этих слов является глаголом?', options: ['Run', 'Beautiful', 'Happiness'], answer: 'Run' },
        { question: 'Как сказать "спасибо" на английском?', options: ['Please', 'Thank you', 'Sorry'], answer: 'Thank you' },
        { question: 'Что означает слово "house"?', options: ['Дом', 'Квартира', 'Здание'], answer: 'Дом' },
        { question: 'Какой из этих слов - прилагательное?', options: ['Quickly', 'Happy', 'Run'], answer: 'Happy' },
        { question: 'Как переводится "друг"?', options: ['Friend', 'Enemy', 'Partner'], answer: 'Friend' },
        { question: 'Какой вопрос правильно сформулирован?', options: ['Where are you from?', 'You are from where?', 'From where are you?'], answer: 'Where are you from?' },
        { question: 'Как сказать "я люблю" на английском?', options: ['I like', 'I love', 'I enjoy'], answer: 'I love' },
        { question: 'Как переводится слово "книга"?', options: ['Book', 'Notebook', 'Paper'], answer: 'Book' },
        { question: 'Какой из этих вопросов риторический?', options: ['Do you like pizza?', 'Is the sky blue?', 'Where do you live?'], answer: 'Is the sky blue?' },
        { question: 'Как сказать "моя семья" на английском?', options: ['My family', 'My friend', 'My home'], answer: 'My family' },
        { question: 'Какой из этих слов является существительным?', options: ['Quick', 'Happiness', 'Table'], answer: 'Table' },
        { question: 'Как переводится "медведь"?', options: ['Bear', 'Wolf', 'Fox'], answer: 'Bear' },
        { question: 'Какой из этих слов - местоимение?', options: ['He', 'Blue', 'Run'], answer: 'He' },
        { question: 'Как переводится "школа"?', options: ['School', 'Class', 'Education'], answer: 'School' },
        { question: 'Какой из этих глаголов - неправильный?', options: ['Go', 'Play', 'Watch'], answer: 'Go' },
        { question: 'Как сказать "где ты живешь?" на английском?', options: ['Where do you live?', 'You live where?', 'Where live you?'], answer: 'Where do you live?' },
        { question: 'Как переводится слово "солнце"?', options: ['Moon', 'Star', 'Sun'], answer: 'Sun' },
        { question: 'Какой из этих слов - наречие?', options: ['Quickly', 'Fast', 'Run'], answer: 'Quickly' },
        { question: 'Как сказать "я учусь" на английском?', options: ['I study', 'I learn', 'I teach'], answer: 'I study' },
        { question: 'Какой из этих слов - артикль?', options: ['A', 'An', 'The'], answer: 'A' },
        { question: 'Как переводится "яблоко"?', options: ['Apple', 'Orange', 'Banana'], answer: 'Apple' },
        { question: 'Какой из этих вопросов правильно сформулирован?', options: ['What is your name?', 'Your name is what?', 'Name what is your?'], answer: 'What is your name?' },
        { question: 'Как переводится "учитель"?', options: ['Student', 'Teacher', 'Pupil'], answer: 'Teacher' },
        { question: 'Какой из этих слов - предлог?', options: ['Under', 'Jump', 'Blue'], answer: 'Under' },
        { question: 'Как сказать "мне нравится" на английском?', options: ['I like', 'I love', 'I hate'], answer: 'I like' },
        { question: 'Как переводится "день"?', options: ['Day', 'Night', 'Week'], answer: 'Day' },
        { question: 'Какой из этих слов является антонимом к слову "горячий"?', options: ['Cold', 'Warm', 'Hot'], answer: 'Cold' },
        { question: 'Как сказать "мы идем" на английском?', options: ['We go', 'We going', 'We are going'], answer: 'We are going' },
        { question: 'Как переводится "цветок"?', options: ['Flower', 'Tree', 'Bush'], answer: 'Flower' },
        { question: 'Какой из этих вопросов риторический?', options: ['Can you swim?', 'Is it raining?', 'Where are you going?'], answer: 'Is it raining?' }
    ]
},
        nature: {
    title: 'Природа',
    questions: [
        { question: 'Какое из этих животных млекопитающее?', options: ['Змея', 'Кит', 'Утка'], answer: 'Кит' },
        { question: 'Что такое экосистема?', options: ['Сообщество живых организмов', 'Только растения', 'Только животные'], answer: 'Сообщество живых организмов' },
        { question: 'Какой процесс называется фотосинтезом?', options: ['Производство пищи растениями', 'Дыхание', 'Рост'], answer: 'Производство пищи растениями' },
        { question: 'Какой газ выделяется растениями в процессе фотосинтеза?', options: ['Кислород', 'Углекислый газ', 'Азот'], answer: 'Кислород' },
        { question: 'Что такое круговорот воды?', options: ['Цикл перемещения воды в природе', 'Увлажнение', 'Испарение'], answer: 'Цикл перемещения воды в природе' },
        { question: 'Какое из этих растений является древесным?', options: ['Трава', 'Дерево', 'Кустарник'], answer: 'Дерево' },
        { question: 'Какие животные относятся к хищникам?', options: ['Зайцы', 'Львы', 'Коровы'], answer: 'Львы' },
        { question: 'Какой из этих процессов является частью круговорота воды?', options: ['Испарение', 'Фотосинтез', 'Дыхание'], answer: 'Испарение' },
        { question: 'Что такое биоразнообразие?', options: ['Разнообразие видов', 'Только растения', 'Только животные'], answer: 'Разнообразие видов' },
        { question: 'Какое из этих животных не может летать?', options: ['Птица', 'Бабочка', 'Слон'], answer: 'Слон' },
        { question: 'Что такое симбиоз?', options: ['Сожительство разных видов', 'Конкуренция', 'Только растения'], answer: 'Сожительство разных видов' },
        { question: 'Какой из этих элементов необходим для дыхания животных?', options: ['Кислород', 'Вода', 'Соль'], answer: 'Кислород' },
        { question: 'Какое из этих явлений является атмосферным?', options: ['Дождь', 'Цветение', 'Ураган'], answer: 'Дождь' },
        { question: 'Какой процесс называется опылением?', options: ['Перенос пыльцы с цветка на цветок', 'Рост растений', 'Испарение воды'], answer: 'Перенос пыльцы с цветка на цветок' },
        { question: 'Какое из этих растений является травянистым?', options: ['Береза', 'Пшеница', 'Ель'], answer: 'Пшеница' },
        { question: 'Что такое экология?', options: ['Наука о взаимодействии организмов и среды', 'Наука о животных', 'Наука о растениях'], answer: 'Наука о взаимодействии организмов и среды' },
        { question: 'Какой из этих процессов происходит в почве?', options: ['Распад органических веществ', 'Испарение', 'Фотосинтез'], answer: 'Распад органических веществ' },
        { question: 'Какое из этих животных является насекомым?', options: ['Медведь', 'Птица', 'Бабочка'], answer: 'Бабочка' },
        { question: 'Что такое климат?', options: ['Средняя погода региона', 'Погода в конкретный день', 'Сезоны года'], answer: 'Средняя погода региона' },
        { question: 'Какое из этих явлений называется природным ресурсом?', options: ['Вода', 'Строительство', 'Техника'], answer: 'Вода' },
        { question: 'Что такое естественный отбор?', options: ['Выживание наиболее приспособленных', 'Уменьшение популяции', 'Размножение'], answer: 'Выживание наиболее приспособленных' },
        { question: 'Какой из этих процессов происходит в осенний период?', options: ['Листопад', 'Цветение', 'Зимний сон'], answer: 'Листопад' },
        { question: 'Какое из этих явлений может быть следствием загрязнения окружающей среды?', options: ['Изменение климата', 'Рост растений', 'Оживление животных'], answer: 'Изменение климата' },
        { question: 'Какой из этих процессов приводит к образованию почвы?', options: ['Выветривание', 'Испарение', 'Ураган'], answer: 'Выветривание' },
        { question: 'Что такое биом?', options: ['Крупная экосистема', 'Только животные', 'Только растения'], answer: 'Крупная экосистема' },
        { question: 'Какой из этих животных является травоядным?', options: ['Лев', 'Коровы', 'Волк'], answer: 'Коровы' },
        { question: 'Какое из этих явлений связано с сезонными изменениями?', options: ['Цветение', 'Круговорот воды', 'Распад'], answer: 'Цветение' },
        { question: 'Что такое миграция?', options: ['Перемещение животных', 'Рост растений', 'Зимний сон'], answer: 'Перемещение животных' },
        { question: 'Какой из этих процессов является частью круговорота углерода?', options: ['Дыхание', 'Цветение', 'Испарение'], answer: 'Дыхание' },
        { question: 'Какое из этих животных может жить как на суше, так и в воде?', options: ['Лягушка', 'Слон', 'Птица'], answer: 'Лягушка' },
        { question: 'Какое из этих растений растет в воде?', options: ['Лотос', 'Ель', 'Береза'], answer: 'Лотос' }
    ]
},
        geo: {
            title: 'Азербайджанский язык',
    questions: [
        { question: 'Какое слово означает "дом"?', options: ['Ev', 'Məktəb', 'Bağ'], answer: 'Ev' },
        { question: 'Какое слово означает "солнце"?', options: ['Gün', 'Ay', 'Ulduz'], answer: 'Gün' },
        { question: 'Какой из этих вариантов является синонимом слова "красивый"?', options: ['Gözəl', 'Çirkin', 'Qarışıq'], answer: 'Gözəl' },
        { question: 'Какое слово означает "школа"?', options: ['Ev', 'Məktəb', 'Bağ'], answer: 'Məktəb' },
        { question: 'Какой из этих вариантов является антонимом слова "большой"?', options: ['Kiçik', 'Uzun', 'Geniş'], answer: 'Kiçik' },
        { question: 'Какой из этих слов означает "книга"?', options: ['Dərs', 'Kitab', 'Qələm'], answer: 'Kitab' },
        { question: 'Какое слово означает "друзья"?', options: ['Dostlar', 'Tanışlar', 'Qonşular'], answer: 'Dostlar' },
        { question: 'Какой из этих вариантов является правильным вежливым обращением?', options: ['Siz', 'Sən', 'Mən'], answer: 'Siz' },
        { question: 'Какое слово означает "учитель"?', options: ['Tələbə', 'Müəllim', 'İşçi'], answer: 'Müəllim' },
        { question: 'Какой из этих вариантов означает "еда"?', options: ['Yemək', 'Süd', 'Su'], answer: 'Yemək' },
        { question: 'Какое слово означает "вода"?', options: ['Su', 'Çay', 'Dəniz'], answer: 'Su' },
        { question: 'Какой из этих вариантов является глаголом?', options: ['Yaz', 'Yazı', 'Yazılı'], answer: 'Yaz' },
        { question: 'Какое слово означает "собака"?', options: ['Pişik', 'Köpək', 'Quş'], answer: 'Köpək' },
        { question: 'Какой из этих вариантов означает "кот"?', options: ['Köpək', 'Pişik', 'Quş'], answer: 'Pişik' },
        { question: 'Какое слово означает "птица"?', options: ['Quş', 'Balıq', 'Dovşan'], answer: 'Quş' },
        { question: 'Какое из этих слов означает "лес"?', options: ['Meşə', 'Təbiət', 'Bağ'], answer: 'Meşə' },
        { question: 'Какой из этих вариантов означает "город"?', options: ['Şəhər', 'Kənd', 'Yol'], answer: 'Şəhər' },
        { question: 'Какое слово означает "горы"?', options: ['Dağlar', 'Düzlük', 'Çay'], answer: 'Dağlar' },
        { question: 'Какой из этих вариантов означает "море"?', options: ['Dəniz', 'Çay', 'Gölet'], answer: 'Dəniz' },
        { question: 'Какое слово означает "небо"?', options: ['Səma', 'Yer', 'Gün'], answer: 'Səma' },
        { question: 'Какой из этих вариантов является правильным вопросом о состоянии?', options: ['Necəsən?', 'Nədir?', 'Hardadır?'], answer: 'Necəsən?' },
        { question: 'Какое слово означает "праздник"?', options: ['Bayram', 'İş', 'Məktəb'], answer: 'Bayram' },
        { question: 'Какой из этих вариантов означает "веселый"?', options: ['Xoşbəxt', 'Kədərli', 'Üzülmüş'], answer: 'Xoşbəxt' },
        { question: 'Какое слово означает "семья"?', options: ['Ailə', 'Dostlar', 'Tanışlar'], answer: 'Ailə' },
        { question: 'Какой из этих вариантов означает "путешествие"?', options: ['Səyahət', 'Yoldaşlıq', 'Gediş'], answer: 'Səyahət' },
        { question: 'Какое слово означает "цветок"?', options: ['Çiçək', 'Toxum', 'Kök'], answer: 'Çiçək' },
        { question: 'Какой из этих вариантов означает "играть"?', options: ['Oynamak', 'Yazmaq', 'Oxumaq'], answer: 'Oynamak' },
        { question: 'Какое слово означает "рисовать"?', options: ['Rəsm çəkmək', 'Yazmaq', 'Oxumaq'], answer: 'Rəsm çəkmək' },
        { question: 'Какой из этих вариантов означает "петь"?', options: ['Oxumaq', 'Yazmaq', 'Oynamak'], answer: 'Oxumaq' },
        { question: 'Какое слово означает "плавать"?', options: ['Üzmək', 'Yürümək', 'Qaynamaq'], answer: 'Üzmək' },
        { question: 'Какой из этих вариантов означает "учиться"?', options: ['Öyrənmək', 'Oxumaq', 'Yazmaq'], answer: 'Öyrənmək' }
            ]
        }
    },
    class6: {
       russian: {
    title: 'Русский язык',
    questions: [
        { question: 'Что такое сложноподчиненное предложение?', options: ['Предложение с двумя предиками', 'Предложение с придаточной частью', 'Предложение с однородными членами'], answer: 'Предложение с придаточной частью' },
        { question: 'Какой из этих слов является антонимом к слову "горячий"?', options: ['Теплый', 'Холодный', 'Жаркий'], answer: 'Холодный' },
        { question: 'Что такое деепричастие?', options: ['Форма глагола', 'Часть речи', 'Вид сказуемого'], answer: 'Форма глагола' },
        { question: 'Какое из следующих предложений является сложносочиненным?', options: ['Я пришел, и ты ушел.', 'Когда я пришел, ты уже ушел.', 'Я пришел, потому что ты меня позвал.'], answer: 'Я пришел, и ты ушел.' },
        { question: 'Какое слово пишется с мягким знаком?', options: ['Стол', 'Ночь', 'Собака'], answer: 'Ночь' },
        { question: 'Что такое приставка в слове?', options: ['Часть слова, стоящая перед корнем', 'Часть слова, стоящая после корня', 'Законченная часть слова'], answer: 'Часть слова, стоящая перед корнем' },
        { question: 'Какой из следующих вариантов правильно передает смысл выражения "по одной из причин"?', options: ['Из-за одной причины', 'В одной причине', 'По одной причине'], answer: 'Из-за одной причины' },
        { question: 'Что такое синонимы?', options: ['Слова с противоположным значением', 'Слова с одинаковым или похожим значением', 'Слова с разным значением'], answer: 'Слова с одинаковым или похожим значением' },
        { question: 'Какое из следующих слов является наречием?', options: ['Быстро', 'Красивая', 'Смеяться'], answer: 'Быстро' },
        { question: 'Что такое предлог?', options: ['Часть речи, обозначающая действие', 'Часть речи, связывающая слова', 'Часть речи, обозначающая предмет'], answer: 'Часть речи, связывающая слова' },
        { question: 'Какой из этих предложений содержит ошибку?', options: ['Я пошел в магазин', 'Она любит читать книги', 'Он читаем книгу'], answer: 'Он читаем книгу' },
        { question: 'Что такое пунктуация?', options: ['Правила написания слов', 'Правила расстановки знаков препинания', 'Правила построения предложений'], answer: 'Правила расстановки знаков препинания' },
        { question: 'Какое из следующих слов является существительным?', options: ['Бегать', 'Смешной', 'Лес'], answer: 'Лес' },
        { question: 'Как называется часть речи, которая обозначает действие?', options: ['Глагол', 'Существительное', 'Прилагательное'], answer: 'Глагол' },
        { question: 'Какой из следующих вариантов правильный с точки зрения грамматики?', options: ['Я люблю гулять по парке', 'Я люблю гулять в парке', 'Я люблю гулять на парке'], answer: 'Я люблю гулять в парке' },
        { question: 'Что такое составное сказуемое?', options: ['Сказуемое, состоящее из двух частей', 'Сказуемое, состоящее из одного слова', 'Сказуемое, состоящее из придаточной части'], answer: 'Сказуемое, состоящее из двух частей' },
        { question: 'Какое из следующих слов является прилагательным?', options: ['Бегать', 'Красивый', 'Книга'], answer: 'Красивый' },
        { question: 'Как правильно написать: "по утрам" или "по утро"?', options: ['по утрам', 'по утро'], answer: 'по утрам' },
        { question: 'Что такое грамматика?', options: ['Наука о языке', 'Наука о литературе', 'Наука о произношении'], answer: 'Наука о языке' },
        { question: 'Какой из этих вариантов является правильным?', options: ['Солнце светит ярко', 'Солнце светит ярко', 'Солнце светит ярок'], answer: 'Солнце светит ярко' },
        { question: 'Какой из этих примеров является вопросительным предложением?', options: ['Я пошел в школу.', 'Куда ты идешь?', 'Ты читаешь книгу.'], answer: 'Куда ты идешь?' },
        { question: 'Что такое род существительного?', options: ['Мужской, женский, средний', 'Число, падеж', 'Гласный, согласный'], answer: 'Мужской, женский, средний' },
        { question: 'Какое из следующих слов является глаголом?', options: ['Красивая', 'Смеяться', 'Собака'], answer: 'Смеяться' },
        { question: 'Какой из этих вариантов содержит ошибку?', options: ['Она идет в магазин.', 'Он читает книгу.', 'Мы увидели их в магазине.'], answer: 'Мы увидели их в магазине.' },
        { question: 'Что такое предикат?', options: ['Часть речи', 'Сказуемое в предложении', 'Часть предложения'], answer: 'Сказуемое в предложении' },
        { question: 'Какое из следующих слов является союзом?', options: ['И', 'Книга', 'Бежать'], answer: 'И' },
        { question: 'Какой из этих вариантов является верным с точки зрения грамматики?', options: ['Я пишу письмо', 'Я пишу письма', 'Я пишу письму'], answer: 'Я пишу письмо' },
        { question: 'Что такое лексика?', options: ['Словарный запас языка', 'Правила грамматики', 'Структура предложения'], answer: 'Словарный запас языка' },
        { question: 'Какое из следующих слов является формой множественного числа?', options: ['Книга', 'Книги', 'Книгой'], answer: 'Книги' },
        { question: 'Какой из этих вариантов является правильным?', options: ['Собака лаят', 'Собака лает.', 'Собака лаит'], answer: 'Собака лает.' }
    ]
},
       math: {
    title: 'Математика',
    questions: [
        { question: 'Какое число является квадратом 12?', options: ['144', '1440', '121'], answer: '144' },
        { question: 'Какова площадь квадрата со стороной 5 см?', options: ['10 см²', '25 см²', '20 см²'], answer: '25 см²' },
        { question: 'Сколько градусов в треугольнике?', options: ['180', '360', '90'], answer: '180' },
        { question: 'Какое число является корнем уравнения x² = 49?', options: ['7', '-7', '14'], answer: '7 и -7' },
        { question: 'Что такое процент от числа?', options: ['Доля числа', 'Число, умноженное на 100', 'Число, деленное на 100'], answer: 'Доля числа' },
        { question: 'Какой из следующих углов является острым?', options: ['30°', '90°', '120°'], answer: '30°' },
        { question: 'Какое число является решением уравнения 2x + 3 = 11?', options: ['2', '4', '5'], answer: '4' },
        { question: 'Какова формула периметра прямоугольника?', options: ['2a + 2b', 'a × b', '2ab'], answer: '2a + 2b' },
        { question: 'Какова сумма углов в многоугольнике с 6 сторонами?', options: ['360°', '540°', '720°'], answer: '720°' },
        { question: 'Каково значение выражения 5 × (3 + 2)?', options: ['15', '20', '25'], answer: '25' },
        { question: 'Какое из следующих чисел является простым?', options: ['4', '9', '11'], answer: '11' },
        { question: 'Что такое дробь?', options: ['Число с целой и дробной частью', 'Число, представляющее отношение двух чисел', 'Число, состоящее из одной цифры'], answer: 'Число, представляющее отношение двух чисел' },
        { question: 'Какой из этих углов является прямым?', options: ['45°', '90°', '120°'], answer: '90°' },
        { question: 'Какой результат деления 36 на 4?', options: ['8', '9', '6'], answer: '9' },
        { question: 'Какова формула площади круга?', options: ['πr²', '2πr', 'πd'], answer: 'πr²' },
        { question: 'Какое из следующих чисел является квадратом 8?', options: ['64', '32', '16'], answer: '64' },
        { question: 'Какой из следующих дробей является неправильной?', options: ['1/2', '3/2', '4/5'], answer: '3/2' },
        { question: 'Какой из следующих вариантов является уравнением?', options: ['x + 2 = 5', 'x + 2', '5 - x'], answer: 'x + 2 = 5' },
        { question: 'Каковы корни уравнения x² - 4 = 0?', options: ['2 и -2', '4 и -4', '1 и -1'], answer: '2 и -2' },
        { question: 'Какой из следующих вариантов является выражением?', options: ['3x + 4', '5 = 10', 'x - 3 = 0'], answer: '3x + 4' },
        { question: 'Что такое многоугольник?', options: ['Фигура с несколькими сторонами', 'Фигура с двумя сторонами', 'Фигура с одной стороной'], answer: 'Фигура с несколькими сторонами' },
        { question: 'Какова сумма 7 и 8?', options: ['14', '15', '16'], answer: '15' },
        { question: 'Какой из следующих углов является тупым?', options: ['100°', '90°', '80°'], answer: '100°' },
        { question: 'Что такое процент?', options: ['Число, выраженное в долях', 'Число, выраженное в сотых', 'Число, деленное на 10'], answer: 'Число, выраженное в сотых' },
        { question: 'Какое из следующих чисел является делителем числа 24?', options: ['5', '4', '7'], answer: '4' },
        { question: 'Какова формула для вычисления объема куба?', options: ['a³', '6a²', 'a²'], answer: 'a³' },
        { question: 'Какое из следующих чисел является целым?', options: ['3.5', '7', '-2'], answer: '7 и -2' },
        { question: 'Какое значение имеет выражение 12 - (4 + 2)?', options: ['6', '8', '10'], answer: '6' },
        { question: 'Какой из этих углов является развернутым?', options: ['180°', '90°', '360°'], answer: '180°' },
        { question: 'Какова разность 15 и 9?', options: ['6', '7', '8'], answer: '6' },
        { question: 'Что такое среднее арифметическое?', options: ['Сумма всех чисел', 'Сумма чисел, деленная на их количество', 'Разность максимального и минимального значений'], answer: 'Сумма чисел, деленная на их количество' }
    ]
},
        english: {
    title: 'Английский язык',
    questions: [
        { question: 'Какой синоним слова "счастливый"?', options: ['happy', 'sad', 'angry'], answer: 'happy' },
        { question: 'Какое слово является антонимом слова "сложный"?', options: ['easy', 'hard', 'complicated'], answer: 'easy' },
        { question: 'Какова прошедшая форма глагола "идти"?', options: ['go', 'went', 'going'], answer: 'went' },
        { question: 'Какое из предложений правильно?', options: ['He go to school.', 'He goes to school.', 'He going to school.'], answer: 'He goes to school.' },
        { question: 'Что значит слово "двуязычный"?', options: ['bilingual', 'monolingual', 'trilingual'], answer: 'bilingual' },
        { question: 'Выберите правильную форму: "Она ... (быть) учителем."', options: ['is', 'are', 'was'], answer: 'is' },
        { question: 'Что значит слово "добрый"?', options: ['kind', 'mean', 'rude'], answer: 'kind' },
        { question: 'Какое из следующих слов является предлогом?', options: ['under', 'run', 'jump'], answer: 'under' },
        { question: 'Какое множественное число у слова "ребенок"?', options: ['child', 'children', 'childs'], answer: 'children' },
        { question: 'Какое предложение в будущем времени?', options: ['I eat pizza.', 'I will eat pizza.', 'I ate pizza.'], answer: 'I will eat pizza.' },
        { question: 'Какой антоним слова "увеличить"?', options: ['increase', 'decrease', 'expand'], answer: 'decrease' },
        { question: 'Какое из этих слов является существительным?', options: ['happy', 'joy', 'quickly'], answer: 'joy' },
        { question: 'Выберите правильный артикль: "Я увидел ... слона."', options: ['a', 'an', 'the'], answer: 'an' },
        { question: 'Как образуется превосходная степень слова "большой"?', options: ['bigger', 'biggest', 'more big'], answer: 'biggest' },
        { question: 'Какое слово является союзом?', options: ['and', 'but', 'or'], answer: 'and' },
        { question: 'Что значит слово "слышимый"?', options: ['heard', 'loud', 'silent'], answer: 'heard' },
        { question: 'Какое из предложений в страдательном залоге?', options: ['The mouse caught the cat.', 'The cat was caught by the mouse.', 'The cat catch the mouse.'], answer: 'The cat was caught by the mouse.' },
        { question: 'Что значит идиома "разрушить лед"?', options: ['start a conversation', 'make a joke', 'break something'], answer: 'start a conversation' },
        { question: 'Выберите правильное слово: "Я никогда не ... в Париже."', options: ['been', 'be', 'was'], answer: 'been' },
        { question: 'Какое из этих предложений в перфектном времени?', options: ['She finishes her homework.', 'She has finished her homework.', 'She finished her homework.'], answer: 'She has finished her homework.' },
        { question: 'Что значит слово "инновационный"?', options: ['innovative', 'traditional', 'outdated'], answer: 'innovative' },
        { question: 'Как правильно: "Они ... (играть) в футбол вчера."', options: ['played', 'play', 'playing'], answer: 'played' },
        { question: 'Какое слово является прилагательным?', options: ['beautiful', 'run', 'quickly'], answer: 'beautiful' },
        { question: 'Какова прошедшая причастная форма от "видеть"?', options: ['seen', 'saw', 'see'], answer: 'seen' },
        { question: 'Что значит "откладывать"?', options: ['to postpone', 'to cancel', 'to schedule'], answer: 'to postpone' },
        { question: 'Какое из этих слов является модальным глаголом?', options: ['can', 'do', 'be'], answer: 'can' },
        { question: 'Что значит "внимательный"?', options: ['attentive', 'careless', 'negligent'], answer: 'attentive' },
        { question: 'Какое из этих предложений является сложносочиненным?', options: ['I like pizza, and I like pasta.', 'I like pizza.', 'I likes pizza.'], answer: 'I like pizza, and I like pasta.' },
        { question: 'Что значит фраза "заняться учебой"?', options: ['to study', 'to play', 'to rest'], answer: 'to study' },
        { question: 'Какой синоним слова "умный"?', options: ['intelligent', 'stupid', 'dull'], answer: 'intelligent' },
        { question: 'Что означает "разговаривать на разные темы"?', options: ['to discuss various topics', 'to argue', 'to ignore'], answer: 'to discuss various topics' },
        { question: 'Какое слово является предлогом в предложении: "Я иду в школу"?', options: ['I', 'go', 'to'], answer: 'to' }
    ]
},
       nature: {
    title: 'Природа',
    questions: [
        { question: 'Что такое экосистема?', options: ['Система растений', 'Система животных', 'Система взаимодействий между живыми организмами и окружающей средой'], answer: 'Система взаимодействий между живыми организмами и окружающей средой' },
        { question: 'Какое значение имеет биологическое разнообразие?', options: ['Увеличивает устойчивость экосистем', 'Уменьшает популяцию', 'Увеличивает загрязнение'], answer: 'Увеличивает устойчивость экосистем' },
        { question: 'Что такое фотосинтез?', options: ['Процесс дыхания растений', 'Процесс преобразования солнечной энергии в химическую', 'Процесс размножения растений'], answer: 'Процесс преобразования солнечной энергии в химическую' },
        { question: 'Какой процесс называется круговоротом воды?', options: ['Испарение', 'Конденсация', 'Цикл перемещения воды в природе'], answer: 'Цикл перемещения воды в природе' },
        { question: 'Что такое плотность населения?', options: ['Количество людей на квадратный километр', 'Общая численность населения', 'Распределение населения по возрасту'], answer: 'Количество людей на квадратный километр' },
        { question: 'Каковы основные причины изменения климата?', options: ['Изменение состава атмосферы', 'Повышение уровня моря', 'Изменение экосистем'], answer: 'Изменение состава атмосферы' },
        { question: 'Что такое продовольственная цепь?', options: ['Цепь поставок еды', 'Цепь потребления пищи в экосистеме', 'Цепь переработки пищи'], answer: 'Цепь потребления пищи в экосистеме' },
        { question: 'Какое влияние имеют кислые дожди на природу?', options: ['Увеличивают урожайность', 'Разрушают экосистемы', 'Улучшают качество воды'], answer: 'Разрушают экосистемы' },
        { question: 'Что такое озоновый слой и почему он важен?', options: ['Слой атмосферы, защищающий от УФ-излучения', 'Слой воды в океане', 'Слой почвы'], answer: 'Слой атмосферы, защищающий от УФ-излучения' },
        { question: 'Какие факторы влияют на экосистему?', options: ['Климатические условия', 'Человеческая деятельность', 'Оба варианта'], answer: 'Оба варианта' },
        { question: 'Что такое биоценоз?', options: ['Сообщество живых организмов', 'Состояние экосистемы', 'Взаимодействие видов'], answer: 'Сообщество живых организмов' },
        { question: 'Как происходит опыление растений?', options: ['С помощью воды', 'С помощью животных и ветра', 'С помощью почвы'], answer: 'С помощью животных и ветра' },
        { question: 'Каковы этапы круговорота углерода в природе?', options: ['Фотосинтез, дыхание, разложение', 'Испарение, конденсация, осадки', 'Выморивание, адаптация, размножение'], answer: 'Фотосинтез, дыхание, разложение' },
        { question: 'Что такое агрегация в почвах?', options: ['Скопление микробов', 'Состояние почвы', 'Сгруппированность частиц почвы'], answer: 'Сгруппированность частиц почвы' },
        { question: 'Какое значение имеет сохранение редких видов?', options: ['Увеличивает биоразнообразие', 'Снижает качество среды', 'Никакого'], answer: 'Увеличивает биоразнообразие' },
        { question: 'Каковы последствия вырубки лесов?', options: ['Увеличение количества кислорода', 'Увеличение эрозии почвы', 'Улучшение биоразнообразия'], answer: 'Увеличение эрозии почвы' },
        { question: 'Что такое биом?', options: ['Большая экосистема', 'Разновидность животных', 'Состояние почвы'], answer: 'Большая экосистема' },
        { question: 'Как влияет человеческая деятельность на природные ресурсы?', options: ['Увеличивает запасы', 'Уменьшает запасы', 'Не влияет'], answer: 'Уменьшает запасы' },
        { question: 'Что такое инвазивные виды и какое они имеют значение?', options: ['Местные виды', 'Виды, угрожающие экосистемам', 'Не имеют значения'], answer: 'Виды, угрожающие экосистемам' },
        { question: 'Каковы основные виды энергии, используемые в природе?', options: ['Солнечная, ветровая, угольная', 'Ядерная, тепловая, электрическая', 'Гидро, биомасса, ископаемая'], answer: 'Солнечная, ветровая, угольная' },
        { question: 'Что такое нитрогенизация и почему она важна?', options: ['Процесс обогащения почвы азотом', 'Процесс разложения', 'Процесс роста растений'], answer: 'Процесс обогащения почвы азотом' },
        { question: 'Какое влияние оказывают экосистемы на климат?', options: ['Увеличивают температуру', 'Регулируют климат', 'Не влияют'], answer: 'Регулируют климат' },
        { question: 'Что такое изменение ландшафта?', options: ['Изменение растительности', 'Изменение географии', 'Изменение экологической ситуации'], answer: 'Изменение экологической ситуации' },
        { question: 'Каковы причины вымирания видов?', options: ['Уничтожение среды обитания', 'Изменение климата', 'Оба варианта'], answer: 'Оба варианта' },
        { question: 'Что такое цепь питания?', options: ['Отношения между видами', 'Процесс обмена веществ', 'Связь между производителями и потребителями'], answer: 'Связь между производителями и потребителями' },
        { question: 'Как растения адаптируются к окружающей среде?', options: ['Изменяют структуру', 'Уменьшают размеры', 'Не адаптируются'], answer: 'Изменяют структуру' },
        { question: 'Что такое устойчивое развитие?', options: ['Развитие без ущерба для окружающей среды', 'Развитие городов', 'Развитие технологий'], answer: 'Развитие без ущерба для окружающей среды' },
        { question: 'Каковы роли различных организмов в экосистеме?', options: ['Производители, потребители, разрушители', 'Только потребители', 'Только производители'], answer: 'Производители, потребители, разрушители' },
        { question: 'Что такое ресурсосбережение?', options: ['Эффективное использование ресурсов', 'Сохранение ресурсов', 'Нерациональное использование'], answer: 'Эффективное использование ресурсов' },
        { question: 'Каковы методы защиты окружающей среды?', options: ['Запреты, законы, образование', 'Игнорирование', 'Увеличение выбросов'], answer: 'Запреты, законы, образование' },
        { question: 'Что такое экология?', options: ['Наука о взаимодействии организмов', 'Наука о метеорологии', 'Наука о биологии'], answer: 'Наука о взаимодействии организмов' },
        { question: 'Каково значение солнечной энергии для Земли?', options: ['Обогревает планету', 'Вызывает изменения климата', 'Не имеет значения'], answer: 'Обогревает планету' },
        { question: 'Что такое среда обитания?', options: ['Место проживания организмов', 'Процесс размножения', 'Тип экосистемы'], answer: 'Место проживания организмов' },
        { question: 'Каковы преимущества и недостатки использования ископаемых видов топлива?', options: ['Доступность и загрязнение', 'Чистота и безопасность', 'Не имеют недостатков'], answer: 'Доступность и загрязнение' }
    ]
},
        geo: {
             title: 'Азербайджанский язык',
    questions: [
        { question: 'Söz birləşmələrinin hansı növü var?', options: ['Sadə birləşmələr', 'Mürəkkəb birləşmələr', 'İkili birləşmələr'], answer: 'Mürəkkəb birləşmələr' },
        { question: 'Aşağıdakı cümlələrdən hansı xəbər cümləsidir?', options: ['O, evdədir.', 'Kim gəldi?', 'Bu kitabdır.'], answer: 'O, evdədir.' },
        { question: 'Sözlərin hansı növü məna dəyişmir?', options: ['Sinonimlər', 'Antonimlər', 'Homonimlər'], answer: 'Sinonimlər' },
        { question: 'Hansı cümlə sual cümləsidir?', options: ['Bu gün yağış yağacaq.', 'Yazı yazıram.', 'Sən gələcəksən?'], answer: 'Sən gələcəksən?' },
        { question: 'Müəllim sözü hansı nitq hissəsinə aiddir?', options: ['Feli', 'İsim', 'Zərf'], answer: 'İsim' },
        { question: 'Cümlənin əsas hissəsi hansıdır?', options: ['Söz birləşməsi', 'Xəbər', 'Qayda'], answer: 'Xəbər' },
        { question: 'Aşağıdakilerden hangisi zamirdir?', options: ['Sən', 'Gəlmək', 'Gözəl'], answer: 'Sən' },
        { question: 'Sözlərin necə tələffüz edildiyini öyrənən elm hansıdır?', options: ['Sintaksis', 'Morfologiya', 'Fonetik'], answer: 'Fonetik' },
        { question: 'Müəllim sözünün cəmi necədir?', options: ['Müəllimlər', 'Müəllimlərim', 'Müəllimləriniz'], answer: 'Müəllimlər' },
        { question: 'Aşağıdakilerden hangisi ədatdır?', options: ['İçin', 'Söz', 'Böyük'], answer: 'İçin' },
        { question: 'Hansı söz sözdizim qaydalarına ziddir?', options: ['Qırmızı alma', 'Alma qırmızı', 'Alma'], answer: 'Alma qırmızı' },
        { question: 'Cümlənin hansı hissəsi sual verir?', options: ['Xəbər', 'Sual', 'Mübtəda'], answer: 'Sual' },
        { question: 'Morfologiya nəyə aiddir?', options: ['Sözlərin mənasına', 'Sözlərin formasına', 'Cümlələrin quruluşuna'], answer: 'Sözlərin formasına' },
        { question: 'Aşağıdakilerden hangisi sifətdir?', options: ['Yaxşı', 'Getmək', 'Söz'], answer: 'Yaxşı' },
        { question: 'Bütünlükdə cümlənin mənasını verən hissə hansıdır?', options: ['Xəbər', 'Mübtəda', 'Zərf'], answer: 'Xəbər' },
        { question: 'Cümlənin hansı hissəsi cümləni tamamlayır?', options: ['Tamamlayıcı', 'Xəbər', 'Mübtəda'], answer: 'Tamamlayıcı' },
        { question: 'Söz birləşmələrinin hansı növü var?', options: ['Qeyri-sadə birləşmələr', 'Sadə birləşmələr', 'Söz birləşməsi yoxdur'], answer: 'Qeyri-sadə birləşmələr' },
        { question: 'Sinonimlərin əsas məqsədi nədir?', options: ['Mənanı dəyişdirmək', 'Mənanı artırmaq', 'Mənanı azaltmaq'], answer: 'Mənanı artırmaq' },
        { question: 'Qeyri-müəyyən zamir hansıdır?', options: ['Bütün', 'Hər', 'Bəzi'], answer: 'Bəzi' },
        { question: 'Sözlərin mənası ilə bağlı araşdırma aparan elm nəyə aiddir?', options: ['Morfologiya', 'Sintaksis', 'Semantika'], answer: 'Semantika' },
        { question: 'Cümlənin kənarında olan sözlər hansılardır?', options: ['Mübtəda', 'Xəbər', 'Təktərəfli'], answer: 'Təktərəfli' },
        { question: 'Aşağıdakilerden hangisi nitq hissələrinin təsnifinə aiddir?', options: ['Mübtəda', 'Söz', 'Xəbər'], answer: 'Mübtəda' },
        { question: 'Hansı cümlə xasiyyət cümləsidir?', options: ['Mən səni sevirəm.', 'Hava soyuqdur.', 'O, məktəbə gedir.'], answer: 'Hava soyuqdur.' },
        { question: 'Sözlərin hansı hissəsi cümlənin mənasını tamamlayır?', options: ['Xəbər', 'Mübtəda', 'Təyin'], answer: 'Təyin' },
        { question: 'Bütünlükdə cümlənin mənasını verən hissə hansıdır?', options: ['Xəbər', 'Mübtəda', 'Cümlənin quruluşu'], answer: 'Xəbər' },
        { question: 'Hansı söz sinonimdir?', options: ['Yaxşı', 'Pis', 'Orta'], answer: 'Yaxşı' },
        { question: 'Sözlərin sinonimləri nəyə aiddir?', options: ['Eynimənalı sözlər', 'Ziddiyyətli sözlər', 'Fərqli mənalı sözlər'], answer: 'Eynimənalı sözlər' },
        { question: 'Nitq hissələrinin təsnifi nədir?', options: ['İsim, fel, sifət', 'Zərf, ədat, bağlayıcı', 'Söz, cümlə, məna'], answer: 'İsim, fel, sifət' },
        { question: 'Hansı cümlə xəbər cümləsidir?', options: ['Yazı yazıram.', 'Sən gəlib?', 'Bu kitabdır.'], answer: 'Bu kitabdır.' },
        { question: 'Mübtəda nəyə aiddir?', options: ['Cümlənin əsas hissəsi', 'Xəbərin yerini', 'Zamanı'], answer: 'Cümlənin əsas hissəsi' },
        { question: 'Sözlərin hansı növü var?', options: ['Hərf, cümlə, sətr', 'İsim, fel, zərf', 'Söz, ifadə, cümlə'], answer: 'İsim, fel, zərf' }
            ]
        }
    }
};

let currentTest = null;
let score = 0;

// Выбор класса
function selectClass(classNumber) {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('subject-menu').style.display = 'block';
    document.getElementById('class-title').innerText = `${classNumber} класс - Выберите предмет`;
}

// Начало теста
function startTest(subject) {
    const classKey = `class${document.getElementById('class-title').innerText.charAt(0)}`; // Получаем текущий класс
    currentTest = tests[classKey][subject].questions;
    document.getElementById('subject-menu').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('test-title').innerText = tests[classKey][subject].title;
    displayQuestions(currentTest);
}

// Показ вопросов
function displayQuestions(questions) {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    questions.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        
        const questionText = document.createElement('p');
        questionText.innerText = `${index + 1}. ${q.question}`;
        questionBlock.appendChild(questionText);

        q.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            questionBlock.appendChild(label);
        });
        questionsDiv.appendChild(questionBlock);
    });
}

// Отправка теста
function submitTest() {
    score = 0;
    currentTest.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    showResult();
}

// Показ результата
function showResult() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-text').innerText = `Вы набрали ${score} из ${currentTest.length} правильных ответов.`;
    document.getElementById('result').style.display = 'block';
}

// Возврат в главное меню
function backToMainMenu() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('subject-menu').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
    score = 0;
}

// Возврат к выбору предмета
function backToSubjects() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('subject-menu').style.display = 'block';
    score = 0;
}

