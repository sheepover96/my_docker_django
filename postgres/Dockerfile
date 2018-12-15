FROM postgres:10.4

RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LANG ja_JP.utf8

RUN mkdir /usr/src/init
COPY ./init_db.sql /usr/src/init 
#ENV POSTGRES_USER postgres
#ENV POSTGRES_DB postgres 
#RUN psql -f /usr/src/init/init_db.sql -U postgres