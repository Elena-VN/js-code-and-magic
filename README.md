# Code-and-Magic
## Задача 2
В файле `setup.js` 
 1. Покажите блок `.setup`, убрав в JS-коде у него класс `.hidden`. 
 2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля: 
 - `name`, строка — случайно сгенерированное имя персонажа. Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать из массива имен имя, а из массива фамилий фамилию и сложить их. 
 При желании имя и фамилию можно в случайном порядке менять местами:) 
	 - **Имена** 
		 - Иван
		 - Хуан Себастьян
		 - Мария
		 - Кристоф
		 - Виктор
		 - Юлия 
		 - Люпита
		 - Вашингтон 
	 - **Фамилии**
		 - да Марья
		 - Верон
		 - Мирабелла
		 - Вальц
		 - Онопко 
		 - Топольницкая 
		 - Нионго 
		 - Ирвинг 
 - 	`coatColor`, строка — случайный цвет мантии на выбор из следующих: 
	 - rgb(101, 137, 164)
	 - rgb(241, 43, 107)
	 - rgb(146, 100, 161)
	 - rgb(56, 159, 117)
	 - rgb(215, 210, 55)
	 - rgb(0, 0, 0) 
 - `eyesColor`, строка — случайный цвет глаз персонажа на выбор из следующих: 
	 - black
	 - red
	 - blue 
	 - yellow
	 - green 
3. На основе данных, созданных в предыдущем пункте и шаблона `#similarwizard-template` создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
	 - Имя персонажа `name` запишите как текст в блок `.setup-similar-label`;
	 - Цвет мантии `coatColor` задайте как цвет заливки `fill` в стилях элемента `.wizard-coat`; 
	 - Цвет глаз `eyesColor` задайте как цвет заливки `fill` в стилях элемента `.wizard-eyes`. 
4.  Отрисуйте сгенерированные DOM-элементы в блок `.setup-similar-list`. Для вставки элементов используйте `DocumentFragment`. 
5. Покажите блок `.setup-similar`, удалив у него CSS-класс `hidden`. 

**Требования к коду** 
Код должен быть разделен на отдельные функции. Стоит отдельно объявить функцию генерации случайных данных, функцию создания DOM-элемента на основе JS-объекта, функцию заполнения блока DOM-элементами на основе массива JS-объектов. Пункты задания примерно соответствуют функциям, которые вы должны создать.
