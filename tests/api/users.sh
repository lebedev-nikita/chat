echo Создаем пользователя
curl -X POST -H "Content-Type: application/json" -d '{"email": "mail@mail.ru", "name": "Иван", "surname": "Иванов", "avatar_url": "https://someUrl"}' 'http://localhost:30001/api/postUser'
echo

echo Запрашиваем всех пользователей
curl 'http://localhost:30001/api/getAllUsers'
echo

echo Запрашиваем пользователя с id=1
curl 'http://localhost:30001/api/getUser?user_id=1'
echo
