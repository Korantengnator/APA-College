// One place for the contact details used on the Contact page and in the footer.
export const CONTACT = {
  addressLines: ["Opp. Grant Court, North-Legon", "Accra, Ghana"],
  phones: [
    { display: "024 361 4654", href: "tel:+233243614654" },
    { display: "020 039 7955", href: "tel:+233200397955" },
  ],
  whatsappNumber: "233243614654",
  email: "apacollegeeducationalservices@gmail.com",
  mapsLink: "https://maps.app.goo.gl/87PhSMSX3FSWizGg9?g_st=ic",
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
