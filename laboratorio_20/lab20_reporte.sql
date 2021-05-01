/* Laboratorio 20: Consultas en SQL

    Manolo Ramírez Pintor
    A01706155

*/

/*

Convenio: para evitar las letras griegas originales del álgebra relacional, en esta lectura se utiliza la siguiente notación:

SL{condición} : selección con el criterio condición.
PR{lista de columnas}: proyección de lista de columnas.
JN: reunión natural (natural join).
JN{condición}: reunión con el criterio condición (teta join).
UN: unión.
IN: intersección.
- : diferencia
X: producto cartesiano.

*/

-- Consulta de una tabla completa
SELECT * FROM Materiales


-- Selección
SELECT * FROM materiales
WHERE clave=1000


-- Proyección 
SELECT clave,rfc,fecha FROM entregan


-- Reunión natural 
SELECT * FROM Materiales,Entregan
WHERE Materiales.clave = Entregan.clave
-- 1. Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? 
-- R= No. Es porque sólo indicamos que se seleccionen las claves en entregan y materiales con el '='.


-- Reunión con criterio específico 
SELECT * FROM Entregan,Proyectos
WHERE Entregan.numero <= Proyectos.numero


-- Unión (se ilustra junto con selección) 
(SELECT * FROM Entregan WHERE clave=1450)
union
(SELECT * FROM Entregan WHERE clave=1300)
-- 2. ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
SELECT * FROM Entregan 
WHERE clave=1450 or clave=1300


-- Intersección (se ilustra junto con selección y proyección) 
(SELECT clave FROM Entregan WHERE numero=5001)
intersect
(SELECT clave FROM Entregan WHERE numero=5018)


-- Diferencia (se ilustra con selección) 
(SELECT * FROM Entregan)
minus
(SELECT * FROM Entregan WHERE clave=1000)


-- Producto cartesiano 
SELECT * FROM Entregan,Materiales
-- 3. ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
-- R= Están definidos entre la tabla Entregan y Materiales dando como resultado un punto cartesiano.


-- Construcción de consultas a partir de una especificación 
/* 
    Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.
    
    Recuerda que la fecha puede indicarse como '01-JAN-2000' o '01/01/00'.
*/
set dateformat dmy

SELECT descripcion FROM Entregan,Materiales 
WHERE fecha>='01/01/00' AND fecha<'01/01/01'
-- 4. ¿Por qué aparecen varias veces algunas descripciones de material?
-- R= Porque el mismo material pudo haber sido entregado varias veces dentro de la consulta de todo el año.


-- Uso del calificador DISTINCT 
/*
    En el resultado anterior, observamos que una misma descripción de material aparece varias veces.

    Agrega la palabra DISTINCT inmediatamente después de la palabra SELECT a la consulta que planteaste antes.
*/
set dateformat dmy

SELECT DISTINCT descripcion
FROM Entregan, Materiales
WHERE fecha>='01/01/00'
AND fecha<'01/01/01'
-- 5. ¿Qué resultado obtienes en esta ocasión?
-- R= Las descripciones ya no fueron repetidas.


-- Ordenamientos 
/* 

    Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas, ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.

*/
SELECT Proyectos.Numero, denominacion, fecha, Cantidad
FROM Entregan, Proyectos
order by fecha desc

-- Operadores de cadena 
/*
    El operador LIKE se aplica a datos de tipo cadena y se usa para buscar registros, es capaz de hallar coincidencias dentro de una cadena bajo un patrón dado.

    También contamos con el operador comodín (%), que coincide con cualquier cadena que tenga cero o más caracteres. Este puede usarse tanto de prefijo como sufijo.
*/

SELECT * FROM Materiales WHERE Descripcion LIKE 'Si%'

-- 6. ¿Qué resultado obtienes?
-- R= Todas las descripciones que contengan 'Si'.

-- 7. Explica que hace el símbolo '%'.
-- R= Indica que busque más letras a continuación de 'Si' por si existe una cadena de texto más grande que contenga más caracteres además de 'S' e 'i'.

-- 8. ¿Qué sucede si la consulta fuera : LIKE 'Si' ?
-- R= Se devuelven todas las descripciones que tengan únicamente "Si", ni más, ni menos caracteres o diferentes como un acento.

-- 9. ¿Qué resultado obtienes?
-- R= No sale nada.

-- 10. Explica a qué se debe este comportamiento.
-- R= No existe ninguna descripción que sólo contenga "Si".

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

-- 11. ¿Qué resultado obtienes de ejecutar el siguiente código?
-- R=  Lo siguiente: "¿Qué resultado obtienes? ¿¿¿???"

