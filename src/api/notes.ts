import { Note } from "../redux/note/sliceNote";

let notesData: Note[] = [
    {
      id: 1,
      name: 'Shop1',
      time: '2023-07-27T12:00:00',
      content: "У меня будет визит к стоматологу 3/5/2021, перенёс его с 5/5/2021",
      category: 'Task',
      dates: ['3/5/2021', '5/5/2021', '3/3/3333', '2/2/2222'],
      archived: false,
    },
    {
      id: 2,
      name: 'Shop3',
      time: '2023-07-28T14:30:00',
      content: "Написать отчет о выполненной работе",
      category: 'Idea',
      dates: [],
      archived: false,
    },
    {
      id: 3,
      name: 'Shop4',
      time: '2023-07-29T09:15:00',
      content: "Идея: создать приложение для заметок",
      category: 'Idea',
      dates: [],
      archived: false,
    },
    {
      id: 4,
      name: 'Shop4',
      time: '2023-07-30T18:00:00',
      content: "Приготовить ужин для гостей",
      category: 'Task',
      dates: [],
      archived: false,
    },
    {
      id: 5,
      name: 'Shop5',
      time: '2023-07-31T10:00:00',
      content: "Купить продукты: молоко, яйца, овощи",
      category: 'Quote',
      dates: [],
      archived: false,
    },
    {
      id: 6,
      name: 'Shop6',
      time: '2023-08-01T16:45:00',
      content: "Захватывающая идея для нового проекта",
      category: 'Idea',
      dates: [],
      archived: true,
    },
    {
      id: 7,
      name: 'Shop7',
      time: '2023-08-02T11:30:00',
      content: "Случайная мысль: посмотреть новый фильм",
      category: 'Quote',
      dates: [],
      archived: true,
    },
  ];
  
  export { notesData };
