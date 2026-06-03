export interface Social {
  name: string;
  handle: string;
  url: string;
}

export const email = "mateobernalparamo@gmail.com";

// Teléfono de contacto público
export const phone = {
  display: "638 43 19 07",
  tel: "tel:+34638431907",
};

export const socials: Social[] = [
  {
    name: "LinkedIn",
    // TODO: sustituir por la URL real del perfil de LinkedIn de Mateo
    handle: "Mateo Bernal Páramo",
    url: "https://www.linkedin.com/in/mateobernalparamo",
  },
];
