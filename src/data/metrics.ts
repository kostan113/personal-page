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
    value: "в 4 раза",
    label: "снижение гарантийных работ",
    description: "с ~20% до ~5% за счёт перестройки процесса требований"
  },
  {
    value: "с 1,5 мес. до 3 недель",
    label: "цикл согласования",
    description: "сокращён за 3 месяца в Велес Рисерч"
  },
  {
    value: "6–7",
    label: "проектов одновременно",
    description: "в активном ведении"
  },
  {
    value: "3–4 / 4–5",
    label: "разработчиков и аналитиков",
    description: "в одновременном распределении между проектами"
  },
  {
    value: "90%",
    label: "закрываемых задач в спринте",
    description: "доля после внедрения приоритизации и backlog-практик"
  },
 {
  value: "turnaround",
  label: "кризисного AI-проекта",
  description: "принял проект на 3-м релизе и довёл до успешной приёмки"
},
  {
    value: "RICE / MoSCoW",
    label: "DoR / DoD",
    description: "внедрённые практики приоритизации и готовности задач"
  },
  {
    value: "до 30 млн ₽",
    label: "бюджеты проектов",
    description: "производственные и IT-внедрения"
  }
];
