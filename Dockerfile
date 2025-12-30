FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY tictactoe/ /usr/share/nginx/html/
EXPOSE 80
