import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {GiLever} from 'react-icons/gi'
import {BsCalendar} from 'react-icons/bs'
import {MdPrint} from 'react-icons/md'
import {RiLoginBoxLine} from 'react-icons/ri'


export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Eleve',
    path: '/Eleve',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Niveau',
    path: '/Niveau',
    icon: <GiLever />,
    cName: 'nav-text'
  }
  // ,

  // {
  //   title: 'Rapport',
  //   path: '/Rapport',
  //   icon: <MdPrint/>,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Login',
  //   path: '/Login',
  //   icon: <RiLoginBoxLine />,
  //   cName: 'nav-text'
  // }
];