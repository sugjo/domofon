export const strings = {

    regex: new RegExp(/^[0-9]{10}$/),

    navigatorsStrings: {
        deviceTitle: 'Главная',
        mainTitle: 'Управление',
        functionTitle: 'Функции',
    },

    alerts: {
        ErrAlertTitle: 'Ошибка',
        EditDeviceAlertTitle: 'Удалить это устройство?',
        EditDeviceAlertText: 'Это действие нельзя отменить!',
    },

    devicesStrings: {

        //Заголовки
        AddDeviceScreen: 'Добавление устройства',
        EditDeviceScreen: 'Редакртирование устройства',
        ChangePassScreen: 'Смена пароля',

        //Главная
        Select: 'Выбран',
        AddDevice: 'Добавить устройство',
        DellAllDevices: 'Удалить все устройства',

        //Добавить устройство
        DeviceName: 'Имя устройства *',
        DeviceNameErr: 'Имя устройства не может быть пустым',
        DeviceDesc: 'Описание',
        DeviceDescErr: 'Описание не может быть пыстым',
        DevicePhone: 'Телефон *',
        DevicePhoneErr: 'Введите номер телефона через +7',

        DevicePass: 'Пароль *',
        DevicePassErr: 'Пароль не может быть пустым',
        AddDeviceConfirm: 'Добавить',

        setAdmin: 'Получить права администратора',

        //Редактирование устройства
        changePass: 'Смена пароля',
        factoryReset: 'Заводской сброс',
        del: 'Удалить это устройство',

        //Смена пароля
        oldPass: 'Введите пароль *',
        newPass: 'Новый пароль *',
        newPass2: 'Повторите пароль *',
        oldPassErr: 'Введите существующий пароль',
        passNullErr: 'Пароль не может быть пустым',
        NullErr: "Поле не может быть пустое",
        newPassErr: 'Пароль должен быть больше 4 символов',
        passErr: 'Пароли не совпадают',
        ChangePassOnDevice: 'Сменить пароль на устройстве?',
        ConfirmPass: 'Сменить пароль',

    },

    Confirm: 'Применить',

    functionsStrings: {

        //Заголовки 
        ReleOn: 'Включить реле',
        SetPhoneMode: 'Режим подъёма трубки',
        SwitchAutoOpen: 'Автооткрытие',
        SetMaxCallTime: 'Максимальное время разговора',
        SetReleOpenTime: 'Время срабатывания реле',
        SwitchSmsForwarding: 'Пересылка входящих смс (10 мин)',

        //releOn
        releOn: 'Включить реле и "открытый коллектор"',
        releOnly: 'Только реле',
        collOnly: 'Только открытый коллектор',
        closeReleBeforeReleOnly: 'Замкнуть реле до "Только реле"',

        //setMaxCallTime
        setMaxCallTime: 'Максимальное время разговора',

        //setPhoneMode
        setPhoneMode: 'Режим подъёма трубки',

        //setReleOpenTime
        setReleOpenTime: 'Время срабатывания реле',


        //swirchAutoOpen
        swirchAutoOpen: 'Автооткрытие по кнопке\nпри отсутвии GSM',
        autoOpenOn: 'Включить',
        autoOpenOff: 'Выключить',


        //switchSmsForwarding
        switchSmsForwarding: 'Пересылка входящих смс',

    },

    mainStrings: {

        //Заголовки
        getStatus: 'Состояние устройства',
        setUser: 'Добавить пользователя',
        serchUser: 'Поиск пользователя',
        delUser: 'Удалить пользователя',
        setOperator: 'Добавить оператора',
        getOperator: 'Получить список операторов',

        //setUser
        setUserErr: 'Не более 13 номеров за раз',
        setUserPhone: 'Телефон',
        setUserAddPhone: 'Добавить номер',
        setUserConfirm: 'Отправить номера',

        //serchUser
        serchUserConfirm: 'Поиск',

        //delUser
        delUserConfirm: 'Удалить',

        //setOperator
        setOperatorErr: 'Не более 4 номеров'

    },

}