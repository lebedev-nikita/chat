echo Добавляем пользователя с id=1 в каналы с id=1 и id=2
curl -X POST -H "Content-Type: application/json" -d '{"channel_id": 1, "user_id": 1, "preferences": "{\"theme\": \"dark\"}"}' 'http://localhost:30001/api/postUserInChannel'
curl -X POST -H "Content-Type: application/json" -d '{"channel_id": 2, "user_id": 1, "preferences": "{\"theme\": \"dark\"}"}' 'http://localhost:30001/api/postUserInChannel'
echo

echo Запрашиваем всех пользователей канала с id=1
curl 'http://localhost:30001/api/getUsersOfChannel?channel_id=1'
echo

echo Запрашиваем все каналы пользователя с id=1
curl 'http://localhost:30001/api/getChannelsOfUser?user_id=1'
echo
