let glossaryItemsRu = [
    {
        name: ["абзацами","абзацев", 'абзаца','абзац',  "абзацем",'Абзац','Абзацы','абзацы'],
        definition: 'Текст, заканчивающийся знаком абзаца: ¶.'
    },
    {
        name: ['Алгоритмы', "алгоритмы", "алгоритмов", "алгоритмами"],
        definition: 'Понятные и конечные последовательности точных действий (команд), формальное выполнение которых позволяет получить решение поставленной задачи.'
    },
    
    {
        name: ["алгоритма",'Алгоритм',"алгоритму", "алгоритме", "алгоритм", ],
        definition: 'Понятная и конечная последовательность точных действий (команд), формальное выполнение которых позволяет получить решение поставленной задачи.'
    },
    
    {
        name: [ "браузера", "браузере",'Браузер', "браузер",],
        definition: 'Программа, предназначенная для просмотра веб-страниц.'
    },
    {
        name: ['Браузеры', "браузеры", "браузеров"],
        definition: 'Программы, предназначенные для просмотра веб-страниц.'
    },
    {
        name: ['Буфер обмена','буфер обмена', "буфером обмена", "буфера обмена"],
        definition: 'Специальная область памяти компьютера для временного хранения данных при выполнении операций Вырезать и Копировать.'
    },
    {
        name: ['Веб-сайт', 'веб-сайт','Веб-сайты','веб-сайты', "веб-сайта"],
        definition: 'Несколько веб-страниц с общей темой и содержанием, связанных между собой гиперссылками.'
    },
    
    {
        name: ['Веб-страница','веб-страница', "веб-страницу"],
        definition: 'Документ или информационный ресурс Интернета.'
    },
    {
        name: ['Веб-страницы','веб-страницы', "веб-страницах", "веб-страниц"],
        definition: 'Документы или информационные ресурсы Интернета.'
    },
    {
        name: ['Вспомогательный алгоритм','вспомогательный алгоритм', "вспомогательного алгоритма"],
        definition: 'Алгоритм, который можно целиком использовать в других алгоритмах.'
    },
    {
        name: ['Вспомогательные алгоритмы','вспомогательные алгоритмы'],
        definition: 'Алгоритмы, которые можно целиком использовать в других алгоритмах.'
    },
    {
        name: ['Графический редактор','графический редактор','графического редактора', 'графическом редакторе'],
        definition: 'Специальная программа, предназначенная для создания и редактирования изображений.'
    },
    {
        name: ['Графические редакторы','графические редакторы','графических редакторах'],
        definition: 'Специальные программы, предназначенные для создания и редактирования изображений.'
    },
    {
        name: ['Графический способ записи алгоритма','графический способ записи алгоритма'],
        definition: 'Запись алгоритма с помощью геометрических фигур (блоков), соответствующих командам алгоритма, и линий для соединения блоков.'
    },
    {
        name: ['Данные', "данные", "данных", "данными"],
        definition: 'Сведения, представленные в формализованном виде (на одном из формальных языков).'
    },
    {
        name: ["Интернете",'Интернет','интернет',  "интернете"],
        definition: 'Всемирная компьютерная сеть, способная передавать данные из одной точки земного шара в любую другую.'
    },
    
    {
        name: ['Информатика','информатика'],
        definition: 'Наука, изучающая методы представления, хранения, передачи, обработки и использования информации с применением компьютерных технологий в различных сферах человеческой деятельности.'
    },
    {
        name: ['Информация','информация', "информации", "информацию", "информацией"],
        definition: 'Сведения об объектах и событиях окружающего мира.'
    },
    {
        name: ['Исполнитель алгоритма','исполнитель алгоритма', "исполнителем алгоритмов"],
        definition: 'Человек, группа людей или техническое устройство, которые понимают команды алгоритма и умеют правильно их выполнять.'
    },
    {
        name: ['Исполнители алгоритмов','исполнители алгоритмов'],
        definition: 'Группа людей или технические устройства, которые понимают команды алгоритмов и умеют правильно их выполнять.'
    },
    {
        name: ['Команда в алгоритме','команда в алгоритме'],
        definition: 'Указание на выполнение конкретного действия.'
    },
    {
        name: ['Команды в алгоритме','команды в алгоритме'],
        definition: 'Указания на выполнение конкретных действий.'
    },
    
    {
        name: ['Компьютерные презентации','компьютерные презентации', ],
        definition: 'Электронные документы, созданные на компьютере с помощью специальных программ и предназначенные для демонстрации зрителям.'
    },
    {
        name: ['Компьютерная презентация','компьютерная презентация','компьютерной презентации', "презентации"],
        definition: 'Электронный документ, созданный на компьютере с помощью специальных программ и предназначенный для демонстрации зрителям.'
    },
    {
        name: ['Компьютерные технологии','компьютерные технологии'],
        definition: 'Технологии работы с данными, основанные на применении компьютеров.'
    },
    {
        name: ['Отражение изображения','отражение изображения', "отражение", "отражения"],
        definition: 'Зеркальное отображение изображения относительно невидимой оси (горизонтальной или вертикальной).'
    },
    {
        name: ['Презентация','презентация'],
        definition: 'Способ представления информации с помощью технических средств или без них, предназначенный для демонстрации чего-либо нового (проекта, товара и т. д.).'
    },
    {
        name: ['Презентации','презентации'],
        definition: 'Способы представления информации с помощью технических средств или без них, предназначенные для демонстрации чего-либо нового (проекта, товара и т. д.).'
    },
    {
        name: ['Программное обеспечение (ПО)','программное обеспечение', "программного обеспечения"],
        definition: 'Совокупность всех программ, написанных человеком для компьютера.'
    },
    {
        name: ['Программный способ записи алгоритма','программный способ записи алгоритма'],
        definition: 'Запись алгоритма в виде программы.'
    },
    {
        name: ['Редактирование','редактирование', "редактирования", "редактированию", "редактировании"],
        definition: 'Изменение изображения или содержания текста.'
    },
    {
        name: ['Символы текста','символы текста',"символов", "символы"],
        definition: 'Каждая буква, цифра, знак препинания и т. д.'
    },
    {
        name: ["символом","символа",'Символ текста','символ текста', "символ", ],
        definition: 'Каждая буква, цифра, знак препинания и т. д.'
    },
    
    {
        name: ['Слайды','слайды', "слайдов", "слайдам"],
        definition: 'Отдельные страницы презентации, предназначенные для размещения материалов.'
    },
    {
        name: ['Слайд',"слайда",'слайд', , "слайде"],
        definition: 'Отдельная страница презентации, предназначенная для размещения материалов.'
    },
    
    {
        name: ['Словесный способ записи алгоритма','словесный способ записи алгоритма'],
        definition: 'Запись алгоритма на естественном языке общения.'
    },
    {
        name: ['Текстовый документ','текстовый документ',"текстовом документе"],
        definition: 'Документ, информация в котором представлена в виде текста.'
    },
    {
        name: ['Текстовые документы','текстовые документы'],
        definition: 'Документы, информация в которых представлена в виде текста.'
    },
    {
        name: ['Текстовый курсор','текстовый курсор',],
        definition: 'Указатель места ввода символа.'
    },
    {
        name: ['Текстовый редактор','текстовый редактор','текстовым редактором','текстовом редакторе'],
        definition: 'Программа, предназначенная для работы с содержимым электронных текстовых документов.'
    },
    {
        name: ['Текстовые редакторы','текстовые редакторы','текстовых редакторов'],
        definition: 'Программы, предназначенные для работы с содержимым электронных текстовых документов.'
    },
    {
        name: ['Форматирование текста','форматирование текста'],
        definition: 'Изменение формы представления текста.'
    },
    {
        name: ['Фрагмент изображения','фрагмент изображения', "фрагмента изображения", "фрагментом изображения","фрагменту изображения"],
        definition: 'Выделенная часть изображения.'
    },
    {
        name: ['Фрагменты изображения','фрагменты изображения'],
        definition: 'Выделенные части изображения.'
    },
    {
        name: ['Фрагмент текста','фрагмент текста', "фрагмента текста", "текстового фрагмента", "текстовый фрагмент"],
        definition: 'Выделенная часть компьютерного текста.'
    },
    {
        name: ['Фрагменты текста','фрагменты текста'],
        definition: 'Выделенные части компьютерного текста.'
    },
    {
        name: ['Электронная почта','электронная почта','электронной почте', "электронной почты", "электронной почтой"],
        definition: 'Служба сети Интернет, предназначенная для обмена сообщениями (электронными письмами) с помощью электронных почтовых ящиков.'
    },
    {
        name: ['Электронный текстовый документ','электронный текстовый документ', "электронного текстового документа" , ],
        definition: 'Текстовый документ, сохраненный на диске в файле.'
    },
    {
        name: ['Электронные текстовые документы','электронные текстовые документы'],
        definition: 'Текстовые документы, сохраненные на диске в файле.'
    },
    {
        name: ['Всемирная информационная паутина (WWW)','всемирная информационная паутина (WWW)'],
        definition: 'Служба (сервис) Интернета,позволяющий получать нужную информацию, представленную в виде специальных документов (веб-страниц, www-страниц).'
    },
    {
        name: ['Вызов процедуры','вызов процедуры'],
        definition: 'Команда выполнения вспомогательного алгоритма.'
    },
    {
        name: ['Гиперссылка на веб-странице','гиперссылка на веб-странице', "гиперссылок", "Гиперссылки", "гиперссылка", "гиперссылки", "гиперссылкой", "гиперссылку"],
        definition: 'Часть документа (слово, предложение, рисунок), которая ссылается на другую часть этого документа или другой документ.'
    },
    {
        name: ['Компьютерный исполнитель','компьютерный исполнитель'],
        definition: 'Виртуальный объект, действующий в виртуальной среде.'
    },
    {
        name: ['Программа','программа'],
        definition: 'Запись алгоритма на языке программирования.'
    },
    {
        name: ['Сетевой этикет','сетевой этикет'],
        definition: 'Правила поведения, общения в сети, традиции и культура пользователей Интернета.'
    },
    {
        name: ['Система команд исполнителя','система команд исполнителя'],
        definition: 'Команды, которые понимает и может выполнить исполнитель.'
    },
    {
        name: ['Среда обитания исполнителя','среда обитания исполнителя'],
        definition: 'Среда, в которой действует исполнитель.'
    },
    {
        name: ['Среда программирования','среда программирования', "среды программирования"],
        definition: 'Комплекс программ, используемых при разработке других программ.'
    },
    {
        name: ['Компьютеры','компьютеры','компьютеров'],
        definition: 'Универсальные устройства для работы с данными.'
    },
    {
        name: ["компьютера",'Компьютер','компьютер', "компьютере", "компьютером", ],
        definition: 'Универсальное устройство для работы с данными.'
    },
    
]

