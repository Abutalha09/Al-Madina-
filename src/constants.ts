export const SHOP_INFO = {
  name: "AL-MADINA TELECOM",
  owner: "Ajaz Ahmad",
  phone: "+91 99351 56097",
  whatsapp: "919935156097",
  location: "Koter get kabristan, 400, Imam Ahmed Raza Rd, Narpoli, Bhiwandi, Maharashtra 421302, India",
  mapsUrl: "https://maps.google.com?q=Koter%20get%20kabristan,%20400,%20Imam%20Ahmed%20Raza%20Rd,%20Narpoli,%20Bhiwandi,%20Maharashtra%20421302,%20India&ftid=0x3be7bd41e5854527:0x99c0a87c983899fc&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,94286869&g_st=iw",
  shopImage: "/shop-front.jpg",
  ownerImage: "/about-owner.jpg",
  experience: "15+",
  email: "mdsaif2357@gmail.com",
};

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}
