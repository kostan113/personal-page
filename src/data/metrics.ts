export interface Metric {
  value: string;
  label: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    value: "6+",
    label: "лет опыта",
    description: "в управлении проектами автоматизации и внедрения"
  },
  {
    value: "5000+",
    label: "часов",
    description: "на крупнейшем проекте автоматизации производства и склада"
  },
  {
    value: "×4",
    label: "снижение гарантийных работ",
    description: "с ~20% до ~5% за счёт перестройки процесса требований"
  },
  {
    value: "×2",
    label: "сокращён цикл согласования",
    description: "сокращён за 3 месяца в Велес Рисерч"
  },
  {
    value: "6–7",
    label: "проектов одновременно",
    description: "в активном ведении"
  },
  {
    value: "8-9",
    label: "разработчиков и аналитиков",
    description: "в одновременном распределении между проектами"
  },
  {
    value: "90%",
    label: "закрываемых задач в спринте",
    description: "доля после внедрения приоритизации и backlog-практик"
  },
 {
  value: "3-й релиз",
  label: "кризисный проект доведён до приёмки",
  description: "подключился к AI-проекту после двух неуспешных итераций и вывел на успешный релиз"
},
  {
    value: "4",
    label: "внедрённые практики",
    description: "RICE, MoSCoW, DoR, DoD"
  },
  {
    value: "30 млн ₽",
    label: "бюджеты проектов",
    description: "производственные и IT-внедрения"
  }
];
