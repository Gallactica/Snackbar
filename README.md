# Snackbar
Уведомления
### Подключение
```html
<head>
    <link rel="stylesheet" href="/snackbar.min.css">
</head>

<body>
    <div class="snackbar"></div>
    <script src="/snackbar.min.js"></script>
</body>
```
### Использование
```html
<script>
    snackbar("Сообщение")
</script>
```
### Пример
```html
<script>
    var counter = 0
    setInterval(() => {
        snackbar('Счетчик - ' + (counter++))
    }, 1000)
</script>
```
### Настройки
```html
<!-- По центру, снизу -->
<div class="snackbar"></div>
<!-- По центру, сверху -->
<div class="snackbar top"></div>
<!-- По бокам, сверху -->
<!-- left/right -->
<div class="snackbar top left"></div>
```