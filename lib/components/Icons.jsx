const Icon = ({ width = 24, height = 24, children, ...props }) => (
  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props}>
    {children}
  </svg>
)

export const Charging = (props) => (
  <Icon {...props}>
    <path d="M7 2v11h3v9l7-12h-4l3-8z" />
  </Icon>
)

export const Wifi = (props) => (
  <Icon {...props}>
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </Icon>
)

export const WifiOff = (props) => (
  <Icon {...props}>
    <path d="M21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm10-4c-1.08-1.08-2.36-1.85-3.72-2.33l3.02 3.02.7-.69zM3.41 1.64L2 3.05 5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24C7.79 10.89 6.27 11.74 5 13l2 2c1.35-1.35 3.11-2.04 4.89-2.06l7.08 7.08 1.41-1.41L3.41 1.64z" />
  </Icon>
)

export const VolumeHigh = (props) => (
  <Icon {...props}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </Icon>
)

export const VolumeLow = (props) => (
  <Icon {...props}>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </Icon>
)

export const NoVolume = (props) => (
  <Icon {...props}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </Icon>
)

export const VolumeMuted = (props) => (
  <Icon {...props}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </Icon>
)

export const Calendar = (props) => (
  <Icon {...props}>
    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
  </Icon>
)

export const Mail = (props) => (
  <Icon {...props}>
    <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
  </Icon>
)

export const Reminders = (props) => (
  <Icon {...props}>
    <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
  </Icon>
)

export const Notes = (props) => (
  <Icon {...props}>
    <path d="M2 0v24h20v-24h-20zm18 22h-16v-15h16v15zm-3-4h-10v-1h10v1zm0-3h-10v-1h10v1zm0-3h-10v-1h10v1z" />
  </Icon>
)

export const Safari = (props) => (
  <Icon {...props}>
    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm1.476 14.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
  </Icon>
)

export const Clock = (props) => (
  <Icon {...props}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </Icon>
)

export const Add = (props) => (
  <Icon {...props}>
    <path d="M24 10.29v3.42H13.71V24H10.3V13.71H0V10.3h10.29V0h3.42v10.29H24z" />
  </Icon>
)

export const Remove = (props) => (
  <Icon {...props}>
    <path d="M3.85714 24H20.1429V5.33333H3.85714V24ZM21.5 1.33333H16.75L15.3929 0H8.60714L7.25 1.33333H2.5V4H21.5V1.33333Z" />
  </Icon>
)

export const Cancel = (props) => (
  <Icon {...props}>
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM2.4 12a9.6 9.6 0 0 1 15.5-7.6L4.4 18a9.5 9.5 0 0 1-2-5.9zm9.6 9.6c-2.2 0-4.3-.8-5.9-2L19.6 6A9.6 9.6 0 0 1 12 21.6z" />
  </Icon>
)

export const ChevronRight = (props) => (
  <Icon {...props}>
    <path d="M12.75 12L4.5 3.75 8.25 0l12 12-12 12-3.75-3.75L12.75 12z" />
  </Icon>
)

export const ChevronLeft = (props) => (
  <Icon {...props}>
    <path d="M11.25 12l8.25-8.25L15.75 0l-12 12 12 12 3.75-3.75L11.25 12z" />
  </Icon>
)

export const Figma = (props) => (
  <Icon {...props}>
    <path d="M8 24c.5 0 1 0 1.5-.3a4 4 0 0 0 1.3-.7c.4-.4.7-.7.9-1.2.2-.4.3-.8.3-1.3V17H8c-.5 0-1 0-1.5.3a4 4 0 0 0-1.3.7c-.4.4-.7.7-.9 1.2a3.1 3.1 0 0 0 0 2.6c.2.5.5.8.9 1.2.3.3.8.6 1.3.7L8 24zM4 12.5c0-1.2.4-2.3 1.2-3.2C5.9 8.5 6.9 8 8 8h4v9H8c-1 0-2-.5-2.8-1.3-.8-.9-1.2-2-1.2-3.2zM4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4zM12 0h4a4 4 0 1 1 0 8h-4V0z" />
    <path d="M20 12.5a5 5 0 0 1-.7 2.5c-.4.7-1 1.3-1.8 1.7-.7.3-1.5.4-2.3.2-.8-.2-1.5-.6-2-1.2-.6-.6-1-1.4-1.1-2.3a5 5 0 0 1 .2-2.6c.3-.8.8-1.5 1.5-2 .6-.5 1.4-.8 2.2-.8 1 0 2 .5 2.8 1.3.8.9 1.2 2 1.2 3.2z" />
  </Icon>
)

