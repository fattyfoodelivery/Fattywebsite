type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqSection = {
  title: string;
  questions: FaqItem[];
};

export type PageType = {
  home: {
    subtitle: string;
    title: string;
    description: string;
    button: string;
  };
  services: {
    title: string;
    description: string;
    food_title: string;
    parcel_title: string;
    food_description: string;
    parcel_description: string;
    choose_title: string;
    choose_question: string;
    choose_list: string[];
  };
  process: {
    title: string;
    description: string;
    order_title: string;
    order_list: string[];
    parcel_title: string;
    parcel_list: string[];
    order_now: string;
    get_more: string;
    steps: string[];
    button: string;
    mail_title: string;
    mail_description: string;
    email: string;
    subscribe: string;
  };
  contact: {
    description: string;
    title: string;
    lasio: string;
    muse: string;
    name: string;
    name_input: string;
    phone: string;
    email: string;
    subject: string;
    subject_input: string;
    message: string;
    message_input: string;
    button: string;
  };
  faq: FaqSection;
  footer: {
    description: string;
    link: string;
    address: string;
    follow: string;
    copyright: string;
  };
}

export type PageContent = {
  navigation: {
    home: string;
    services: string;
    contact: string;
  };
  page:PageType ;
};
