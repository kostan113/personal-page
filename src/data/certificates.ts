export interface Certificate {
  title: string;
  issuer: string;
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
  }
];

export const education = {
  university: "МГТУ им. Н.Э. Баумана",
  faculty: "Специальное машиностроение",
  shortName: "МГТУ Бауманка"
};
