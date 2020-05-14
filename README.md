# QA-Automation
# LEEME #
Bienvenido a mi proyecto tecnico de Testcafe para Falabella-QA.

Este proyecto de automatización sigue las estrictas normas de Page Model Object, considerando:

    1)Parte3/Pages:  Carpeta que almacena cada  página que se encuentra aislada para facilitar la detección de errores y agilizar su mantenibilidad. TestController y Engine se ejecutan unicamente desde Page.

    2)Parte3/Test:   Carpeta  que almacena las pruebas sin exponer Engine ni TestController, solo ejecuta las funciones y metodos creadas en Page.

    3)Parte3/Component: Carpeta que almacena componentes bases que son estaticos durante el proceso del negocio, no aplicable en este proyecto de prueba.


A. Para utilizar testcafe de este proyecto tienes 2 opciones:

    1) Instalar la versión de este package.json, ejecutando el npm

    2) desde la terminal sobre /QA-Automation/, puedes ejecutar NPX Testcafe, automaticamente creará dependencias temporales para correr las pruebas.


B. el archivo .testcaferc.json tiene las bases para ejecutar IE y Chrome, puede agregar o quitar los navegadores que estimes convenientes (opera, Firefox,Chrome,IE)



C. En cada PAGE se utiliza modelo de LOCATORS, ACTIONS, GETTERS:
    Locators: Hace referencia a los elementos de la WEB
    Actions: Hace referencia a QUE PUEDES HACER con un elemento.
    GETTER: Hace referencia a que PUEDES OBTENER de un elemento.

D. Este proyecto ha sido creado en JavaScript/TypeScript para obtener el mayor rendimiento/funcionalidad de Testcafe (No olvidemos que el fuerte de Testcafe es TypesScript).
   Ya que al utilizar JavaScript en archivos TypeScript, crear automatización QA es más viable al ser un lenguaje altamente tipado. Testcafe lo soporta de manera nativa.    

------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------

 Falabella Technical Test

 Parte 1

Definir casos de prueba borde o limite, para la funcionalidad Transferencia Electrónica tomando en cuenta los criterios de aceptación que se indican:

    La primera transferencia a un nuevo contacto es de máximo $250.000.
    A partir de la segunda transferencia, el monto puede ser de hasta $6.500.000
    El mínimo a transferir permitido es de $5.000
    El monto máximo total a transferir durante el día es de $18.000.000


Parte 2

Se tiene un microservicio GET, que recibe:

    En el request la fecha del día actual en formato DD-MM-AAAA.
    Dos headers, el primero es "Country", cuyo dominio de valores puede ser "Chile" o "Argentina" y el segundo es "City", cuyo dominio de valores es "Santiago","Arica", "Chiloe" (cuando se trata de Country Chile) y "BuenosAires", "SanJuan" (cuando country es Argentina)


El response del microservicio devuelve la temperaturaActual y temperaturaDiaSiguiente en formato json.

Considerar que todos los campos a ingresar son Sensitive Case.

Crear los casos de prueba posibles para testear este microservicio, teniendo en cuenta que cuando es un País distinto a los señalados o una ciudad distinta el response "País y Ciudad incorrectos".


Parte 3


La página web a utilizar será Google y Tottus

Se debe utilizar [Cucumber, TestCafe y Javascript]. No se debe solicitar ingresos de datos por parte de usuarios, todo debe ser automático. El proyecto debe ser entregado en Github.

Se deben automatizar la consulta de sucursales.

    En google buscar la palabra "tottus sucursales" y del listado que aparece, presionar en la primera sucursal de la lista y posterior presionar el botón Sitio web
    Una vez en la página de tottus, buscar la opción "Recetas" 
    Seleccionar Dificultad alta

    Buscar corona de Rollitos de canela
    Y validar que la receta tenga canela y azúcar rubia.


Se deben implementar las configuraciones necesarias para que el proyecto soporte Chrome e Internet Explorer como navegadores. 

Favor subir tu trabajo en un repositorio de GitHub para que podamos revisarlo desde ahí. El día de entrega es el día Martes 19/05/2020 a las 9 horas. 

No dudes en contactarnos ante cualquier duda, y confirmar tu participación. 