export const Zeplin = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.7 15.23l-1.26.46-.06 3.73 4.34-1.59c-1.49-.5-2.58-1.38-3.02-2.6zM4.36 11.28L0 12.87l2.44 2.82 1.26-.46c-.44-1.22-.17-2.6.66-3.95z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.69 5.89c-5.55 2.02-9.13 6.2-8 9.34l20.1-7.34c-1.14-3.13-6.56-4.03-12.1-2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8 17.23c5.55-2.03 9.13-6.2 7.99-9.34l-20.1 7.34c1.15 3.15 6.56 4.02 12.11 2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.79 7.89l-20.1 7.34c.4 1.08 1.9 1.62 4 1.62 2.06 0 4.69-.51 7.42-1.51 5.55-2.03 9.45-5.3 8.68-7.45z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.79 6.27c-2.05 0-4.68.5-7.42 1.5-5.54 2.03-9.45 5.31-8.67 7.46l20.09-7.34c-.4-1.09-1.9-1.62-4-1.62z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.68 19.62c-.6 0-1.46-.54-2.6-1.59a33.48 33.48 0 0 1-4.3-5.14 33.54 33.54 0 0 1-3.34-5.81c-.77-1.84-.88-2.97-.32-3.36a.74.74 0 0 1 .43-.13c.46 0 1.34.34 2.96 1.94l.04.03v.05l-.03.35-.02.23-.16-.16C9.58 4.26 8.8 4.07 8.56 4.07a.3.3 0 0 0-.17.04c-.24.17-.26 1 .5 2.78.69 1.65 1.86 3.69 3.28 5.73a33 33 0 0 0 4.24 5.06c1.42 1.32 2.05 1.46 2.26 1.46a.3.3 0 0 0 .18-.04c.25-.18.25-1.07-.59-2.99l-.03-.08.08-.05.24-.13.1-.06.05.1c.6 1.36 1.15 3.09.42 3.6a.75.75 0 0 1-.44.13zm0-.21v.1-.1z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.93 17.17v.1c-.14 1.74-.51 3.83-1.48 3.91h-.06c-.65 0-1.27-.93-1.83-2.78-.54-1.75-.96-4.1-1.18-6.61-.21-2.52-.21-4.9.01-6.72.25-1.97.72-3 1.4-3.07h.05c.48 0 1.2.54 1.92 3.04l-.47.1a9.78 9.78 0 0 0-.78-2c-.24-.42-.48-.66-.67-.66h-.02c-.29.02-.72.74-.95 2.65a33.14 33.14 0 0 0-.01 6.62c.21 2.48.62 4.8 1.15 6.5.24.78.5 1.41.75 1.84.23.4.46.62.63.62h.02c.28-.03.81-.77 1.03-3.37l.5-.17z"
    />
  </Icon>
)

export const Code = (props) => (
  <Icon {...props}>
    <path d="M8.54 14.69L2.6 19.3 0 18.02V5.99l2.58-1.3L8.5 9.33 17.85 0 24 2.44v19.08L17.88 24l-9.34-9.31zm9.12 1.62V7.7L12.06 12l5.6 4.3zM2.8 14.76l2.94-2.66L2.8 9.18v5.58z" />
  </Icon>
)

