import React, { useEffect, useState } from "react";
import { PlusIcon, InfoIcon } from "../icons";

import Input from "../components/Input";
import Select from "../components/Select";
import Divider from "../components/Divider";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import Title from "../components/Title";
import TextInline from "../components/TextInline";
import Accordion from "../components/Accordion";
import Badge from "../components/Badge";
import Checkbox from "../components/Checkbox";
import Switcher from "../components/Switcher";
import Popup from "../components/Popup";
import Modal from "../utils/Modal";
import Notification from "../utils/Notification";
import ThemeSwitch from "../components/ThemeSwitch";
import CardNews from "../components/CardNews";
import ServicesCard from "../components/ServicesCard";
import IconsList from "./IconsList";
import TableViewExample from "./TableViewExample";
import TextArea from "../components/TextArea";

import "./index.scss";
import Datepicker from "../components/Datepicker";

const mockListOfDomains = [
    {
        label: "Donatello@yandex.ru",
        value: "donatello@yandex.ru",
    },
    {
        label: "Michelangelo@yandex.ru",
        value: "michelangelo@yandex.ru",
    },
    {
        label: "Leonardo@yandex.ru",
        value: "leonardo@yandex.ru",
    },
];

const initialFormData = {
    firstInput: "",
    secondInput: "",
    thirdInput: "",
};

const initialCheckboxData = {
    last: false,
    plan: false,
    today: false,
};

