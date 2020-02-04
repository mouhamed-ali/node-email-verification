https://html2jade.org/
https://pugjs.org/api/getting-started.html

wait about 10 minutes the first time and each time we change the schema.sql

wait for these logs :

```log

mysql       | 2020-02-04T15:40:39.855273Z 0 [Warning] CA certificate ca.pem is self signed.
mysql       | 2020-02-04T15:40:40.206740Z 1 [Warning] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.


mysql       | 2020-02-04T15:31:25.379440Z 0 [Note] mysqld: ready for connections.

mysql       | 2020-02-04 15:31:43+00:00 [Note] [Entrypoint]: Creating database db
mysql       | 2020-02-04 15:31:43+00:00 [Note] [Entrypoint]: Creating user user
mysql       | 2020-02-04 15:31:43+00:00 [Note] [Entrypoint]: Giving user user access to schema db
mysql       |
mysql       | 2020-02-04 15:31:43+00:00 [Note] [Entrypoint]: /usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/schema.sql


mysql       | 2020-02-04 15:43:21+00:00 [Note] [Entrypoint]: Database files initialized
mysql       | 2020-02-04 15:43:21+00:00 [Note] [Entrypoint]: Starting temporary server
mysql       | 2020-02-04 15:43:21+00:00 [Note] [Entrypoint]: Waiting for server startup


mysql       | 2020-02-04T15:43:55.339162Z 0 [Note] mysqld: ready for connections.
mysql       | Version: '5.7.28'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
```