export const GoogleChrome = (props) => (
  <Icon {...props}>
    <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
    <path d="M12 17.99a6 6 0 0 1-5.94-5.18L1.92 5.64v-.02l-.47.67c-.11.21-.23.42-.33.64l-.22.52c-.15.38-.29.76-.4 1.15l-.14.48c-.06.22-.1.44-.15.67l-.08.47-.08.66-.04.52c-.02.4-.02.8 0 1.2l.04.52.08.66.08.47.15.67.13.48.2.62.21.54.22.52.33.63.15.3.07.1c.13.23.28.45.42.66l.24.35c.14.2.3.38.45.57l.31.37.43.43c.14.14.28.29.43.42l.37.31.56.45.35.24c.22.15.43.3.66.42l.1.07.3.15c.2.12.42.23.64.33l.06.03.3.13c.81.34 1.66.59 2.53.75l3.42-5.94c-.4.08-.81.13-1.24.13v.01z" />
    <path d="M23.97 11.17l-.02-.2c-.08-1-.5-2.45-.83-3.42h-7.1a5.97 5.97 0 0 1-.29 9.13L11.51 24c1.49 0 3.49-.27 4.92-.84l.05-.02.08-.03c.94-.39 1.83-.9 2.65-1.5l.02-.02c.37-.28.71-.57 1.04-.88l.05-.05.17-.17c.72-.72 1.35-1.53 1.86-2.4l.05-.08.1-.2c.17-.3.32-.6.46-.92l.18-.41c.12-.3.22-.6.31-.9l.13-.38c.11-.42.2-.84.27-1.27l.03-.24c.06-.36.1-.73.11-1.1v-.3c.01-.37 0-.75-.02-1.12z" />
    <path d="M22.4 6c-.25-.44-.54-.85-.83-1.24l-.1-.12a11.6 11.6 0 0 0-.84-.98l-.2-.2c-.33-.32-.67-.63-1.02-.9l-.08-.07c-.4-.3-.81-.58-1.24-.83l-.08-.06-.33-.17c-.19-.1-.37-.2-.57-.29L16.55.9l-.47-.19L15.4.5 15 .4c-.25-.07-.5-.12-.75-.17L13.9.15l-.74-.1-.4-.03C12.54 0 12.33 0 12.12 0h-.52l-.4.03a12 12 0 0 0-2.68.49l-.18.04-.67.25-.42.17-.54.26-.52.26-.2.1-.28.19c-.34.2-.67.43-.99.67l-.41.33-.5.44-.3.3c-.18.17-.36.36-.52.54l-.11.14 3.41 5.92A6 6 0 0 1 12 5.99h10.4V6z" />
  </Icon>
)

export const Skype = (props) => (
  <Icon {...props}>
    <path d="M23.3 14.55C25.06 6.74 18.2-.35 10.18 1 5.81-1.7 0 1.36 0 6.55c0 1.2.33 2.33.91 3.3C-.7 17.69 6.2 24.69 14.22 23.23c.94.5 2 .78 3.14.78a6.55 6.55 0 0 0 5.95-9.45zm-11.2 5.33c-2.35 0-4.63-.57-5.99-2.5-2.02-2.85.64-4.28 1.95-3.2 1.1.93.75 3.15 3.95 3.15 1.41 0 3.15-.6 3.15-2 0-2.82-6.24-1.49-8.73-4.55a3.77 3.77 0 0 1 .04-4.55c1.95-2.51 7.68-2.67 10.14-.77 2.28 1.76 1.66 4.1-.17 4.1-2.2 0-1.05-2.89-4.61-2.89-2.58 0-3.6 1.84-1.78 2.73 2.42 1.2 8.75.83 8.75 5.6 0 3.36-3.25 4.88-6.7 4.88z" />
  </Icon>
)

export const Music = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm4.28-18.93l.5-.07c.23 0 .39.12.45.34.02.07.01 9.1.01 10.6a1.9 1.9 0 0 1-1.37 1.76c-.47.14-1.15.2-1.48.12-.3-.07-.52-.2-.75-.44-.35-.34-.5-.7-.5-1.15 0-.25.04-.44.16-.7.17-.36.4-.57.79-.77.31-.16.6-.24 1.42-.41.54-.12.76-.16.87-.29.15-.17.04-5.36 0-5.43-.07-.1-.2-.14-.35-.12l-5.62 1.13a.4.4 0 0 0-.29.32l-.02 1.34c-.01 2.2-.05 6.39-.16 6.7a2.3 2.3 0 0 1-.18.37c-.14.2-.4.46-.6.58-.5.29-1.45.44-1.96.3-.54-.14-.94-.5-1.12-1.03-.09-.24-.1-.65-.05-.93.07-.28.22-.55.41-.75.35-.35.77-.52 1.88-.74l.55-.13a.64.64 0 0 0 .34-.32c.04-.1.07-8.5.07-8.5l.06-.1a.7.7 0 0 1 .36-.34c.1-.03 5.64-1.16 6.58-1.34z"
    />
  </Icon>
)

