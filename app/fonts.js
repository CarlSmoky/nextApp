import { Orbitron, Raleway, Sofia_Sans, Oswald, Montserrat, Quicksand, Ubuntu, Lora, Nunito, Karla, Source_Sans_3, Lato, Josefin_San, League_Gothic} from 'next/font/google'

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
});

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap'
});

export const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sofiaSans',
  display: 'swap'
});

// //!
// export const ubuntu = Ubuntu({
//   subsets: ['latin'],
//   variable: '--font-ubuntu',
//   display: 'swap'
// });

//!
export const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap'
});

// export const hind = Hind({
//   subsets: ['latin'],
//   variable: '--font-hind',
//   display: 'swap'
// });

//!
export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap'
});

//!
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
});

export const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
});



// export const titleFont = Karla({
//   subsets: ['latin'],
//   variable: '--font-titleFont',
//   display: 'swap'
// });

// export const paragraphFont = Nunito({
//   subsets: ['latin'],
//   variable: '--font-paragraphFont',
//   display: 'swap'
// });





// export const titleFont = Josefin_Sans({
//   subsets: ['latin'],
//   variable: '--font-titleFont',
//   display: 'swap'
// });

// export const paragraphFont = Montserrat({ // but too wide
//   subsets: ['latin'],
//   variable: '--font-paragraphFont',
//   display: 'swap'
// });




// export const titleFont = League_Gothic({ // but too narrow
//   subsets: ['latin'],
//   variable: '--font-titleFont',
//   display: 'swap'
// });


export const titleFont = Source_Sans_3({ // but too narrow
  subsets: ['latin'],
  variable: '--font-titleFont',
  display: 'swap'
});

export const paragraphFont = Raleway({
  subsets: ['latin'],
  variable: '--font-paragraphFont',
  display: 'swap'
});