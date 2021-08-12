export interface Experience {
  nomEntreprise: string;
  nomPoste: string;
  dateDebut: string;
  dateFin: string;
  descPoste: string;
}

export interface Formation {
  date: string;
  nomInstitut: string;
  document: string
}

export interface Candidat {
  isCreated: boolean;
  name: string;
  address: string;
  province: string;
  city: string;
  email: string;
  birthday: string;
  contact: string;
  about?: string;
  skills: string[];
  hobbies: string[];
  experiences: Experience[];
  formations: Formation[];
}
