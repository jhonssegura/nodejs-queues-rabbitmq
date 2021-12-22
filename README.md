# nodejs-queues-rabbitmq

## Requisitos

* Docker
* NodeJs
* NPM

## Procedimiento 

Habilitar el servidor mediante Docker

    $ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management

Para ejecutar tanto el Publisher como el Receiber se debe ejecutar en dos terminales separadas dentro del proyecto

$ node publisher/

$ node receiber/