-- 12. ¿Para qué sirve DECLARE?
-- R=  Sirve para declarar una variable.

-- 13. ¿Cuál es la función de @foo?
-- R=  Almacenar caracteres, es una variable tipo varchar.

-- 14. ¿Qué realiza el operador SET?
-- R=  SET funciona para agregar un valor a una variable.

-- 15. Ahora explica el comportamiento, función y resultado de cada una de las siguientes consultas:

   SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
   -- Salen RFCs que contengan las letras A hasta D.

   SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
   -- Salen RFCs que no contengan A.

   SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
   -- Salen números donde existan tres caracteres cualquiera antes que el 6.


-- Operadores lógicos 
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

-- 16. ¿Cómo filtrarías rangos de fechas?
/* R=  Así:

           set dateformat dmy
           Between '01/01/2000' and '01/05/2000';

        Es decir, primero pondría set dateformat dmy y luego el rango de fechas usando between.
*/

SELECT RFC,Cantidad,Fecha,Numero 
FROM Entregan 
WHERE Numero Between 5000 and 5010 AND 
Exists (SELECT RFC 
FROM Proveedores 
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC)

-- 17. ¿Qué hace la consulta?
-- R=  Nos devuelve el RFC, la cantidad, fecha y el numero entre 5000 y 5010, y la razon social debe comenzar con "La"

-- 18. ¿Qué función tiene el paréntesis ( ) después de EXISTS?
-- R=  Hacer una sub-consulta sin para evitar errores de sintáxis.

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN.
SELECT RFC,Cantidad,Fecha,Numero FROM Entregan
WHERE RFC in (SELECT Entregan.RFC FROM Entregan, Proveedores WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC)
and Numero Between 5000 and 5010

-- Realiza un ejemplo donde apliques algún operador : ALL, SOME o ANY.
SELECT Fecha FROM Entregan
WHERE Numero = any (SELECT Numero FROM Proyectos WHERE Denominacion LIKE 'A%')
ORDER BY Fecha

-- 19. ¿Qué hace la siguiente sentencia? Explica por qué.
SELECT TOP 2 * FROM Proyectos
-- R=  Devuelve las dos primeras filas de la tabla de Proyectos.

-- 20. ¿Qué sucede con la siguiente consulta? Explica por qué.
SELECT TOP Numero FROM Proyectos
-- R=  Sale un error de sintaxis porque no le pusimos cuántas filas queremos obtener.

-- Modificando la estructura de un tabla existente. 
/*
    Agrega a la tabla materiales la columna PorcentajeImpuesto con la instrucción:
    
    ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);

    A fin de que los materiales tengan un impuesto, les asignaremos impuestos ficticios basados en sus claves con la instrucción:

    UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;
    Esto es, a cada material se le asignará un impuesto igual al doble de su clave dividida entre diez.

*/
ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2); 
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;
SELECT * FROM Materiales

-- ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado?

    SELECT Descripcion, SUM(Cantidad * (Precio + PorcentajeImpuesto)) as 'Total de entregas'
    FROM Materiales M, Entregan E
    WHERE M.Clave = E.Clave
    GROUP BY Descripcion


-- Creación de vistas 
/* 
    Comprueba lo anterior, creando vistas para cinco de las consultas que planteaste anteriormente en la práctica. Posteriormente revisa cada vista creada para comprobar que devuelve el mismo resultado.
*/

-- 1
CREATE view Consulta_1 (Clave) as
SELECT clave FROM Entregan WHERE numero=5001

CREATE view Consulta5(Clave) as
SELECT clave FROM Entregan WHERE numero=5018

SELECT DISTINCT Consulta4.Clave
FROM Consulta4, Consulta5
WHERE Consulta4.Clave = Consulta5.Clave


-- 2
set dateformat dmy

CREATE view Consulta_2 (Descripcion, Fecha) as
SELECT DISTINCT descripcion, Fecha
FROM Entregan, Materiales
WHERE fecha>='01/01/00'

SELECT DISTINCT descripcion 
FROM Consulta6
WHERE fecha<'01/01/01'

-- 3
CREATE view Consulta_3 (Clave, RFC, Numero, Fecha, Cantidad) as
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero<=5010

SELECT * FROM Consulta3
WHERE Numero>=5000


-- 4
CREATE view Consulta_4 (RFC) as 
SELECT Entregan.RFC
FROM Entregan, Proveedores
WHERE RazonSocial LIKE 'La%' AND Entregan.RFC = Proveedores.RFC

