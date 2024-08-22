import React from 'react';

const FooterSection = ({ title, links }:any) => {
  return (
    <div className="flex flex-col gap-5 w-full md:items-center">
      <div className="text-3xl font-bold text-white">
        <a href={title.link}>{title.text}</a>
      </div>
      <div className="flex flex-col gap-1 w-full items-center">
        {links.map((link:any, index:any) => (
          <div key={index}>
            <a href={link.href}>{link.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const sections = [
    {
      title: { text: 'HOME', link: '#greeter' },
      links: [
        { text: 'About us', href: '#about' },
        { text: 'Locations', href: '#location' },
        { text: 'Partners', href: '#partner' },
        { text: 'Numbers', href: '#partners' },
      ],
    },
    {
      title: { text: 'DOWNLOAD', link: '/download' },
      links: [
        { text: 'Android', href: '#phone' },
        { text: 'Apple', href: '#phone' },
        { text: 'Windows', href: '#computer' },
        { text: 'MacOS', href: '#computer' },
        { text: 'Linux', href: '#computer' },
      ],
    },
    {
      title: { text: 'JOIN US', link: '/join' },
      links: [
        { text: 'Work with us', href: '#' },
        { text: 'Career', href: '#' },
        { text: 'Advertise with us', href: '#' },
      ],
    },
    {
      title: { text: 'CONTACT US', link: '/contact' },
      links: [
        { text: 'Help Desk', href: '#' },
        { text: 'FAQ', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-800 text-gray-500 h-full flex flex-col py-5 items-center w-full justify-between gap-10">
      <div className="flex justify-evenly flex-col md:flex-row text-md w-full px-10 gap-10">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}
      </div>
      <p>© 2024 Meals On Wings</p>
    </footer>
  );
};

export default Footer;