//бел версия
let glossaryItemsBel = [
    {
        name: ["абзацаў","абзацамі", 'Абзац','абзац', 'Абзацы','абзацы',  "абзацам", 'абзаца', ],
        definition: 'Тэкст, які заканчваецца знакам абзаца: ¶.'
    },
    {
        name: ['Алгарытмы','алгарытмы', "алгарытмаў", "алгарытмамі"],
        definition: 'Зразумелыя і канечныя паслядоўнасцi дакладных дзеянняў (каманд), фармальнае выкананне якіх дазваляе атрымаць рашэнне пастаўленай задачы.'
    },
    {
        name: ['Алгарытм','алгарытм', "алгарытме", "алгарытму"],
        definition: 'Зразумелая і канечная паслядоўнасць дакладных дзеянняў (каманд), фармальнае выкананне якіх дазваляе атрымаць рашэнне пастаўленай задачы.'
    },
    
    {
        name: ['Браўзер','браўзер', "браўзера"],
        definition: 'Праграма, прызначаная для прагляду вэб-старонак.'
    },
    {
        name: ['Браўзеры','браўзеры', "браўзераў"],
        definition: 'Праграмы, прызначаныя для прагляду вэб-старонак.'
    },
    {
        name: ['Буфер абмену','буфер абмену', "буфера абмену", "буферам абмену"],
        definition: 'Спецыяльная вобласць памяці камп’ютара для часовага захоўвання даных пры выкананні аперацый Вырезать і Копировать.'
    },
    {
        name: ['Вэб-сайт','вэб-сайт', "вэб-сайта"],
        definition: 'Некалькі вэб-старонак з агульнай тэмай і зместам, звязаныя паміж сабой гіперспасылкамі.'
    },
    {
        name: ['Вэб-сайты','вэб-сайты'],
        definition: 'Некалькі вэб-старонак з агульнай тэмай і зместам, звязаныя паміж сабой гіперспасылкамі.'
    },
    {
        name: ['Вэб-старонка','вэб-старонка', "вэб-старонку"],
        definition: 'Дакумент або інфармацыйны рэсурс Інтэрнэту.'
    },
    {
        name: ['Вэб-старонкі','вэб-старонкі'],
        definition: 'Дакументы або інфармацыйныя рэсурсы Інтэрнэту.'
    },
    {
        name: ['Дапаможны алгарытм','дапаможны алгарытм',"дапаможнага алгарытму", "дапаможным алгарытме"],
        definition: 'Алгарытм, які можна цалкам выкарыстоўваць у іншых алгарытмах.'
    },
    {
        name: ['Дапаможныя алгарытмы','дапаможныя алгарытмы'],
        definition: 'Алгарытмы, якія можна цалкам выкарыстоўваць у іншых алгарытмах.'
    },
    {
        name: ['Графічны рэдактар','графічны рэдактар', "графічнага рэдактара", "графічным рэдактары", "графічным рэдактарах"],
        definition: 'Спецыяльная праграма, прызначаная для стварэння і рэдагавання відарысаў.'
    },
    {
        name: ['Графічныя рэдактары','графічныя рэдактары', "графічных рэдактарах" ],
        definition: 'Спецыяльныя праграмы, прызначаныя для стварэння і рэдагавання відарысаў.'
    },
    {
        name: ['Графічны спосаб запісу алгарытму','графічны спосаб запісу алгарытму', "графічнага спосабу запісу алгарытму"],
        definition: 'Запіс алгарытму з дапамогай геаметрычных фігур (блокаў), якія адпавядаюць камандам алгарытму, і ліній для злучэння блокаў.'
    },
    {
        name: ['Даныя','даныя', "даных"],
        definition: 'Звесткі, прыведзеныя ў фармалізаваным выглядзе (на адной з фармальных моў).'
    },
    {
        name: ['Інтэрнэт',"Інтэрнэце",'інтэрнэт'],
        definition: 'Сусветная камп’ютарная сетка, здольная перадаваць даныя з аднаго пункта зямнога шара ў любы іншы.'
    },
    {
        name: ['Інфарматыка','інфарматыка'],
        definition: 'Навука, якая вывучае метады ўяўлення, захоўвання, перадачы, апрацоўкі і выкарыстання інфармацыі з ужываннем камп’ютарных тэхналогій у розных сферах чалавечай дзейнасці.'
    },
    {
        name: ['Інфармацыя', 'інфармацыя', "інфармацыі", "інфармацыяй", "інфармацыю"],
        definition: 'Звесткі пра аб’екты і з’явы навакольнага свету.'
    },
    {
        name: ['Выканаўца алгарытму','выканаўца алгарытму', 'выканаўцам алгарытмаў', "выканаўца", "выканаўцы", "выканаўцам"],
        definition: 'Чалавек, група людзей або тэхнічнае ўстройства, якія разумеюць каманды алгарытму і ўмеюць правільна іх выконваць.'
    },
    {
        name: ['Выканаўцы алгарытмаў','выканаўцы алгарытмаў'],
        definition: 'Група людзей або тэхнічныя ўстройствы, якія разумеюць каманды алгарытмаў і ўмеюць правільна іх выконваць.'
    },
    {
        name: ['Каманда ў алгарытме','каманда ў алгарытме'],
        definition: 'Накіраванне на выкананне канкрэтнага дзеяння.'
    },
    {
        name: ['Каманды ў алгарытме','каманды ў алгарытме'],
        definition: 'Накіраванні на выкананне канкрэтнага дзеяння.'
    },
    
    {
        name: ['Камп’ютарная прэзентацыя','камп’ютарная прэзентацыя','камп’ютарнай прэзентацыі', ],
        definition: 'Электронны дакумент, створаны на камп’ютары з дапамогай спецыяльных праграм і прызначаны для дэманстрацыі гледачам.'
    },
    {
        name: ['Камп’ютарныя прэзентацыі','камп’ютарныя прэзентацыі', ],
        definition: 'Электронныя дакументы, створаныя на камп’ютары з дапамогай спецыяльных праграм і прызначаныя для дэманстрацыі гледачам.'
    },
    {
        name: ['Камп’ютарныя тэхналогіі','камп’ютарныя тэхналогіі'],
        definition: 'Тэхналогіі работы з данымі, заснаваныя на выкарыстанні камп’ютараў.'
    },
    {
        name: ['Адбіццё відарыса','адбіццё відарыса', "адлюстраванне", "адлюстравання"],
        definition: 'Люстраное адлюстраванне відарыса адносна нябачнай восі (гарызантальнай або вертыкальнай).'
    },
    {
        name: ['Прэзентацыя','прэзентацыя',"прэзентацыі", "прэзентацыяй", "прэзентацыяю"],
        definition: 'Спосаб уяўлення інфармацыі з дапамогай тэхнічных сродкаў або без іх, прызначаны для дэманстрацыі чаго-небудзь новага (праекта, тавару і г. д.).'
    },
    {
        name: ['Прэзентацыі','прэзентацыі',"прэзентацый"],
        definition: 'Спосабы уяўлення інфармацыі з дапамогай тэхнічных сродкаў або без іх, прызначаныя для дэманстрацыі чаго-небудзь новага (праекта, тавару і г. д.).'
    },
    {
        name: ['Праграмнае забеспячэнне (ПЗ)','праграмнае забеспячэнне', "праграмнага забеспячэння"],
        definition: 'Сукупнасць усіх праграм, напісаных чалавекам для камп’ютара.'
    },
    {
        name: ['Праграмны спосаб запісу алгарытму','праграмны спосаб запісу алгарытму'],
        definition: 'Запіс алгарытму ў выглядзе праграмы.'
    },
    {
        name: ['Рэдагаванне','рэдагаванне', "рэдагавання", "рэдагаванні"],
        definition: 'Змяненне відарыса або зместу тэксту.'
    },
    {
        name: ['Сімвалы тэксту','сімвалы тэксту'],
        definition: 'Кожная літара, лічба, знак прыпынку і г. д.'
    },
    {
        name: ["сімвалам", "сімвала","сімвалаў",'Сімвал тэксту','сімвал тэксту', "сімвал",  ],
        definition: 'Кожная літара, лічба, знак прыпынку і г. д.'
    },
    
    {
        name: ['Слайды','слайды', "слайдаў", "слайдамі"],
        definition: 'Асобныя старонкі прэзентацыі, прызначаныя для змяшчэння матэрыялаў.'
    },
    {
        name: ['Слайд',"слайда",'слайд', "слайдзе", ],
        definition: 'Асобная старонка прэзентацыі, прызначаная для змяшчэння матэрыялаў.'
    },
    {
        name: ['Слоўны спосаб запісу алгарытму','слоўны спосаб запісу алгарытму'],
        definition: 'Запіс алгарытму на натуральнай мове зносін.'
    },
    {
        name: ['Тэкставы дакумент','тэкставы дакумент', "тэкставага дакумента", "тэкставым дакуменце"],
        definition: 'Дакумент, інфармацыя ў якім пададзена ў выглядзе тэксту.'
    },
    {
        name: ['Тэкставыя дакументы','тэкставыя дакументы'],
        definition: 'Дакументы, інфармацыя ў якіх пададзена ў выглядзе тэксту.'
    },
    {
        name: ['Тэкставы курсор','тэкставы курсор', "курсоры", "курсорамi"],
        definition: 'Паказальнік месца ўводу сімвала.'
    },
    {
        name: ['Тэкставы рэдактар','тэкставы рэдактар', "тэкставым рэдактарам", "тэкставага рэдактара"],
        definition: 'Праграма, прызначаная для работы са змесцівам электронных тэкставых дакументаў.'
    },
    {
        name: ['Тэкставыя рэдактары','тэкставыя рэдактары',"тэкставых рэдактараў"],
        definition: 'Праграмы, прызначаныя для работы са змесцівам электронных тэкставых дакументаў.'
    },
    {
        name: ['Фармаціраванне тэксту','фармаціраванне тэксту'],
        definition: 'Змяненне формы ўяўлення тэксту.'
    },
    {
        name: ['Фрагмент відарыса','фрагмент відарыса', "фрагмента відарыса", "фрагментам відарыса"],
        definition: 'Вылучаная частка відарыса.'
    },
    {
        name: ['Фрагменты відарыса','фрагменты відарыса'],
        definition: 'Вылучаныя часткі відарыса.'
    },
    {
        name: ['Фрагмент тэксту','фрагмент тэксту'],
        definition: 'Вылучаная частка камп’ютарнага тэксту.'
    },
    {
        name: ['Фрагменты тэксту','фрагменты тэксту'],
        definition: 'Вылучаныя часткі камп’ютарнага тэксту.'
    },
    {
        name: ['Электронная пошта','электронная пошта','электроннай пошце',"электроннай пошты","электроннай поштай"],
        definition: 'Служба сеткі Інтэрнэт, прызначаная для абмену паведамленнямі (электроннымі лістамі) з дапамогай электронных паштовых скрынь.'
    },
    {
        name: ['Электронны тэкставы дакумент','электронны тэкставы дакумент', "электроннага тэкставага дакумента"],
        definition: 'Тэкставы дакумент, захаваны на дыску ў файле. '
    },
    {
        name: ['Электронныя тэкставыя дакументы','электронныя тэкставыя дакументы'],
        definition: 'Тэкставыя дакументы, захаваныя на дыску ў файле.'
    },
    {
        name: ['Камп’ютары','камп’ютары'],
        definition: 'Універсальныя ўстройствы для работы з данымі.'
    },
    {
        name: ["камп’ютара",'Камп’ютар','камп’ютар', "камп’ютарам", "камп’ютараў"],
        definition: 'Універсальнае ўстройства для работы з данымі.'
    },
    
]
function addLink(arr) {
    let words = [...arr]
   
    $($('.main')[0].children).each((ind, item) => {
        $($(item)[0].children).each((i, elem)=>{
            if(!elem.matches('.not-linked')){
                words.forEach(word => {
                    word.name.forEach(item=>{
                        let regexp = new RegExp(" " + item + "[\\s,]", 'i')
                        
                        if (regexp.exec(elem.innerHTML)) {
                            result = regexp.exec(elem.innerHTML)
                            let elName = elem.name?(elem.name.split('-')[0]):null
                            
                               
                                    if(elem.className !== 'bordered' && elem.className !== 'noparset' && !elem.matches('.glossary-word') && !elem.matches('.about') && elName !== 'to' && elem.tagName !== 'H4' && elem.tagName !== 'H1' && elem.tagName !== 'H5' && elem.tagName !== 'B'){
                                        var reg = new RegExp(item, 'g');
                                        
                                        elem.innerHTML = elem.innerHTML.replace(reg, '<span style="color: gray;" class = "glossary-word">' + item + '</span>');
                                    }
                                
                            
                            
                        }
                    })
                    
                })
            }
        })
        

    })
    
}