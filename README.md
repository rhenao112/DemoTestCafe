# 🛠️ DemoTestCafe 🛠️ 

## ⚙️ Descripción ⚙️

Este ejemplo es un proyecto creado para aprender sobre autoamtización con TestCafe. TestCafé permite realizar automatizaciones _**Web**_ y _**Servicios**_. En este proyecto encontrarás un demo Web basado en el patrón de diseño Page Object Model - P.O.M

## 📦 Instalación 📦

Para instalar TestCafé se deben seguir los siguientes pasos: 

* Instalar TestCafé

	```
	npm install -g testcafe
	```

* Crear Test

	* Se debe crear un archivo con el nombre que queremos asignar al test, para este ejemplo será:

		```
		BuyEveningDress.js
		```

	* Se deben crear las clases que representan las vistas de usuario, para este ejemplo serán: 

		```
		HomePhpTravelsPage.js
		HomeYourLogoPage.js
		OrderPage.js
		PrintedDressPage.js
		PurchaseSummaryPage.js
		```

	* Se debe crear el archivo de configuración el cual contenga las versiones a utilizar de las librerías, así como los scripts de ejecución, para este ejemplo será:  

		```
		package.json
		```

	* Se debe ejecutar el comando:

		```
		npm i
		```

* Ejecutar el test

	```
	npm test
	```

_NOTA: _ Por orden se deberían estructurar las clases en paquetes. 

## ✒️ Autores ✒️
* **Rigoberto Henao** - **Sophos Solutions** - [rhenao112](https://github.com/rhenao112)