const Example = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [checked, setChecked] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const { firstInput, secondInput, thirdInput } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        console.log(e.target.value);

    const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(e.target.checked);

    const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCheckbox(e.target.checked);

    const onCheckboxChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCheckbox2(e.target.checked);

    return (
        <div className="test">
            <h2 className="test__title">Инпуты:</h2>
            <div className="test__row">
                <Select
                    onChange={onSelectChange}
                    label="Домен"
                    id="test-domen"
                    options={mockListOfDomains}
                    invalid={false}
                />
                <Input
                    label="Логин"
                    id="firstInput"
                    value={firstInput}
                    onChange={onChange}
                    invalid={false}
                    name="firstInput"
                    style={{
                        color: "#115231",
                        backgroundColor: "#dfe8ed",
                    }}
                />
                <Input
                    label="Логин"
                    id="secondInput"
                    value={secondInput}
                    onChange={onChange}
                    invalid={true}
                    name="secondInput"
                />
                <Input
                    label="Пароль"
                    id="thirdInput"
                    type="password"
                    value={thirdInput}
                    onChange={onChange}
                    invalid={false}
                    name="thirdInput"
                />
            </div>
            <div className="test__row" style={{ gap: "3rem" }}>
                <Switcher
                    label="Свитчер"
                    checked={checked}
                    onChange={onSwitchChange}
                />
                <Checkbox
                    label="Чекбокс"
                    checked={checkbox}
                    onChange={onCheckboxChange}
                />
                <Checkbox checked={checkbox2} onChange={onCheckboxChange2} />
                <ThemeSwitch />
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Кнопки:</h2>
            <div className="test__row">
                <Button>Primary</Button>
                <Button color="red">Primary</Button>
                <Button color="green">Primary</Button>
                <Button color="yellow">Primary</Button>
            </div>
            <div className="test__row">
                <Button secondary>Secondary</Button>
                <Button secondary color="red">
                    Secondary
                </Button>
                <Button secondary color="green">
                    Secondary
                </Button>
                <Button secondary color="yellow">
                    Secondary
                </Button>
            </div>
            <div className="test__row">
                <Button disabled>Disabled</Button>
                <Button disabled secondary>
                    Disabled
                </Button>
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Пуши:</h2>
            <div className="test__row">
                <Button
                    onClick={() =>
                        Notification.show(
                            "Проверка Стандартный " + Notification.len(),
                            "текст пуша Стандартный",
                            ""
                        )
                    }
                >
                    Стандартный
                </Button>
                <Button
                    color="red"
                    onClick={() =>
                        Notification.show(
                            "Проверка Ошибка " + Notification.len(),
                            "текст пуша Ошибка",
                            "error"
                        )
                    }
                >
                    Ошибка
                </Button>
                <Button
                    secondary
                    onClick={() =>
                        Notification.show(
                            "Проверка Нотификация " + Notification.len(),
                            "текст пуша Нотификация",
                            "info"
                        )
                    }
                >
                    Нотификация
                </Button>
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Модалки:</h2>
            <div className="test__row">
                <Button
                    onClick={() => {
                        Modal.loading(
                            "Полноэкранная загрузка, закроется через 3 секунды",
                            () => {
                                console.log("Modal.loading close");
                            }
                        );

                        setTimeout(() => {
                            Modal.hide();
                        }, 3000);
                    }}
                >
                    Загрузка на весь экран
                </Button>
                <Button
                    color="red"
                    onClick={() => {
                        Modal.component(
                            <ModalCenterTestContent />,
                            "center", // показать в центре
                            () => {
                                console.log("Modal.component center close");
                            },
                            true // закрывать по клику во вне
                        );
                    }}
                >
                    Модалка в центре
                </Button>
                <Button
                    color="green"
                    onClick={() => {
                        Modal.component(
                            <ModalRightTestContent />,
                            "right", // показать справа
                            () => {
                                console.log("Modal.component right close");
                            },
                            true // закрывать по клику во вне
                        );
                    }}
                >
                    Модалка с права
                </Button>

                <Button
                    color="yellow"
                    onClick={() => {
                        Modal.alert("Заголовок", "Текст сообщения", () => {
                            console.log("OK close");
                        });
                    }}
                >
                    Alert
                </Button>

                <Button
                    secondary
                    onClick={() => {
                        Modal.confirm(
                            "Заголовок вопроса",
                            "Текст вопроса длинный длинный длинный длинный длинный длинный длинный",
                            () => console.log("Нажат OK"),
                            () => console.log("Нажат Отмена")
                        );
                    }}
                >
                    Confirm
                </Button>
            </div>

            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Дропдаун:</h2>
            <div className="test__row">
                <DropDown
                    Button={() => <Button>Open</Button>}
                    Component={() => (
                        <div style={{ width: "200px" }}>
                            <p>Контент в любом формате</p>
                        </div>
                    )}
                />
            </div>

            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Аккордион:</h2>
            <div className="test__row" style={{ flexDirection: "column" }}>
                <Accordion title="Заголовок может быть string">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "rgba(125,125,125, 0.5)",
                            padding: "1rem",
                            gap: "1rem",
                            borderRadius: ".75rem",
                        }}
                    >
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                    </div>
                    <Divider />
                </Accordion>
                <Accordion
                    title={
                        <>
                            <h4>Заголовок может быть Node</h4>
                            <PlusIcon />
                        </>
                    }
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "rgba(125,125,125, 0.5)",
                            padding: "1rem",
                            gap: "1rem",
                            borderRadius: ".75rem",
                        }}
                    >
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                        <span>
                            Сайт рыбатекст поможет дизайнеру, верстальщику,
                            вебмастеру сгенерировать несколько абзацев
                        </span>
                    </div>
                    <Divider />
                </Accordion>
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Типографика:</h2>
            <div className="test__row" style={{ flexDirection: "column" }}>
                <Divider />
                <Title title="Титул h1" type="h1" />
                <Title title="Титул h2" type="h2" />
                <Title
                    style={{ gap: "0.5rem" }}
                    title="Титул h3"
                    subtitle="Подтекст титула"
                    type="h3"
                />
                <Divider />
                <TextInline title="Титул" text="Какой-то текст" />
                <TextInline
                    style={{ gridTemplateColumns: "15rem max-content" }}
                    title="Титул"
                    text="Какой-то текст"
                />
                <TextInline
                    style={{ gridTemplateColumns: "2fr 1fr" }}
                    title="Титул"
                    text="Какой-то текст"
                />
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Баджи и Поп-ап:</h2>
            <div className="test__row" style={{ gap: "2rem" }}>
                <Popup text="Системная" subtext="Бесконечный цикл">
                    <Badge status="error" large>
                        Ошибка <InfoIcon />
                    </Badge>
                </Popup>
                <Popup
                    text="Поп-ап это обертка"
                    subtext="Которую можно сделать вокруг любого элемента"
                >
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </Popup>
                <Badge status="await" large>
                    Ожидает
                </Badge>
                <Badge status="work" large>
                    В работе
                </Badge>
            </div>
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Иконки:</h2>
            <div className="test__row">
                <IconsList />
            </div>

            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Новости:</h2>
            <CardNews />
            <Divider style={{ marginBottom: "2rem" }} />
            <h2 className="test__title">Сервисы:</h2>
            <ServicesCard />
            <Divider style={{ marginBottom: "2rem" }} />

            <TableViewExample />
        </div>
    );
};

export default Example;

