cd /root/server
yarn install

if [ $DEV ];then yarn run dev;else yarn start;fi
