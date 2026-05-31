export interface Certificate {
  title: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
  verifyLabel?: string;
}

export const certificates: Certificate[] = [
  {
    title: "1С: Руководитель проекта",
    issuer: "Фирма «1С»",
    verifyUrl: "https://uc1.1c.ru/account/summary/?token=884a27f39846ff150f538d6e7fe000d1",
    verifyLabel: "Проверить сертификат"
  },
  {
    title: "1С: Консалтинг. Основы менеджмента",
    issuer: "Фирма «1С»",
    verifyUrl: "https://uc1.1c.ru/account/summary/?token=884a27f39846ff150f538d6e7fe000d1",
    verifyLabel: "Проверить сертификат"
  },
  {
    title: "1С:Профессионал по 1С:Управлению торговлей 8",
    issuer: "1С:Учебный центр №1",
    year: "2026",
    verifyUrl: "https://uc1.1c.ru/account/summary/?token=884a27f39846ff150f538d6e7fe000d1",
    verifyLabel: "Проверить сертификат"
  },
  {
    title: "Менеджер проектов",
    issuer: "Яндекс Практикум",
    year: "2024"
  }
];

export const education = {
  university: "МГТУ им. Н.Э. Баумана",
  faculty: "Специальное машиностроение",
  shortName: "МГТУ Бауманка"
};
