# REGRESS ENGINE

### Билд

В корневой папке проекта выполнить

```
npm install
npm run build
```

### Запуск приложения для разработки

В корневой папке проекта выполнить

```
npm install
npm run demo
```

### Проверка движка локально

- В корневой папке проекта выполнить команду (создастся архив с пакетом)

```
npm pack
```

- Создать тестовое **node** приложение и установить пакет, указав путь к архиву (можно относительный)

```
npm install ../regress-engine/regress-engine-0.0.1.tgz
```