export const SequelPro = (props) => (
  <Icon {...props}>
    <path d="M24 16.2c0 3.76-5.37 6.8-12 6.8S0 19.96 0 16.2c0-3.75 5.37-6.8 12-6.8s12 3.05 12 6.8z" />
    <path d="M20.62 15.58c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 12.75c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 10.14c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 7.32c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 4.7c0 2.6-3.72 4.7-8.31 4.7C7.7 9.4 4 7.3 4 4.7S7.72 0 12.3 0c4.6 0 8.32 2.1 8.32 4.7z" />
  </Icon>
)

export const Slack = (props) => (
  <Icon {...props}>
    <path d="M8.8 12.7a2.5 2.5 0 0 0-2.5 2.5v6.3a2.5 2.5 0 0 0 5 0v-6.3c0-1.4-1-2.5-2.5-2.5zM0 15.2a2.5 2.5 0 0 0 5 0v-2.6H2.6A2.5 2.5 0 0 0 0 15.2zM8.8 0a2.5 2.5 0 0 0 0 5h2.6V2.5c0-1.4-1.2-2.5-2.6-2.5zM2.5 11.4h6.3a2.5 2.5 0 0 0 0-5H2.5a2.5 2.5 0 0 0 0 5zM21.5 6.3a2.5 2.5 0 0 0-2.6 2.5v2.6h2.6a2.5 2.5 0 0 0 0-5zM12.6 2.5v6.3a2.5 2.5 0 0 0 5 0V2.5a2.5 2.5 0 0 0-5 0zM17.7 21.5c0-1.4-1.1-2.5-2.5-2.5h-2.6v2.5a2.5 2.5 0 0 0 5 0zM21.5 12.6h-6.3a2.5 2.5 0 0 0 0 5.1h6.3a2.5 2.5 0 0 0 0-5z" />
  </Icon>
)

export const AndroidMessages = (props) => (
  <Icon {...props}>
    <path d="M.61 5.7a.3.3 0 0 1 0-.48l2.42-1.86a.3.3 0 0 1 .48.24V7.3a.3.3 0 0 1-.48.24L.6 5.69z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 3.3H3.18v16.1c0 1.1.9 2 2 2H22a2 2 0 0 0 2-2V5.3a2 2 0 0 0-2-2zM9.15 8.66a.64.64 0 1 0 0 1.28h8.88a.64.64 0 0 0 0-1.28H9.15zm-.64 3.67c0-.35.3-.64.64-.64h8.88a.64.64 0 1 1 0 1.28H9.15a.64.64 0 0 1-.64-.64zm.64 2.4a.64.64 0 1 0 0 1.27h8.88a.64.64 0 1 0 0-1.28H9.15z"
    />
  </Icon>
)

export const Caprine = (props) => (
  <Icon {...props}>
    <path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.62 4.47 8.65V24l4.09-2.24c1.09.3 2.24.46 3.44.46 6.63 0 12-4.97 12-11.1C24 4.97 18.63 0 12 0zm1.2 14.96l-3.06-3.26-5.97 3.26L10.73 8l3.13 3.26L19.76 8l-6.57 6.96z" />
  </Icon>
)

