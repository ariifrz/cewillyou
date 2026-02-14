
// Mengambil data dari window.VALENTINE_CONFIG yang didefinisikan di index.html
// Menambahkan fallback object agar tidak terjadi error "undefined" saat diakses oleh komponen
export const VALENTINE_DATA = (window as any).VALENTINE_CONFIG || {
  initials: "H",
  recipientName: "Valentine",
  mainQuestion: "would you be my valentine?",
  openingPhoto: "https://picsum.photos/seed/opening/600/600",
  saveTheDate: {
    day: "14",
    month: "FEBRUARY",
    year: "2026",
    time: "19.00 - ??",
    location: "@ UR HOME BUBBY"
  },
  letter: {
    greeting: "Dear my love",
    body: "Happy Valentine ya sayang, i hope you know that you're matter to me, kamu penting banget buat aku, dan aku beneran se sayang itu sama kamu.. please don't choose other boy ya.. stay with me.. i promise i will always make you happy, i'll always love you, i'll always choose you to be my girlfriend in every other universe. layaknya lirik lagu ' Pelangi - Hivi! ' Tetaplah Engkau Di Sini, Jangan Datang Lalu Kau Pergi.tolong stay sama aku ya?? aku gabisa bayangin kalau kamu ninggalin aku, dan aku juga gamau moment itu terjadi, aku bakal lakuin apapun biar hubungan ini berhasil, i'll fight for us, for our relationship.. karena yang ku mau cuma kamu, ce, aku mau kamu nemenin aku selama nya, bener bener selamanya, till the lights leave my eyes. ce, sebenernya aku takut buat fall in love lagi, yang ku pikirin cuma 'mesti ditinggalin lagi' 'mesti di selingkuhin lagi'..but for you, i'll try ce. aku berani ada di relationship lagi juga karena kamu.. terimakasih sudah memilih aku sebagai cowo kamu, terimakasih sudah memilihku untuk menemanimu di perjalanan hidup yang panjang ini, izinkan aku menemanimu selamanya ce..",
    closing: "sekali lagi, happy valentine sayangg, i love you to the moon and back."
  },
  photos: [],
  colors: {
    primary: "#701111",
    accent: "#d4af37",
    bg: "#fdf2f2"
  }
};
