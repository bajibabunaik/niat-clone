import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  services = [
    {
      title: 'Digital Marketing',
      desc: 'Learn SEO and social media strategies.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png'
    },
    {
      title: 'Graphic Design',
      desc: 'Master Photoshop, Illustrator & Corel Draw.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829589.png'
    },
    {
      title: 'Web Development',
      desc: 'Build dynamic websites with HTML, CSS & JS.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png'
    }
  ];

  partners = [
    { logo: 'https://via.placeholder.com/120x60?text=Partner+1' },
    { logo: 'https://via.placeholder.com/120x60?text=Partner+2' },
    { logo: 'https://via.placeholder.com/120x60?text=Partner+3' },
  ];
}
