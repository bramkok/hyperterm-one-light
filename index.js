'use strict';
const backgroundColor = '#eeeeee';
const foregroundColor = '#383a42';
const red = '#e45649';
const green = '#50a14f';
const yellow = '#c18401';
const blue = '#4078f2';
const magenta = '#a626a4';
const cyan = '#0184bc';
const white = '#a0a1a7';
const lightBlack = '#696c77';
const tabHeight = '24px';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: backgroundColor,
  cursorColor: '#a0a1a7',
  tabHeight,
  colors: {
    black: foregroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: backgroundColor
  },
  css: `
    ${config.css || ''}
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
    .tabs_nav {
      height: ${tabHeight} !important;
      line-height: ${tabHeight} !important;
    }
    .tabs_list {
      background-color: #e5e5e6 !important;
      border-bottom-color: rgba(0, 0, 0, .10) !important;
      max-height: ${tabHeight} !important;
    }
    .tab_tab {
      color: ${white} !important;
    }
    .tab_tab.tab_active {
      background-color: ${backgroundColor};
      border-color: rgba(0, 0, 0, .15) !important;
    }
    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor};
    }
    .tab_tab::after {
      content: "";
      position: absolute;
      pointer-events: none;
      z-index: 2;
      top: 0px;
      left: -1px;
      bottom: -1px;
      width: 2px;
      border-radius: 0;
      background: #475fd7;
      opacity: 0;
      transition: opacity .16s;
    }
    .tab_tab.tab_active::after {
      opacity: 1;
      transition-duration: .32s;
    }
    .tabs_title, .tab_icon, .tab_tab.tab_active {
      color: ${lightBlack} !important;
    }
    .tab_text {
      height: ${tabHeight} !important;
    }
    .tab_tab.tab_hasActivity {
      color: ${blue} !important;
    }
    ${config.hyperclean && !config.hyperclean.hideTabs && `
    .terms_terms {
      margin-top: ${tabHeight} !important;
    }
    `}
  `,
  termCSS: `
    ${config.termCSS || ''}
    .cursor-node {
      mix-blend-mode: multiply;
    }
    .cursor-node[focus="false"] {
      opacity: 0 !important;
    }
  `
});
