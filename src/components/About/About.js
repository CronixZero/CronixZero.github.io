import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hey! Ich bin CronixZero. Ich bin ein Java Developer und setze mich aktuell mit JavaScript auseinander. Aktuell bin ich Moderator auf dem{' '}
          <a className="about__link" href="https://mypvp.me">
            MyPvP.me Netzwerk
          </a>{' '}
          Ich setze mich hauptsächlich mit der Minecraft Plugin Entwicklung auseinander. 
          <br />
          <br />
          In meiner meiner Freizeit beschäftige ich mich außerdem mit Bild- & Videobearbeitung.
        </p>
      </AboutInfo>
    </AboutWrapper>
  );
};

export default About;