SELECT DISTINCT E.RFC, Cantidad, Fecha, Numero
FROM Entregan E, Consulta1 C
WHERE E.RFC=C.RFC AND Numero BETWEEN 5000 AND 5010


-- 5
CREATE view Consulta_5 (Numero, Denominacion, Fecha, Cantidad) as
SELECT Proyectos.Numero, denominacion, fecha, Cantidad
FROM Entregan, Proyectos

SELECT * FROM Consulta2
ORDER BY fecha DESC

-- 	A continuación se te dan muchos enunciados de los cuales deberás generar su correspondiente consulta.

 -- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".
SELECT Materiales.clave, Materiales.descripcion FROM Materiales, Entregan, Proyectos 
WHERE Materiales.clave = Entregan.clave
and Entregan.numero = (SELECT Proyectos.numero
FROM Proyectos
WHERE Proyectos.denominacion = 'Mexico sin ti no estamos completos')

-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".
SELECT Materiales.clave, Materiales.descripcion FROM Materiales, Entregan, Proyectos 
WHERE Materiales.clave = Entregan.clave
and Entregan.RFC = (SELECT Proveedores.RFC
FROM Proveedores
WHERE Proveedores.razonSocial = 'Acme tools')


-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
SELECT DISTINCT P.RFC
FROM Entregan E, Proveedores P
WHERE YEAR(E.fecha) = 2000 and P.RFC = E.RFC
group by P.RFC
having avg(300) >= 300


-- El Total entregado por cada material en el año 2000.
SELECT Descripcion, sum(Precio) as 'Total entregado'
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave and YEAR(E.fecha) = 2000
group by Descripcion


-- La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución).
SELECT top 1 Materiales.clave FROM Materiales, Entregan
WHERE YEAR(Entregan.Fecha) = 2001 and 
exists(SELECT top 1 Cantidad
FROM Entregan
order by cantidad desc)


-- Productos que contienen el patrón 'ub' en su nombre.
SELECT * FROM Materiales 
WHERE Descripcion LIKE '%ub%'


-- Denominación y suma del total a pagar para todos los proyectos.
SELECT Denominacion, sum(Cantidad*(precio+PorcentajeImpuesto)) as 'Total a pagar' FROM Proyectos P, Materiales M, Entregan E
WHERE P.Numero = E.Numero and M.Clave = E.Clave
group by Denominacion

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).
CREATE view Coahuila(Denominacion,RFC,RazonSocial)
as SELECT PR.Denominacion, P.RFC, P.RazonSocial
FROM Proveedores P, Proyectos PR, Entregan E
WHERE E.RFC = P.RFC and E.Numero = PR.Numero
and PR.Denominacion = 'Educando en Coahuila'

CREATE view Televisa(Denominacion, RFC, RazonSocial)
as SELECT PR.Denominacion, P.RFC, P.RazonSocial
FROM Proveedores P, Proyectos PR, Entregan E, Materiales M
WHERE E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and PR.Denominacion = 'Televisa en acción'

SELECT T.Denominacion, T.RFC, T.RazonSocial
FROM Televisa T
left join Coahuila C
on T.RFC = C.RFC
WHERE C.RFC is null


-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).
SELECT Denominacion, P.RFC, RazonSocial
FROM Proveedores P, Proyectos PR, Entregan E, Materiales M
WHERE E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and Denominacion = 'Televisa en acción'
and P.RFC not in (SELECT P.RFC
FROM Proveedores P, Proyectos PR, Entregan E
WHERE E.RFC = P.RFC and E.Numero = PR.Numero
and Denominacion = 'Educando en Coahuila')
order by RFC desc


-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.
SELECT  M.Precio, M.Descripcion
FROM Proveedores P, Proyectos PR, Entregan E, Materiales M
WHERE E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and Denominacion = 'Televisa en acción'
and P.RFC in (SELECT P.RFC
FROM Proveedores P, Proyectos PR, Entregan E
WHERE E.RFC = P.RFC and E.Numero = PR.Numero
and Denominacion = 'Educando en Coahuila')
order by M.Precio desc

/*
    En el reporte incluye la sentencia, una muestra de la salida (dos o tres renglones) y el número de renglones que SQL Server reporta al final de la consulta.

    SELECT * FROM Materiales
        Clave   Descripción     Costo
        1000    Varilla 3/16    100.00
        1010    Varilla 4/32    115.00
        Total de renglones: 44

    SELECT * 
    FROM Materiales 
    WHERE Clave =  1000
        Total de renglones: 1
    
*/

