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
    description: "на крупнейшем производственном проекте"
  },
  {
    value: "до 6",
    label: "проектов одновременно",
    description: "в активном ведении"
  },
  {
    value: "20–30",
    label: "активных задач",
    description: "в параллельном управлении"
  },
  {
    value: "90%",
    label: "оплачиваемых задач",
    description: "доля после оптимизации процессов в Green Hill"
  },
  {
    value: "30+ млн ₽",
    label: "бюджеты проектов",
    description: "производственные внедрения"
  }
];
