echo Добавляем сообщение в канал с id=1
curl -X POST -H "Content-Type: application/json" -d '{"user_id": 123, "channel_id": 1, "_text": "hello"}' 'http://localhost:30001/api/postMessage'
echo

echo Запрашиваем сообщения из канала с id=1
curl 'http://localhost:30001/api/getMessages?channel_id=1'
echo