const ModalCenterTestContent = () => {
    return (
        <div>
            <h2>Закрыть без изменений?</h2>
            <p>
                Одно или более полей было изменено, но изменения не были
                сохранены.
            </p>
            <Divider style={{ padding: "2.5rem 0" }} />

            <div style={{ display: "flex", gap: "1rem" }}>
                <Button
                    secondary
                    onClick={() => {
                        Modal.component(
                            <ModalCenterTestContent />,
                            "center", // показать в центре
                            () => {
                                console.log("Modal.component center close");
                            },
                            true // закрывать по клику во вне
                        );
                    }}
                >
                    Открыть еще одну модалку поверх этой
                </Button>

                <Button
                    onClick={() => {
                        Modal.hide();
                    }}
                >
                    Закрыть модалку
                </Button>

                <Button
                    onClick={() => {
                        Modal.hide(true);
                    }}
                >
                    Закрыть сразу все модалки
                </Button>
            </div>
        </div>
    );
};

const ModalRightTestContent = () => {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkbox, setCheckbox] = useState(initialCheckboxData);
    const [allChecked, setAllChecked] = useState(false);
    const [text, setText] = useState("Отправка писем");
    const [textArea, setTextArea] = useState("");
    const [date, setDate] = useState<Date | null>(new Date());

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(minDate.getDate() - 7);
    maxDate.setDate(maxDate.getDate() + 7);

    const { last, plan, today } = checkbox;

    useEffect(() => {
        setAllChecked(last && plan && today);
    }, [last, plan, today]);

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSwitchChecked(e.target.checked);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value);

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCheckbox((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked,
        }));

    const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllChecked(e.target.checked);
        setCheckbox((prevState) => {
            const newObj = { ...prevState };
            Object.keys(newObj).forEach((key) => {
                newObj[key as keyof typeof newObj] = e.target.checked;
            });
            return { ...newObj };
        });
    };

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setTextArea(e.target.value);

    const handleDatepicker = (date: Date | null) => setDate(date);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "3rem",
                    gap: "1.5rem",
                }}
            >
                <Title
                    type="h2"
                    title="Редактировать бизнес-процесс"
                    subtitle="Отправка писем"
                />
                <Divider />
                <h4 style={{ marginBottom: "1rem" }}>Информация</h4>
                <TextInline
                    style={{ gridTemplateColumns: "1.2fr 1fr" }}
                    title="Дата создания"
                    text="10.07.2023"
                />
                <Divider />
                <TextInline
                    style={{ gridTemplateColumns: "1.2fr 1fr" }}
                    title="Дата редактирования"
                    text="11.07.2023"
                />
                <Divider />
                <Input
                    onChange={handleInput}
                    label="Наименование бизнес-процесса"
                    value={text}
                    id="Отправка писем"
                />
                <Select
                    label="Домен"
                    id="sidebar-test"
                    defaultValue={mockListOfDomains[1].value}
                    options={mockListOfDomains}
                />
                <Switcher
                    style={{
                        marginTop: "1rem",
                        gridTemplateColumns: "1.2fr 1fr",
                    }}
                    label="Запуск из оркестратора"
                    checked={switchChecked}
                    onChange={handleSwitch}
                />
                <Divider />
                <Accordion
                    title={
                        <>
                            <h3>Статус</h3>
                            <Badge>2</Badge>
                        </>
                    }
                >
                    <Checkbox
                        checked={allChecked}
                        onChange={handleCheckAll}
                        label="Все"
                    />
                    <Checkbox
                        id="last"
                        checked={last}
                        onChange={handleCheckbox}
                        label="Последние"
                    />
                    <Checkbox
                        id="plan"
                        checked={plan}
                        onChange={handleCheckbox}
                        label="Запланирован"
                    />
                    <Checkbox
                        id="today"
                        checked={today}
                        onChange={handleCheckbox}
                        label="Сегодня"
                    />
                </Accordion>
                <Divider />
                <TextArea
                    value={textArea}
                    onChange={handleTextArea}
                    label="Введите сообщение..."
                    rows={4}
                />
                <Divider />
                <Datepicker
                    label="Ближайший запуск"
                    selected={date}
                    onChange={handleDatepicker}
                    minDate={minDate}
                    maxDate={maxDate}
                />
                <Divider />
            </div>

            <div className="test__right-modal-btns">
                <Button
                    secondary
                    onClick={() => {
                        Modal.component(
                            <ModalCenterTestContent />,
                            "center", // показать в центре
                            () => {
                                console.log("Modal.component center close");
                            },
                            true // закрывать по клику во вне
                        );
                    }}
                >
                    Открыть еще одну модалку поверх этой
                </Button>

                <Button
                    onClick={() => {
                        Modal.hide();
                    }}
                >
                    Закрыть модалку
                </Button>

                <Button
                    onClick={() => {
                        Modal.hide(true);
                    }}
                >
                    Закрыть сразу все модалки
                </Button>
            </div>
        </div>
    );
};