export const Firefox = (props) => (
  <Icon {...props}>
    <path d="M23.76 8.17a.2.2 0 0 0-.2.12l-.27.6c-.1-.79-.3-2.05-.55-2.87a5.44 5.44 0 0 0-1.22-2.13.19.19 0 0 0-.23-.03.2.2 0 0 0-.1.21l.2.95a7.75 7.75 0 0 0-2.66-1.9A9.43 9.43 0 0 0 4.5 5.09c-.16-.13-.4-.36-.52-.7-.25-.59-.37-1.25-.37-1.26a.2.2 0 0 0-.13-.15.2.2 0 0 0-.2.04c-1.44 1.39-1.3 3.55-1.25 4.04-.17.19-.68.76-1.2 1.58A8.17 8.17 0 0 0 0 11.5c0 .09.04.17.11.2a.2.2 0 0 0 .23-.04l.42-.45c-.05.18-.1.37-.13.59-.2.94-.14 2.4-.13 2.46 0 .1.06.17.15.19a.2.2 0 0 0 .22-.11l.25-.53c.18 1.28.89 4.01 3.59 6.53a11.3 11.3 0 0 0 7.63 2.93c2.77 0 5.38-.99 7.56-2.86 2.57-2.21 3.53-5.38 3.88-7.64.38-2.45.16-4.34.15-4.43a.2.2 0 0 0-.17-.17zm-4.4.08c.01 0 .28.35.34 1.24.04.67-.1 1.74-.19 2.33l-.52-.6a.2.2 0 0 0-.23-.06.2.2 0 0 0-.12.2c0 .02.18 1.53-.12 2.85a4.12 4.12 0 0 1-.55 1.36l.07-1a.2.2 0 0 0-.15-.2.2.2 0 0 0-.22.11c-.01.02-.92 1.97-3.4 2.74-.36.11-.72.17-1.1.17a5.95 5.95 0 0 1-3.21-1.16h.17c.98 0 1.73-.41 2.34-.75.16-.1.3-.18.45-.25a3.28 3.28 0 0 1 1.59-.47c.16 0 .29-.1.33-.25.1-.38-.36-1.05-.92-1.36a1.88 1.88 0 0 0-.94-.22c-.57 0-1.28.18-2.3.45a2.1 2.1 0 0 1-.55.08 1.7 1.7 0 0 1-1.27-.56c-.32-.34-.5-.8-.48-1.17.01-.18.08-.36.5-.36.37 0 .78.15.78.16h.07c.11 0 .2-.08.2-.19v-.03L9.88 9.6c.2-.13.67-.44 1.12-.77 1.1-.8 1.26-1.1 1.14-1.34-.16-.32-.57-.37-1.05-.43-.27-.04-.58-.08-.86-.17-.58-.2-.96-.7-1.05-.82a1.2 1.2 0 0 1 .1-.75c.2-.33.83-.83 1.06-1a.2.2 0 0 0 .08-.2.2.2 0 0 0-.17-.15c-.02 0-.6-.06-1.57.25-.78.27-1.39.7-1.6.85a7.99 7.99 0 0 0-.5-.07A7.82 7.82 0 0 1 17.05 3.8l-1.33.22a.2.2 0 0 0-.16.19c-.01.09.05.17.13.2.02 0 1.78.56 3.1 1.57.29.23.56.53.8.88.21.47.38.96.5 1.45l-.44-.35a.2.2 0 0 0-.26.02.2.2 0 0 0-.01.27zm0 0" />
  </Icon>
)

export const Terminal = (props) => (
  <Icon {...props}>
    <path d="M5.03 14.83l1.42 1.41L10.69 12 6.45 7.76 5.03 9.17 7.86 12l-2.83 2.83zM15 14h-4v2h4v-2z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm20 2H2v16h20V4z"
    />
  </Icon>
)

export const Spark = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.218 3.25078L19.2492 17.8922C19.3453 18.0961 19.1555 18.2859 18.9539 18.1898L13.6664 15.7429C13.6242 15.7242 13.5773 15.7219 13.5375 15.7359C13.4883 15.7523 13.4484 15.7898 13.4297 15.8414L12.1055 19.6687C12.0857 19.7256 12.0361 19.7543 11.9859 19.7548L11.984 19.7549C11.9329 19.755 11.8817 19.7263 11.8617 19.6687L10.5375 15.8414C10.5188 15.7899 10.4767 15.7524 10.4299 15.736L10.4297 15.7383C10.3875 15.7242 10.343 15.7265 10.3008 15.7453L5.01328 18.1922C4.84717 18.2704 4.6904 18.1574 4.6912 18.0039C4.69101 17.9682 4.69931 17.9304 4.71797 17.8922L11.7492 3.25078C11.8453 3.05391 12.1242 3.05391 12.218 3.25078Z"
    />
  </Icon>
)

export const Spotify = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
    />
  </Icon>
)

export const Default = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM11.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </Icon>
)
