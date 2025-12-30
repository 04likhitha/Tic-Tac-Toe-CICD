FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY Tic Tac Toe/ /usr/share/nginx/html/
EXPOSE 80

