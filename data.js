﻿var $table = $('.js-deputies-table'),
	deputies = [
	{
		name: 'Андрієвський Д.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Арешонков В.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Барна О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гарбуз Ю.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Голуб В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гордєєв А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Денисенко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Добродомов Д.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Домбровський О.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубневич Я.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єфімов М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іщейкін К.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Каплін С.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривохатько В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кудлаєнко С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кутовий Т.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Люшняк М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матківський Б.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мацола Р.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельниченко В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мусій О.С.',
		facebook: 'https://www.facebook.com/oleh.musij',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Пацкан В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ревега О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибчинський Є.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Розенблат Б.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сабашук П.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Соловей Ю.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Співаковський О.В.',
		facebook: 'https://www.facebook.com/spivakovsky.alexander',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сугоняко О.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Урбанський О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фірсов Є.П.',
		facebook: 'https://www.facebook.com/egor.firsov',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Чекіта Г.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Чубаров Р.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юринець О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яніцький В.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Антонищак А.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бакуменко О.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Батенко Т.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Горват Р.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гудзенко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дмитренко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубневич Б.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Жолобецький О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іонова М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іщенко В.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кіт А.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Князевич Р.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Козаченко Л.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кузьменко А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Курячий М.П.',
		facebook: 'https://www.facebook.com/kuryachiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лесюк Я.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лівік О.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лубінець Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Макар’ян Д.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельник С.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Недава О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Новак Н.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павелко А.В.',
		facebook: 'https://www.facebook.com/andriy.pavelko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Палатний А.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Петренко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Побер І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибак І.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романюк Р.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сольвар Р.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тіміш Г.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Томенко М.В.',
		facebook: 'https://www.facebook.com/m.tomenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Усов К.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Черненко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шинькович А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юрик Т.З.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юрчишин П.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яриніч К.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Алексєєв І.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабій Ю.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бриченко І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ванат П.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вознюк Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гаврилюк М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Горбунов О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гузь І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дзюблик П.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Донець Т.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ємець Л.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Заставний Р.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кадикало М.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кодола О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Корчик В.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кремінь Т.Д.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривошея Г.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ксенжук О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Логвинський Г.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лунченко В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Медуниця О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Река А.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сташук В.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сторожук Д.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фаєрмарк С.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Хміль М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкварилюк В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабенко В.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Береза Ю.М.',
		facebook: 'https://www.facebook.com/yra.bereza',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бондар М.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Васюник І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Геращенко А.Ю.',
		facebook: 'https://www.facebook.com/anton.gerashchenko.7',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гриневич Л.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дейдей Є.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дзензерський Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Драюк С.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єфремова І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Княжицький М.Л.',
		facebook: 'https://www.facebook.com/mykolakn',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Котвіцький І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лапін І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ледовських О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лук’янчук Р.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Поляков М.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Присяжнюк О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романовський О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сидорчук В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сочка О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Стеценко Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тимошенко Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Унгурян П.Я.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Федорук М.Т.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Королевська Н.Ю.',
		facebook: 'https://www.facebook.com/Nataliya.Korolevska',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мартовицький А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павленко Ю.О.',
		facebook: 'https://www.facebook.com/Yurij.Pavlenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Папієв М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сажко С.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Солод Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шпенов Д.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Білий О.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вілкул О.Ю.',
		facebook: 'https://www.facebook.com/OleksandrVilkul',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гальченко А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Долженков О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матвієнков С.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мірошниченко Ю.Р.',
		facebook: 'https://www.facebook.com/umirosnicenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Німченко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павлов К.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Скорик М.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шенцев Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шурма І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Атрошенко В.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Безбах Я.Я.',
		facebook: 'https://www.facebook.com/profile.php?id=100007266183649',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гройсман В.Б.',
		facebook: 'https://www.facebook.com/volodymyrgroysman',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дідич В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іллєнко А.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Марченко О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Осуховський О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Парубій А.В.',
		facebook: 'https://www.facebook.com/andriy.parubiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Супруненко О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Балога В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Береза Б.Ю.',
		facebook: 'https://www.facebook.com/borislav.bereza',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бублик Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Головко М.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дерев’янко Ю.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Довгий О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Левченко Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Немировський А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Парасюк В.З.',
		facebook: 'https://www.facebook.com/v.parasyuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Суслова І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабак А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Костенко П.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мірошніченко І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Острікова Т.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Семенуха Р.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Березюк О.Р.',
		facebook: 'https://www.facebook.com/oleg.bereziuk.77',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Данченко О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Подоляк І.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романова А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сисоєнко І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Барвіненко В.Д.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Біловол О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бондар В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гуляєв В.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ільюк А.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кіссе А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Пресман О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Хомутиннік В.Ю.',
		facebook: 'https://www.facebook.com/profile.php?id=100009097881046',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкіря І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Березкін С.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бобов Г.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Зубик В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кацуба В.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Святаш Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шипко А.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яценко А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Амельченко В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вітко А.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Галасюк В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Корчинська О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Купрієнко О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лінько Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ляшко О.В.',
		facebook: 'https://www.facebook.com/O.Liashko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Огнєвіч З.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибалка С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Скуратовський С.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шухевич Ю.Р.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вовк В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириченко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ленський О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лозовой А.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мосійчук І.В.',
		facebook: 'https://www.facebook.com/igor.mosijcuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Попов І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Силантьєв Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бандуров В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лабазюк С.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Литвин В.М.',
		facebook: 'https://www.facebook.com/vm.lytvyn',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Москаленко Я.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Развадовський В.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шаповалов Ю.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Деркач А.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мартиняк С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Молоток І.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Поплавський М.М.',
		facebook: 'https://www.facebook.com/MMPoplavskiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фурсін І.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Абдуллін О.Р.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Власенко С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириленко І.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кондратюк О.К.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кужель О.В.',
		facebook: 'https://www.facebook.com/abkuzhel',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Немиря Г.М.',
		facebook: 'https://www.facebook.com/profile.php?id=100004412837426',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тарасюк Б.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкрум А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубіль В.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кожем’якін А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Крулько І.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Луценко І.В.',
		facebook: 'https://www.facebook.com/igor.lutsenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тимошенко Ю.В.',
		facebook: 'https://www.facebook.com/YuliaTymoshenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
];

$(function () {

	// Sort deputies by name
	deputies.sort(function(a, b) { return a.name.localeCompare(b.name); });
	
	// Render deputies
	$.each(deputies, function(i, deputy) {
		if (!deputy.name) {
			return;
		}
		var fbHtml = deputy.facebook ? '<a href="' + deputy.facebook + '" target="_blank"><img src="img/facebook.png"></a>' : '';
		$table.append(
			'<tr>' + 
				'<td style="width: 30px;">' + fbHtml + '</td>' +
				'<td style="width: 400px;">' + deputy.name + '</td>' +
				'<td>' +
					'<a href="' + deputy.tags[0].lawUrl + '" target="_blank" style="display: block; margin-top: 5px;">' +
						'<span class="label label-warning" data-toggle="tooltip" data-placement="left" title="' + deputy.tags[0].lawName + '">' + 
							deputy.tags[0].name + 
						'</span>' + 
					'</a>' + 
				'</td>' + 
			'</tr>'
		)
	});

	// Bind tooltips
	$('[data-toggle="tooltip"]').tooltip();
});