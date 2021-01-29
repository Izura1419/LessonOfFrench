let mapFr = document.querySelector(".mapFr");
let boss = document.querySelector(".boss");
let strin = document.querySelector(".strin");

function show(){
	mapFr.style.opacity = 1;
	setTimeout(blur,1500)
}

function blur(){
	mapFr.style.filter = "blur(1px)";
	boss.style.opacity = 1;
	strin.style.opacity = 1;
}

setTimeout(show,1000);

let joulM = document.querySelector(".joulM");
function clickJ(){
	joulM.innerHTML = "1.Он бредил кораблями и пытался сбежать из дома, чтобы стать юнгой" +
	" 2.Он влюбился в кузину" + " 3. Отец заставил его стать адвокатом" + " 4.Он черпал вдохновение в собственных приключениях" +
	" 5. У него были серьёзные проблемы со здоровьем" + " 6. Его психически больной племянник выстрелил ему в ногу";
}
let louiM = document.querySelector(".louiM");
function clickL(){
	louiM.innerHTML = "В первый погожий весенний день 1835 года, 13-летний Вюиттон в одиночестве покинул отчий дом и пешком отправился в Париж. 292-мильный (470-километровый) поход в Париж из родного Лон-ле-Сонье в итоге растянулся надолго. Вюиттон путешествовал более двух лет, занимаясь случайными работами, чтобы прокормить себя по пути, и оставаясь там, где он мог найти укрытие и ночлег. Только в 1837 году, в возрасте 16 лет, Луи Вюиттон, наконец-то, прибыл в Париж. Там он устроился на работу в мастерскую успешного производителя коробок и упаковок по имени месье Марешаль. В Европе 19-го века изготовление коробок и упаковка были весьма респектабельным ремеслом. Изготовители коробок делали все коробки для товаров по индивидуальному заказу. Вюиттону потребовалось всего несколько лет, чтобы заслужить среди богатых парижан репутацию одного из лучших практиков этого ремесла.";
	louiM.style.top = "-60%";
	louiM.style.fontSize = "1.3em";
}
let cocoM = document.querySelector(".cocoM");
function clickC(){
	cocoM.innerHTML = "1.Изначально она была певицей и танцовщицей в кабаре 2.Коко - это псевдоним. Настоящее имя Коко Шанель - Габриэль Бонё Шанель 3.Она первая придумала женские брюки и тельняшку 4.Коко Шанель создала легендарный аромат Chanel №5 -  первые в мире духи, содержащие в огромном количестве синтетические вещества и альдегиды, благодаря которым запах был стойкий и держался очень долго. 5. Она ненавидела бриллианты 6. Чёрный был её любимым цветом 7. Она создала знаменитые двухцветные туфли-лодочки и сумку на цепочке. 8. Она жила в отеле 37 лет. 9. Коко Шанель изобрела женский костюм.";
	cocoM.style.top = "-30%";
	cocoM.style.fontSize = "1.3em";
}
let diorM = document.querySelector(".diorM");
function clickD(){
	diorM.innerHTML = "1.Главной его музой стала мама, которая и привила любовь к искусству. 2. Кристиан Диор прославился после 40-а. 3. Он выбирал в модели девушек с необычной внешностью. 4. Диор обожал делать акцент на головных уборах, включая их в свои линии одежды. 5. Всю коллекцию своих духов: Мисс Диор, Диорелла, Диориссимо - Кристиан выпустил в 1950 году. Нежный приятный цветочный аромат создавал вокруг леди манящий, притягательный флейф. 6. Кристиан Диор всегда говорил, что он не создает что-то новое, он просто заимствует, и привносит в это свое видение. 7. Кристиан Диор руководил своим Домом всего лишь 10 лет, а бренд знаменит по сей день.";
	diorM.style.top = "-38%";
	diorM.style.fontSize = "1.3em";
}

let leftSt = document.querySelector(".left");
let rightSt = document.querySelector(".right");

let partTwo = document.querySelector(".partTwo");
let partThree = document.querySelector(".partThree");
let partFour = document.querySelector(".partFour");
let partFive = document.querySelector(".partFive");

let progress = 0;

function clickR(){
	progress = progress + 20;
	if (progress == 20){
		partTwo.style.display = "none"
	}
	if (progress == 40){
		partThree.style.display = "none"
	}
	if (progress == 60){
		partFour.style.display = "none"
	}
}
function clickLe(){
	progress = progress - 20;
	if (progress == 0){
		partTwo.style.display = "inline-block"
	}
	if (progress == 20){
		partThree.style.display = "inline-block"
	}
	if (progress == 40){
		partFour.style.display = "inline-block"
	}
}