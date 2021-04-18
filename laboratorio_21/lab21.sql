/*
    Manolo Ramírez Pintor
    A01706155
    Lab 21
*/

/*
Tablas:
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(Cantidad) as 'Total Cantidades', SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto / 100)) as 'Importe Total'
FROM Entregan E, Materiales
WHERE E.clave=M.clave and Fecha BETWEEN '01/01/97' and '31/12/97'


-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas. */
SELECT RazonSocial, count(*) as 'Numero de entregas', SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto/100)) as 'Ingresos totales'
FROM Proveedores P, Entregan E, Materiales M
WHERE M.clave=E.clave and E.RFC=P.RFC
GROUP BY RazonSocial


-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT M.Clave, Descripcion, 
SUM(Cantidad) as 'Cantidad total',
MIN(Cantidad) as 'Cantidad mínima', 
MAX(Cantidad) as 'Cantidad máxima',
SUM(Cantidad * (Costo + Costo * (PorcentajeImpuesto/100))) as 'Importe total'
FROM Materiales M, Entregan E
WHERE M.clave = E.clave 
GROUP BY M.Clave, Descripcion
HAVING AVG(Cantidad)>400


-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Promedio', M.Clave, Descripcion
FROM Entregan E, Materiales M, Proveedores P
WHERE E.Clave = M.Clave and E.RFC = P.RFC	
GROUP BY RazonSocial, M.Clave, Descripcion
HAVING AVG(Cantidad) > 500
ORDER BY 'Cantidad Promedio' desc


-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT RazonSocial, AVG(Cantidad) as 'Cantidad promedio',  M.Clave, Descripcion
FROM entregan E, materiales M, Proveedores P
WHERE E.Clave = M.Clave and E.RFC = P.RFC
GROUP BY RazonSocial, M.Clave, Descripcion
HAVING AVG(Cantidad) not between (370) and (450)
ORDER BY 'Cantidad promedio' DESC


-- Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.
INSERT INTO Materiales VALUES (1440, 'Azulejo', 100, 16);
INSERT INTO Materiales VALUES (1450, 'Clavo', 10, 16);
INSERT INTO Materiales VALUES (1460, 'Hormigón', 300, 16);
INSERT INTO Materiales VALUES (1470, 'Varilla', 50, 16);
INSERT INTO Materiales VALUES (1480, 'Acero', 450, 16);
-- GUIA: Materiales (Clave, Descripción, Costo, PorcentajeImpuesto)


-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave FROM Entregan)


-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT RazonSocial 
FROM Proveedores P 
INNER JOIN Entregan E ON P.RFC = E.RFC
INNER JOIN Proyectos Pr ON Pr.Numero = E.Numero
WHERE Denominacion = 'Queretaro Limpio' OR Denominacion = 'Vamos Mexico'


-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'
SELECT Descripcion
FROM Materiales M 
INNER JOIN Proyectos Pr ON Pr.Denominacion = M.Descripcion
WHERE Denominacion != 'CIT Yucatán'


-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT RazonSocial, AVG(Cantidad) as 'Promedio de cantidad'
FROM Proveedores, Entregan
WHERE Proveedores.RFC = Entregan.RFC
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad) 
FROM Entregan
WHERE RFC = 'VAGO780901')


-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT P.RFC, RAZONSOCIAL
FROM Proveedores P
WHERE RFC IN (SELECT RFC FROM Entregan WHERE Numero = 5005)
AND (SELECT SUM(CANTIDAD) FROM Entregan WHERE Fecha BETWEEN '01/01/00' AND '31/12/00' AND RFC = P.RFC) > 
(SELECT SUM(CANTIDAD) FROM Entregan WHERE Fecha BETWEEN '01/01/01' AND '31/12/01' AND RFC = P.RFC)